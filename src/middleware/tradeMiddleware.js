export default class TradeMiddleware {
	constructor(marketListing, marketFee, service, marketBalances,  API_TIMEOUT){
		if(new.target === TradeMiddleware){
			throw new TypeError("Cannot construct the TradeMiddleware instances directly!");
		}
		this.marketListing = marketListing;
		this.API_TIMEOUT = API_TIMEOUT;
		this.marketFee = marketFee;
		this.marketBalances = marketBalances;
		this.service = service
	}
	
	getMarketFee(){
		return this.marketFee;
	}
	
	isUSDT(param){
		return param.toLowerCase() === 'usdt';
	}
	isBTC(param){
		return param.toLowerCase() === 'btc';
	}
	isLTC(param){
		return param.toLowerCase() === 'ltc';
	}
	isDOGE(param){
		return param.toLowerCase() === 'doge';
	}
	isBCH(param){
		return param.toLowerCase() === 'bch';
	}
	isNZDT(param){
		return param.toLowerCase() === 'nzdt';
	}
}