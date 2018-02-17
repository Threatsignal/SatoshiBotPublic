let satoshiMarkets = [
["BCH", "BTC", "USDT"],
["BCH", "LTC", "BTC"],
["BCH", "LTC", "DOGE"],
["BCH", "LTC", "USDT"],
["BCH", "DOGE", "BTC"],
["BCH", "DOGE", "LTC"],
["BCH", "DOGE", "USDT"],
["BLK", "BCH", "BTC"],
["BLK", "BCH", "LTC"],
["BLK", "BCH", "DOGE"],
["BLK", "BCH", "USDT"],
["BLK", "BTC", "USDT"],
["BLK", "LTC", "BCH"],
["BLK", "LTC", "BTC"],
["BLK", "LTC", "DOGE"],
["BLK", "LTC", "USDT"],
["BLK", "DOGE", "BCH"],
["BLK", "DOGE", "BTC"],
["BLK", "DOGE", "LTC"],
["BLK", "DOGE", "USDT"],
["BOLI", "BCH", "BTC"],
["BOLI", "BCH", "LTC"],
["BOLI", "BCH", "DOGE"],
["BOLI", "BCH", "USDT"],
["BOLI", "BTC", "USDT"],
["BOLI", "LTC", "BCH"],
["BOLI", "LTC", "BTC"],
["BOLI", "LTC", "DOGE"],
["BOLI", "LTC", "USDT"],
["BOLI", "DOGE", "BCH"],
["BOLI", "DOGE", "BTC"],
["BOLI", "DOGE", "LTC"],
["BOLI", "DOGE", "USDT"],
["BOSS", "BCH", "BTC"],
["BOSS", "BCH", "LTC"],
["BOSS", "BCH", "DOGE"],
["BOSS", "BCH", "USDT"],
["BOSS", "BTC", "USDT"],
["BOSS", "LTC", "BCH"],
["BOSS", "LTC", "BTC"],
["BOSS", "LTC", "DOGE"],
["BOSS", "LTC", "USDT"],
["BOSS", "DOGE", "BCH"],
["BOSS", "DOGE", "BTC"],
["BOSS", "DOGE", "LTC"],
["BOSS", "DOGE", "USDT"],
["BTCD", "BCH", "BTC"],
["BTCD", "BCH", "LTC"],
["BTCD", "BCH", "DOGE"],
["BTCD", "BCH", "USDT"],
["BTCD", "BTC", "USDT"],
["BTCD", "LTC", "BCH"],
["BTCD", "LTC", "BTC"],
["BTCD", "LTC", "DOGE"],
["BTCD", "LTC", "USDT"],
["BTCD", "DOGE", "BCH"],
["BTCD", "DOGE", "BTC"],
["BTCD", "DOGE", "LTC"],
["BTCD", "DOGE", "USDT"],
["BTCS", "BCH", "BTC"],
["BTCS", "BCH", "LTC"],
["BTCS", "BCH", "DOGE"],
["BTCS", "BCH", "USDT"],
["BTCS", "BTC", "USDT"],
["BTCS", "LTC", "BCH"],
["BTCS", "LTC", "BTC"],
["BTCS", "LTC", "DOGE"],
["BTCS", "LTC", "USDT"],
["BTCS", "DOGE", "BCH"],
["BTCS", "DOGE", "BTC"],
["BTCS", "DOGE", "LTC"],
["BTCS", "DOGE", "USDT"],
["BTCZ", "BCH", "BTC"],
["BTCZ", "BCH", "LTC"],
["BTCZ", "BCH", "DOGE"],
["BTCZ", "BCH", "USDT"],
["BTCZ", "BTC", "USDT"],
["BTCZ", "LTC", "BCH"],
["BTCZ", "LTC", "BTC"],
["BTCZ", "LTC", "DOGE"],
["BTCZ", "LTC", "USDT"],
["BTCZ", "DOGE", "BCH"],
["BTCZ", "DOGE", "BTC"],
["BTCZ", "DOGE", "LTC"],
["BTCZ", "DOGE", "USDT"],
["DASH", "BCH", "BTC"],
["DASH", "BCH", "LTC"],
["DASH", "BCH", "DOGE"],
["DASH", "BCH", "USDT"],
["DASH", "BTC", "USDT"],
["DASH", "LTC", "BCH"],
["DASH", "LTC", "BTC"],
["DASH", "LTC", "DOGE"],
["DASH", "LTC", "USDT"],
["DASH", "DOGE", "BCH"],
["DASH", "DOGE", "BTC"],
["DASH", "DOGE", "LTC"],
["DASH", "DOGE", "USDT"],
["LTC", "BCH", "BTC"],
["LTC", "BCH", "DOGE"],
["LTC", "BCH", "USDT"],
["LTC", "BTC", "USDT"],
["LTC", "DOGE", "BCH"],
["LTC", "DOGE", "BTC"],
["LTC", "DOGE", "USDT"],
["ZEC", "BCH", "BTC"],
["ZEC", "BCH", "LTC"],
["ZEC", "BCH", "DOGE"],
["ZEC", "BCH", "USDT"],
["ZEC", "BTC", "USDT"],
["ZEC", "LTC", "BCH"],
["ZEC", "LTC", "BTC"],
["ZEC", "LTC", "DOGE"],
["ZEC", "LTC", "USDT"],
["ZEC", "DOGE", "BCH"],
["ZEC", "DOGE", "BTC"],
["ZEC", "DOGE", "LTC"],
["ZEC", "DOGE", "USDT"],
["ZEN", "BCH", "BTC"],
["ZEN", "BCH", "LTC"],
["ZEN", "BCH", "DOGE"],
["ZEN", "BCH", "USDT"],
["ZEN", "BTC", "USDT"],
["ZEN", "LTC", "BCH"],
["ZEN", "LTC", "BTC"],
["ZEN", "LTC", "DOGE"],
["ZEN", "LTC", "USDT"],
["ZEN", "DOGE", "BCH"],
["ZEN", "DOGE", "BTC"],
["ZEN", "DOGE", "LTC"],
["ZEN", "DOGE", "USDT"],
["STRAT", "BCH", "BTC"],
["STRAT", "BCH", "LTC"],
["STRAT", "BCH", "DOGE"],
["STRAT", "BCH", "USDT"],
["STRAT", "BTC", "USDT"],
["STRAT", "LTC", "BCH"],
["STRAT", "LTC", "BTC"],
["STRAT", "LTC", "DOGE"],
["STRAT", "LTC", "USDT"],
["STRAT", "DOGE", "BCH"],
["STRAT", "DOGE", "BTC"],
["STRAT", "DOGE", "LTC"],
["STRAT", "DOGE", "USDT"],
["GRLC", "BCH", "BTC"],
["GRLC", "BCH", "LTC"],
["GRLC", "BCH", "DOGE"],
["GRLC", "BCH", "USDT"],
["GRLC", "BTC", "USDT"],
["GRLC", "LTC", "BCH"],
["GRLC", "LTC", "BTC"],
["GRLC", "LTC", "DOGE"],
["GRLC", "LTC", "USDT"],
["GRLC", "DOGE", "BCH"],
["GRLC", "DOGE", "BTC"],
["GRLC", "DOGE", "LTC"],
["GRLC", "DOGE", "USDT"],
["XVG", "BCH", "BTC"],
["XVG", "BCH", "LTC"],
["XVG", "BCH", "DOGE"],
["XVG", "BCH", "USDT"],
["XVG", "BTC", "USDT"],
["XVG", "LTC", "BCH"],
["XVG", "LTC", "BTC"],
["XVG", "LTC", "DOGE"],
["XVG", "LTC", "USDT"],
["XVG", "DOGE", "BCH"],
["XVG", "DOGE", "BTC"],
["XVG", "DOGE", "LTC"],
["XVG", "DOGE", "USDT"],
["HSR", "BCH", "BTC"],
["HSR", "BCH", "LTC"],
["HSR", "BCH", "DOGE"],
["HSR", "BCH", "USDT"],
["HSR", "BTC", "USDT"],
["HSR", "LTC", "BCH"],
["HSR", "LTC", "BTC"],
["HSR", "LTC", "DOGE"],
["HSR", "LTC", "USDT"],
["HSR", "DOGE", "BCH"],
["HSR", "DOGE", "BTC"],
["HSR", "DOGE", "LTC"],
["HSR", "DOGE", "USDT"],
["DGB", "BCH", "BTC"],
["DGB", "BCH", "LTC"],
["DGB", "BCH", "DOGE"],
["DGB", "BCH", "USDT"],
["DGB", "BTC", "USDT"],
["DGB", "LTC", "BCH"],
["DGB", "LTC", "BTC"],
["DGB", "LTC", "DOGE"],
["DGB", "LTC", "USDT"],
["DGB", "DOGE", "BCH"],
["DGB", "DOGE", "BTC"],
["DGB", "DOGE", "LTC"],
["DGB", "DOGE", "USDT"],
["ZCL", "BCH", "BTC"],
["ZCL", "BCH", "LTC"],
["ZCL", "BCH", "DOGE"],
["ZCL", "BCH", "USDT"],
["ZCL", "BTC", "USDT"],
["ZCL", "LTC", "BCH"],
["ZCL", "LTC", "BTC"],
["ZCL", "LTC", "DOGE"],
["ZCL", "LTC", "USDT"],
["ZCL", "DOGE", "BCH"],
["ZCL", "DOGE", "BTC"],
["ZCL", "DOGE", "LTC"],
["ZCL", "DOGE", "USDT"],
["ONION", "BCH", "BTC"],
["ONION", "BCH", "LTC"],
["ONION", "BCH", "DOGE"],
["ONION", "BCH", "USDT"],
["ONION", "BTC", "USDT"],
["ONION", "LTC", "BCH"],
["ONION", "LTC", "BTC"],
["ONION", "LTC", "DOGE"],
["ONION", "LTC", "USDT"],
["ONION", "DOGE", "BCH"],
["ONION", "DOGE", "BTC"],
["ONION", "DOGE", "LTC"],
["ONION", "DOGE", "USDT"],
["BTM", "BCH", "BTC"],
["BTM", "BCH", "LTC"],
["BTM", "BCH", "DOGE"],
["BTM", "BCH", "USDT"],
["BTM", "BTC", "USDT"],
["BTM", "LTC", "BCH"],
["BTM", "LTC", "BTC"],
["BTM", "LTC", "DOGE"],
["BTM", "LTC", "USDT"],
["BTM", "DOGE", "BCH"],
["BTM", "DOGE", "BTC"],
["BTM", "DOGE", "LTC"],
["BTM", "DOGE", "USDT"],
["XZC", "BCH", "BTC"],
["XZC", "BCH", "LTC"],
["XZC", "BCH", "DOGE"],
["XZC", "BCH", "USDT"],
["XZC", "BTC", "USDT"],
["XZC", "LTC", "BCH"],
["XZC", "LTC", "BTC"],
["XZC", "LTC", "DOGE"],
["XZC", "LTC", "USDT"],
["XZC", "DOGE", "BCH"],
["XZC", "DOGE", "BTC"],
["XZC", "DOGE", "LTC"],
["XZC", "DOGE", "USDT"],
["MONA", "BCH", "BTC"],
["MONA", "BCH", "LTC"],
["MONA", "BCH", "DOGE"],
["MONA", "BCH", "USDT"],
["MONA", "BTC", "USDT"],
["MONA", "LTC", "BCH"],
["MONA", "LTC", "BTC"],
["MONA", "LTC", "DOGE"],
["MONA", "LTC", "USDT"],
["MONA", "DOGE", "BCH"],
["MONA", "DOGE", "BTC"],
["MONA", "DOGE", "LTC"],
["MONA", "DOGE", "USDT"],
["RDD", "BCH", "BTC"],
["RDD", "BCH", "LTC"],
["RDD", "BCH", "DOGE"],
["RDD", "BCH", "USDT"],
["RDD", "BTC", "USDT"],
["RDD", "LTC", "BCH"],
["RDD", "LTC", "BTC"],
["RDD", "LTC", "DOGE"],
["RDD", "LTC", "USDT"],
["RDD", "DOGE", "BCH"],
["RDD", "DOGE", "BTC"],
["RDD", "DOGE", "LTC"],
["RDD", "DOGE", "USDT"],
["EMC2", "BCH", "BTC"],
["EMC2", "BCH", "LTC"],
["EMC2", "BCH", "DOGE"],
["EMC2", "BCH", "USDT"],
["EMC2", "BTC", "USDT"],
["EMC2", "LTC", "BCH"],
["EMC2", "LTC", "BTC"],
["EMC2", "LTC", "DOGE"],
["EMC2", "LTC", "USDT"],
["EMC2", "DOGE", "BCH"],
["EMC2", "DOGE", "BTC"],
["EMC2", "DOGE", "LTC"],
["EMC2", "DOGE", "USDT"],
["SFI", "BCH", "BTC"],
["SFI", "BCH", "LTC"],
["SFI", "BCH", "DOGE"],
["SFI", "BCH", "USDT"],
["SFI", "BTC", "USDT"],
["SFI", "LTC", "BCH"],
["SFI", "LTC", "BTC"],
["SFI", "LTC", "DOGE"],
["SFI", "LTC", "USDT"],
["SFI", "DOGE", "BCH"],
["SFI", "DOGE", "BTC"],
["SFI", "DOGE", "LTC"],
["SFI", "DOGE", "USDT"],
["DOGE", "BCH", "BTC"],
["DOGE", "BCH", "LTC"],
["DOGE", "BCH", "USDT"],
["DOGE", "BTC", "USDT"],
["DOGE", "LTC", "BCH"],
["DOGE", "LTC", "BTC"],
["DOGE", "LTC", "USDT"],
["XP", "BCH", "BTC"],
["XP", "BCH", "LTC"],
["XP", "BCH", "DOGE"],
["XP", "BCH", "USDT"],
["XP", "BTC", "USDT"],
["XP", "LTC", "BCH"],
["XP", "LTC", "BTC"],
["XP", "LTC", "DOGE"],
["XP", "LTC", "USDT"],
["XP", "DOGE", "BCH"],
["XP", "DOGE", "BTC"],
["XP", "DOGE", "LTC"],
["XP", "DOGE", "USDT"]];
 export {satoshiMarkets}