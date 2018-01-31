var util = require('util'),
    _ = require('underscore'),
    request	= require('request'),
    crypto = require('crypto'),
    cryptoJS = require('crypto-js'),
    VError = require('verror'),
    nonce = require('nonce'),
    microtime = require('microtime');
    

var TradeSatoshi = function TradeSatoshi(key, secret, server, timeout)
{
    this.key = key;
    this.secret = secret;

    this.server = server || 'https://www.tradesatoshi.com/api';

    this.timeout = timeout || 30000;
};

TradeSatoshi.prototype.privateRequest = function(method, params, callback)
{
    var functionName = 'TradeSatoshi.privateRequest()',
        self = this;

    if(!this.key || !this.secret)
    {
        var error = new VError('%s must provide key and secret to make this API request.', functionName);
        return callback(error);
    }

    if(!_.isArray(params))
    {
        var error = new VError('%s second parameter %s must be an array. If no params then pass an empty array []', functionName, params);
        return callback(error);
    }

    if (!callback || typeof(callback) != 'function')
    {
        var error = new VError('%s third parameter needs to be a callback function', functionName);
        return callback(error);
    }

    var tonce = microtime.now();
    var uri = this.server + '/private/'+method;
  
    var json = JSON.stringify(params);
    var objJsonB64 = new Buffer(json).toString("base64"); //Encoding 

	
	
	//console.log(message);
	
	//let signature = cryptoJS.HmacSHA512(sign, this.secret);
	var sign = this.key+'POST'+encodeURI(uri)+tonce+objJsonB64;
	
	let signature = crypto.createHmac('sha512', this.secret).update(sign).digest('base64');
	
    
  let parameters = {
        URI: this.server + '/private/'+method, 
        API_PUBLIC_KEY: this.key,
        POST_PARAMS: objJsonB64,
        NONCE: tonce,
        SIGNATURE: signature
  };
  
  
  var paramString = Object.keys(parameters).map(function (param) {
	  return encodeURIComponent(param) + '=' + encodeURIComponent(parameters[param]);
  }).join('&');
  
  // console.log("ParamString: "+paramString);
  

    


    // var signer = crypto.createHmac('sha512', this.secret);
    // var hmac = signer.update(sign).digest('hex');
    // var signature = new Buffer(hmac).toString('base64');
	
	var message = "URI=" + this.server + '/private/'+method + "&" +
		"API_PUBLIC_KEY=" + this.key + "&" +
		"POST_PARAMS="+ objJsonB64 +  "&" +
		"NONCE="+ tonce + "&" +
		"SIGNATURE="+ signature;
	
	// console.log("MEssage: "+message);

    
    
    var header = this.key+':'+signature+':'+tonce;
    // console.log("Header: "+header);

    var headers = {
        "Content-Type": "application/json; charset=utf-8",
        'Authorization': 'amx '+header, //Need to change this to  API_PUBLIC_KEY + ':' + SIGNATURE + ':' + NONCE
    };

    var options = {
        url: this.server + '/private/'+method+'/',
        method: 'POST',
        headers: headers,
        // headers: {"Authorization": 'Basic '+header},
        body: objJsonB64,    //This needed?
        timeout: this.timeout,
        //qs: parameters,
        // json: {}
    };
    console.dir(options);
    console.log(Buffer.from(objJsonB64, 'base64').toString('ascii'));

    var requestDesc = util.format('%s request to url %s with tonce %s, method %s and params %s',
        options.method, options.url, tonce, method, JSON.stringify(params));

    executeRequest(options, requestDesc, callback);
	
	
	//Authorization Builder
	function buildAuth(params, opts) {
		let nonce = crypto.randomBytes(64).toString('hex');
		let md5 = crypto.createHash('md5').update(JSON.stringify(params)).digest();
		let requestContentBase64String = md5.toString('base64');
		let signature = opts.API_KEY + "POST" + encodeURIComponent(opts.HOST_URL + "/" + opts.API_PATH).toLowerCase() + nonce + requestContentBase64String;
		let hmacsignature = crypto.createHmac('sha512', new Buffer(opts.API_SECRET, "base64")).update(signature).digest().toString('base64');
		return "amx " + opts.API_KEY + ":" + hmacsignature + ":" + nonce;
	}
    
    
    
    
    
    
    
};

TradeSatoshi.prototype.publicRequest = function(method, params, callback)
{
    var functionName = 'TradeSatoshi.publicRequest()';

    if(!_.isObject(params))
    {
        var error = new VError('%s second parameter %s must be an object. If no params then pass an empty object {}', functionName, params);
        return callback(error);
    }

    if (!callback || typeof(callback) != 'function')
    {
        var error = new VError('%s third parameter needs to be a callback function with err and data parameters', functionName);
        return callback(error);
    }

    var headers = {"User-Agent": "TradeSatoshi Javascript API Client"};

    var path = '/public/' + method;

    var options = {
        url: this.server + path,
        method: 'GET',
        headers: headers,
        timeout: this.timeout,
        qs: params,
        json: {}        // request will parse the json response into an object
    };

    var requestDesc = util.format('%s request to url %s with parameters %s',
        options.method, options.url, JSON.stringify(params));

    executeRequest(options, requestDesc, callback)
};

function executeRequest(options, requestDesc, callback)
{
    var functionName = 'TradeSatoshi.executeRequest()';

    request(options, function(err, response, data)
    {
        var error = null;   // default to no errors

        if(err)
        {
            error = new VError(err, '%s failed %s', functionName, requestDesc);
            error.name = err.code;
        }
        else if (response.statusCode < 200 || response.statusCode >= 300)
        {
            error = new VError('%s HTTP status code %s returned from %s', functionName,
                response.statusCode, requestDesc);
            error.name = response.statusCode;
        }
        // if request was not able to parse json response into an object
        else if (!_.isObject(data) )
        {
            error = new VError('%s could not parse response from %s\nResponse: %s', functionName, requestDesc, data);
            error.name = data;
        }
        else if (_.has(data, 'error'))
        {
            error = new VError('%s API returned error code %s from %s\nError message: %s', functionName,
                data.error.code, requestDesc, data.error.message);
            error.name = data.error.message;
        }

        callback(error, data);
    });
}

function constructParamArray(args, maxArgs)
{
    var paramArray = [];

    for (var i = 1; i <= maxArgs; i++)
    {
        // if the argument is undefined
        if (_.isUndefined(args[i]))
            break;
        else
            paramArray.push(args[i]);
    }

    return paramArray;
}

//
// Public Functions
//

/*
Description
Uri: https://tradesatoshi.com/api/public/getcurrencies
Parameters: None
 */
TradeSatoshi.prototype.getCurrencies = function getCurrencies(callback)
{
	this.publicRequest('getcurrencies', {}, callback);
};

/*
Description
Uri: https://tradesatoshi.com/api/public/getticker?market=LTC_BTC
Parameters:
market: The market name e.g. 'LTC_BTC' (required)
 */
TradeSatoshi.prototype.getTicker = function getTicker(callback, market)
{
    this.publicRequest('getticker', {market: market}, callback);
};

/*
Description
Uri: https://tradesatoshi.com/api/public/getmarkethistory?market=LTC_BTC&count=20
Parameters:
market: The market name e.g. 'LTC_BTC' (required)
count: The max amount of records to return (optional, default: 20)
 */
TradeSatoshi.prototype.getMarketHistory = function getMarketHistory(callback, params)
{
	this.publicRequest('getmarkethistory', params, callback);
};

/*
Description
Uri: https://tradesatoshi.com/api/public/getmarketsummary?market=LTC_BTC
Parameters:
market: The market name e.g. 'LTC_BTC' (required)
 */
TradeSatoshi.prototype.getMarketSummary = function getMarketSummary(callback, market)
{
    this.publicRequest('getmarketsummary', {market: market}, callback);
};

/*
Description
Uri: https://tradesatoshi.com/api/public/getmarketsummaries
Parameters: None
 */
TradeSatoshi.prototype.getMarketSummaries = function getMarketSummary(callback)
{
	this.publicRequest('getmarketsummaries', {}, callback);
};

/*
Description
Uri: https://tradesatoshi.com/api/public/getorderbook?market=LTC_BTC&type=both&depth=20
Parameters:
market: The market name e.g. 'LTC_BTC' (required)
type: The order book type 'buy', 'sell', 'both' (optional, default: 'both')
depth: Max of records to return (optional, default: 20)
 */
TradeSatoshi.prototype.getOrderBook = function getOrderBook(callback, params)
{
	this.publicRequest('getorderbook', params, callback);
};

//
// Private Functions
//
TradeSatoshi.prototype.getBalances = function getBalances(callback)
{
	var params = constructParamArray(arguments, 0);
	//console.log(params);
	
	this.privateRequest('getbalances', params, callback);
};

TradeSatoshi.prototype.getBalance = function getBalance(callback, currency)
{
	var params = constructParamArray(arguments, 1);
	//console.log(params);
	
	this.privateRequest('getbalance', params, callback);
};


TradeSatoshi.prototype.getOrders = function getOrders(callback, market, count)
{
    var params = constructParamArray(arguments, 2);

    this.privateRequest('getorders', params, callback);
};

TradeSatoshi.prototype.sellOrder2 = function sellOrder2(callback, price, amount, market)
{
    var params = constructParamArray(arguments, 3);

    this.privateRequest('sellOrder2', params, callback);
};

// calls either buyOrder2 or sellOrder2 functions depending on the second type parameter
TradeSatoshi.prototype.createOrder2 = function createOrder2(callback, type, price, amount, market)
{
    var functionName = 'TradeSatoshi.createOrder2()',
        // rest removes the first element of the array
        params = constructParamArray(_.rest(arguments), 3);

    if (type === 'buy')
    {
        this.privateRequest('buyOrder2', params, callback);
    }
    else if (type === 'sell')
    {
        this.privateRequest('sellOrder2', params, callback);
    }
    else
    {
        var error = new VError('%s second parameter type "%s" needs to be either "buy" or "sell"', functionName, type);
        callback(error);
    }
};

TradeSatoshi.prototype.cancelOrder = function cancelOrder(callback, id, market)
{
    var params = constructParamArray(arguments, 2);

    this.privateRequest('cancelOrder', params, callback);
};

TradeSatoshi.prototype.getOrders = function getOrders(callback, openOnly, market, limit, offset, since, withDetail)
{
    var params = constructParamArray(arguments, 6);

    this.privateRequest('getorders', params, callback);
};

TradeSatoshi.prototype.getOrder = function getOrder(callback, id, market, withDetail)
{
    var params = constructParamArray(arguments, 3);

    this.privateRequest('getOrder', params, callback);
};

TradeSatoshi.prototype.getTransactions = function getTransactions(callback, type, limit, offset, since, sinceType)
{
    var params = constructParamArray(arguments, 3);

    this.privateRequest('getTransactions', params, callback);
};

TradeSatoshi.prototype.getMarketDepth2 = function getMarketDepth2(callback, limit, market)
{
    var params = constructParamArray(arguments, 2);

    this.privateRequest('getMarketDepth2', params, callback);
};

TradeSatoshi.prototype.getDeposits = function getDeposits(callback, currency, pendingOnly)
{
    var params = constructParamArray(arguments, 2);

    this.privateRequest('getDeposits', params, callback);
};

TradeSatoshi.prototype.getWithdrawal = function getWithdrawal(callback, id, currency)
{
    var params = constructParamArray(arguments, 2);

    this.privateRequest('getWithdrawal', params, callback);
};

TradeSatoshi.prototype.getWithdrawals = function getWithdrawals(callback, currency, pendingOnly)
{
    var params = constructParamArray(arguments, 2);

    this.privateRequest('getWithdrawals', params, callback);
};

TradeSatoshi.prototype.requestWithdrawal = function requestWithdrawal(callback, currency, amount)
{
    var params = constructParamArray(arguments, 2);

    this.privateRequest('requestWithdrawal', params, callback);
};

TradeSatoshi.prototype.getAccountInfo = function getAccountInfo(callback, type)
{
    var params = constructParamArray(arguments, 1);

    this.privateRequest('getAccountInfo', params, callback);
};

module.exports = TradeSatoshi;
