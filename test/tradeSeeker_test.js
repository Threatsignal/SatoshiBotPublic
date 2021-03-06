require("babel-polyfill"); //This should go first
import {CryptopiaMiddleware, CryptopiaCurrencies} from "../src/middleware/cryptopiaMiddleware";
import {cryptopiaMarkets} from "../src/cryptopiaMarkets";
import {API_CREDENTIALS, CRYPTOPIA_CREDENTIALS} from "../src/service/secret";
import TradeSeeker from "../src/controller/tradeSeeker";
import TradeScout from "../src/controller/tradeScout";
import Utilities from '../src/utilities';
import TradeMaster from '../src/controller/tradeMaster';

import Trade from "../src/model/trade";

const sinon = require('sinon');

const expect = require('chai').expect;
const bunyan = require('bunyan');
const NUMBER_SLAVES = 1;

const cryptopiaService = require('../src/service/cryptopiaAPI')();
const cryptopiaOptions = {
	API_KEY: CRYPTOPIA_CREDENTIALS.KEY,
	API_SECRET: CRYPTOPIA_CREDENTIALS.SECRET
};
cryptopiaService.setOptions(cryptopiaOptions);

let profitLog = bunyan.createLogger({
	name: "myapp",
	streams: [
		{
			level: 'info',
			path: './profitable.log'
		}
	]
});
let errorLog = bunyan.createLogger({
	name: "myapp",
	streams: [
		{
			level: 'error',
			path: './error.log'
		}
	]
});

let successLog = bunyan.createLogger({
	name: "myapp",
	streams: [
		{
			level: 'info',
			path: './Success.log'
		}
	]
});

const utilities = new Utilities();

let cryptopiaTradeScout = new TradeScout(NUMBER_SLAVES, cryptopiaMarkets);

let cryptopiaCurrencies = new CryptopiaCurrencies(cryptopiaService);


let middleware = new CryptopiaMiddleware('cryptopia', cryptopiaService, cryptopiaCurrencies);
let production = false;

let cryptopiaTradeMaster = new TradeMaster(successLog, errorLog);
let tradeSeeker = new TradeSeeker(profitLog, errorLog, 0, cryptopiaTradeScout, utilities, production, cryptopiaTradeMaster, middleware);

describe('TradeSeeker - Constructor', () => {
	it('should set the constructor values to the expected values', () => {
		//let currencies = cryptopiaTradeScout.getWork(0);
		expect(tradeSeeker.utilities).to.be.equal(utilities);
		expect(tradeSeeker.middleware).to.be.equal(middleware);
		expect(tradeSeeker.tradeScout).to.be.equal(cryptopiaTradeScout);
		expect(tradeSeeker.workerNumber).to.be.equal(0);
		expect(tradeSeeker.errorLog).to.be.equal(errorLog);
		expect(tradeSeeker.profitLog).to.be.equal(profitLog);
		expect(tradeSeeker.currencies).to.be.equal(cryptopiaMarkets[0]);
		expect(tradeSeeker.tradeMaster).to.be.equal(cryptopiaTradeMaster);
	});
});

describe('TradeSeeker - assignMarketPairs', () => {
	it('should set the pairs of TradeSeeker properly when called', () => {
		expect(tradeSeeker.pair1).to.be.equal(cryptopiaMarkets[0][0] + '_' + cryptopiaMarkets[0][2]);
		expect(tradeSeeker.pair2).to.be.equal(cryptopiaMarkets[0][1] + '_' + cryptopiaMarkets[0][2]);
		expect(tradeSeeker.pair3).to.be.equal(cryptopiaMarkets[0][0] + '_' + cryptopiaMarkets[0][1]);
	});
});


describe('TradeSeeker - LogicFlow', () => {
	var tradeScoutStub;
	var cryptopiaCurrencies2;
	var oldMarkets;
	
	var cryptopiaTradeMaster2;
	beforeEach(function () {
		oldMarkets = {
			one: {
				buy: [
					{
						quantity: 231.19800452,
						rate: 13.92580232
					}
				],
				sell: [
					{
						quantity: 230.203,
						rate: 15.20
					}
				]
				
			},
			two: {
				buy: [
					{
						quantity: 0.249,
						rate: 8300
					}
				],
				sell: [
					{
						quantity: 0.02570287,
						rate: 8400
					}
				]
			},
			three: {
				buy: [
					{
						quantity: 0.1053,
						rate: 0.0001300
					}
				],
				sell: [
					{
						quantity: 1386.25271649,
						rate: 0.00162027
					}
				]
			}
		};
		tradeScoutStub = sinon.createStubInstance(TradeScout);
		let array = ["LUX", "BTC", "USDT"];
		tradeScoutStub.getWork.returns(array);
		cryptopiaCurrencies2 = sinon.createStubInstance(CryptopiaCurrencies);
		cryptopiaCurrencies2.getBalances.returns({
			LUX: {coins: 30.86332525, status: 'OK'}, BTC: {coins: 70.0453008, status: 'OK'},
			USDT: {coins: 500.56462343, status: 'OK'}
		});
		cryptopiaTradeMaster2 = sinon.createStubInstance(TradeMaster);
	});
	
	// it('should set values accordingly based off mock api data above with sufficient funds for all Three', () => {
	// 	let next = function () {
	// 		console.log('hi from test');
	// 	};
	//	
	// 	let middleware = new CryptopiaMiddleware('cryptopia', cryptopiaService, cryptopiaCurrencies2);
	// 	let anotherTradeSeeker = new TradeSeeker(profitLog, errorLog, 0, tradeScoutStub, utilities, false, cryptopiaTradeMaster2, middleware);
	//	
	// 	anotherTradeSeeker.logicFlow(next, oldMarkets);
	//	
	// 	expect(anotherTradeSeeker.middleware.marketBalances.getBalances()).to.deep.equal({
	// 		LUX: {coins: 30.86332525, status: 'OK'}, BTC: {coins: 70.0453008, status: 'OK'},
	// 		USDT: {coins: 500.56462343, status: 'OK'}
	// 	});
	// 	expect(anotherTradeSeeker.passMinimumTrade).to.be.true;
	// 	expect(anotherTradeSeeker.potentialTrade.profit).to.be.equal(3.69731203);
	// 	expect(anotherTradeSeeker.potentialTrade.isProfitable()).to.be.true;
	// 	expect(anotherTradeSeeker.currentMarket).to.deep.equal([
	// 		{
	// 			quantity: 231.19800452,
	// 			rate: 13.92580232
	// 		},
	// 		{
	// 			quantity: 0.02570287,
	// 			rate: 8400
	// 		},
	// 		{
	// 			quantity: 1386.25271649,
	// 			rate: 0.00162027
	// 		}
	// 	]);
	// 	expect(anotherTradeSeeker.currencies).to.deep.equal(["LUX", "BTC", "USDT"]);
	// 	expect(anotherTradeSeeker.pair1).to.be.equal('LUX_USDT');
	// 	expect(anotherTradeSeeker.pair2).to.be.equal('BTC_USDT');
	// 	expect(anotherTradeSeeker.pair3).to.be.equal('LUX_BTC');
	// 	expect(anotherTradeSeeker.middleware).to.be.equal(middleware);
	// 	expect(anotherTradeSeeker.potentialTrade.isSufficientFundsTwoTrades()).to.be.true;
	// 	expect(anotherTradeSeeker.establishTrade(anotherTradeSeeker.currentMarket)).to.be.true;
	// 	expect(anotherTradeSeeker.potentialTrade.isSufficientFundsThreeTrades()).to.be.true;
	// 	expect(anotherTradeSeeker.potentialTrade.reCalculateTrade().lowest).to.be.equal(1);
	// 	expect(anotherTradeSeeker.potentialTrade.reCalculateTrade()).to.deep.equal({currency: "LUX", lowest: 1});
	// });
	//
	//
	// it('should set values properly from mock data when only sufficient funds in two.', () => {
	//	
	// 	let next = function () {
	// 		console.log('hi from test');
	// 	};
	//	
	// 	cryptopiaCurrencies2.getBalances.returns({
	// 		BTC: {coins: 70.0453008, status: 'OK'},
	// 		USDT: {coins: 500.56462343, status: 'OK'}
	// 	});
	//	
	//	
	// 	let middleware = new CryptopiaMiddleware('cryptopia', cryptopiaService, cryptopiaCurrencies2);
	// 	let anotherTradeSeeker = new TradeSeeker(profitLog, errorLog, 0, tradeScoutStub, utilities, false, cryptopiaTradeMaster2, middleware);
	//	
	// 	anotherTradeSeeker.logicFlow(next, oldMarkets);
	//	
	// 	expect(anotherTradeSeeker.middleware.marketBalances.getBalances()).to.deep.equal({
	// 		BTC: {coins: 70.0453008, status: 'OK'},
	// 		USDT: {coins: 500.56462343, status: 'OK'}
	// 	});
	//	
	// 	expect(anotherTradeSeeker.passMinimumTrade).to.be.true;
	// 	expect(anotherTradeSeeker.potentialTrade.profit).to.be.equal(3.69731203);
	// 	expect(anotherTradeSeeker.potentialTrade.isProfitable()).to.be.true;  
	// 	expect(anotherTradeSeeker.potentialTrade.isSufficientFundsTwoTrades()).to.be.true;
	// 	expect(anotherTradeSeeker.potentialTrade.isSufficientFundsThreeTrades()).to.be.false;
	// 	expect(anotherTradeSeeker.establishTrade(anotherTradeSeeker.currentMarket)).to.be.true;
	// 	expect(anotherTradeSeeker.potentialTrade.reCalculateTrade().lowest).to.be.equal(1);
	// });
	//
	//
	//
	// it('should properly recalculate trade amount when insufficient funds', () => {
	//	
	// 	let next = function () {
	// 		console.log('hi from test');
	// 	};
	//	
	// 	cryptopiaCurrencies2.getBalances.returns({
	// 		LUX: {coins: 4.86332525, status: 'OK'}, BTC: {coins: 0.0453008, status: 'OK'},
	// 		USDT: {coins: 20.00, status: 'OK'}
	// 	});
	//	
	// 	let middleware = new CryptopiaMiddleware('cryptopia', cryptopiaService, cryptopiaCurrencies2);
	// 	let anotherTradeSeeker = new TradeSeeker(profitLog, errorLog, 0, tradeScoutStub, utilities, false, cryptopiaTradeMaster2, middleware);
	//	
	// 	anotherTradeSeeker.logicFlow(next, oldMarkets);
	//	
	// 	expect(anotherTradeSeeker.middleware.marketBalances.getBalances()).to.deep.equal({
	// 		LUX: {coins: 4.86332525, status: 'OK'}, BTC: {coins: 0.0453008, status: 'OK'},
	// 		USDT: {coins: 20.00, status: 'OK'}
	// 	});
	//	
	// 	//expect(anotherTradeSeeker.currencies).to.be.equal(1);
	// 	expect(anotherTradeSeeker.potentialTrade.profit).to.be.equal(0.34111401); //Doesn't even recalculate atm b/c we changed profits....
	// 	expect(anotherTradeSeeker.potentialTrade.isProfitable()).to.be.true; //will hav to chagne this back later when fix profitable bug.
	//	
	// 	//Can't test for false here because since we are lowering trade down it'll become lower enough to be sufficient !!!
	//	
	// 	expect(anotherTradeSeeker.establishTrade(anotherTradeSeeker.currentMarket)).to.be.true;
	// 	expect(anotherTradeSeeker.potentialTrade.completedTrade3.quantity).to.be.equal(1.46355039);
	// 	expect(anotherTradeSeeker.potentialTrade.completedTrade2.quantity).to.be.equal(0.00237612);
	// 	expect(anotherTradeSeeker.potentialTrade.completedTrade1.quantity).to.be.equal(1.46355039);
	// 	expect(anotherTradeSeeker.passMinimumTrade).to.be.true;
	//
	//	
	// 	//expect(anotherTradeSeeker.potentialTrade.reCalculateTrade().lowest).to.be.equal(0.09226);
	// 	// expect(trader.potentialTrade.completedTrade3.quantity).
	// });
	
});

describe('TradeSeeker - isValidAPICall', () => {
	const goodMarket = {
		one: {
			buy: [
					{
						quantity: 0.10000000,
						rate: 10099.00000000
					}
			],
			sell: [
					{
						quantity: 0.05000000,
						rate:  10099.12102449 
					}
				]
		},
		
		two: {
			buy: [
				{
					quantity: 308.50666351,
					rate: 0.78599994
				}
			],
			sell: [
				{
					quantity:  13.00000000,
					rate:  0.78600016
				}
			]
			
		},
		
		three: {
			buy: [
				{
					quantity: 0.00103377,
					rate: 12550.00020001
				}
			],
			sell: [
				{
					quantity: 0.00069900,
					rate:  12837.99999947
				}
			]
		}
	};
	
	const badMarket1 = {
		one: {
			buy: [
				{
					quantity: 0.10000000,
					rate: 10099.00000000
				}
			],
			sell: [
				{
					quantity: 0.05000000,
					rate:  10099.12102449
				}
			]
		},
		
		two: {
			buy: [
				{
					quantity: 308.50666351,
					rate: 0.78599994
				}
			],
			sell: [
				{
					quantity:  13.00000000,
					rate:  0.78600016
				}
			]
			
		},
		
		three: {
			buy: [
				{
					quantity: 0.00103377,
					rate: 12550.00020001
				}
			],
			sell: [
				{
					quantity: 0.00069900,
					rate:  11837.99999947
				}
			]
		}
	};
	
	const badMarket2 = {
		one: {
			buy: [
				{
					quantity: 0.10000000,
					rate: 10099.00000000
				}
			],
			sell: [
				{
					quantity: 0.05000000,
					rate:  10099.12102449
				}
			]
		},
		
		two: {
			buy: [
				{
					quantity: 308.50666351,
					rate: 0.79599994
				}
			],
			sell: [
				{
					quantity:  13.00000000,
					rate:  0.78600016
				}
			]
			
		},
		
		three: {
			buy: [
				{
					quantity: 0.00103377,
					rate: 12550.00020001
				}
			],
			sell: [
				{
					quantity: 0.00069900,
					rate:  11837.99999947
				}
			]
		}
	};
	
	const badMarket3 = {
		one: {
			buy: [
				{
					quantity: 0.10000000,
					rate: 10099.00000000
				}
			],
			sell: [
				{
					quantity: 0.05000000,
					rate:  10098.12102449
				}
			]
		},
		
		two: {
			buy: [
				{
					quantity: 308.50666351,
					rate: 0.78599994
				}
			],
			sell: [
				{
					quantity:  13.00000000,
					rate:  0.78600016
				}
			]
			
		},
		
		three: {
			buy: [
				{
					quantity: 0.00103377,
					rate: 12550.00020001
				}
			],
			sell: [
				{
					quantity: 0.00069900,
					rate:  11837.99999947
				}
			]
		}
	};
	
	
	
	it('should return false when api call brings in bad information', () => {
		expect(tradeSeeker.isValidAPICall(goodMarket)).to.be.true;
	});
	it('should return false if 1 of the markets sell is less than the buy', () => {
		expect(tradeSeeker.isValidAPICall(badMarket1)).to.be.false;
		expect(tradeSeeker.isValidAPICall(badMarket2)).to.be.false;
		expect(tradeSeeker.isValidAPICall(badMarket3)).to.be.false;
		
	});
	
});


	











