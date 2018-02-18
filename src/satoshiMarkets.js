let satoshiMarkets = [
["1337", "BCH", "BTC"],
["1337", "BCH", "LTC"],
["1337", "BCH", "DOGE"],
["1337", "BCH", "USDT"],
["1337", "BTC", "USDT"],
["1337", "LTC", "BCH"],
["1337", "LTC", "BTC"],
["1337", "LTC", "DOGE"],
["1337", "LTC", "USDT"],
["1337", "DOGE", "BCH"],
["1337", "DOGE", "BTC"],
["1337", "DOGE", "LTC"],
["1337", "DOGE", "USDT"],
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
["XP", "DOGE", "USDT"],
["JEW", "BCH", "BTC"],
["JEW", "BCH", "LTC"],
["JEW", "BCH", "DOGE"],
["JEW", "BCH", "USDT"],
["JEW", "BTC", "USDT"],
["JEW", "LTC", "BCH"],
["JEW", "LTC", "BTC"],
["JEW", "LTC", "DOGE"],
["JEW", "LTC", "USDT"],
["JEW", "DOGE", "BCH"],
["JEW", "DOGE", "BTC"],
["JEW", "DOGE", "LTC"],
["JEW", "DOGE", "USDT"],
["SIB", "BCH", "BTC"],
["SIB", "BCH", "LTC"],
["SIB", "BCH", "DOGE"],
["SIB", "BCH", "USDT"],
["SIB", "BTC", "USDT"],
["SIB", "LTC", "BCH"],
["SIB", "LTC", "BTC"],
["SIB", "LTC", "DOGE"],
["SIB", "LTC", "USDT"],
["SIB", "DOGE", "BCH"],
["SIB", "DOGE", "BTC"],
["SIB", "DOGE", "LTC"],
["SIB", "DOGE", "USDT"],
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
["VSX", "BCH", "BTC"],
["VSX", "BCH", "LTC"],
["VSX", "BCH", "DOGE"],
["VSX", "BCH", "USDT"],
["VSX", "BTC", "USDT"],
["VSX", "LTC", "BCH"],
["VSX", "LTC", "BTC"],
["VSX", "LTC", "DOGE"],
["VSX", "LTC", "USDT"],
["VSX", "DOGE", "BCH"],
["VSX", "DOGE", "BTC"],
["VSX", "DOGE", "LTC"],
["VSX", "DOGE", "USDT"],
["SPK", "BCH", "BTC"],
["SPK", "BCH", "LTC"],
["SPK", "BCH", "DOGE"],
["SPK", "BCH", "USDT"],
["SPK", "BTC", "USDT"],
["SPK", "LTC", "BCH"],
["SPK", "LTC", "BTC"],
["SPK", "LTC", "DOGE"],
["SPK", "LTC", "USDT"],
["SPK", "DOGE", "BCH"],
["SPK", "DOGE", "BTC"],
["SPK", "DOGE", "LTC"],
["SPK", "DOGE", "USDT"],
["BRO", "BCH", "BTC"],
["BRO", "BCH", "LTC"],
["BRO", "BCH", "DOGE"],
["BRO", "BCH", "USDT"],
["BRO", "BTC", "USDT"],
["BRO", "LTC", "BCH"],
["BRO", "LTC", "BTC"],
["BRO", "LTC", "DOGE"],
["BRO", "LTC", "USDT"],
["BRO", "DOGE", "BCH"],
["BRO", "DOGE", "BTC"],
["BRO", "DOGE", "LTC"],
["BRO", "DOGE", "USDT"],
["DIN", "BCH", "BTC"],
["DIN", "BCH", "LTC"],
["DIN", "BCH", "DOGE"],
["DIN", "BCH", "USDT"],
["DIN", "BTC", "USDT"],
["DIN", "LTC", "BCH"],
["DIN", "LTC", "BTC"],
["DIN", "LTC", "DOGE"],
["DIN", "LTC", "USDT"],
["DIN", "DOGE", "BCH"],
["DIN", "DOGE", "BTC"],
["DIN", "DOGE", "LTC"],
["DIN", "DOGE", "USDT"],
["SUCR", "BCH", "BTC"],
["SUCR", "BCH", "LTC"],
["SUCR", "BCH", "DOGE"],
["SUCR", "BCH", "USDT"],
["SUCR", "BTC", "USDT"],
["SUCR", "LTC", "BCH"],
["SUCR", "LTC", "BTC"],
["SUCR", "LTC", "DOGE"],
["SUCR", "LTC", "USDT"],
["SUCR", "DOGE", "BCH"],
["SUCR", "DOGE", "BTC"],
["SUCR", "DOGE", "LTC"],
["SUCR", "DOGE", "USDT"],
["BWK", "BCH", "BTC"],
["BWK", "BCH", "LTC"],
["BWK", "BCH", "DOGE"],
["BWK", "BCH", "USDT"],
["BWK", "BTC", "USDT"],
["BWK", "LTC", "BCH"],
["BWK", "LTC", "BTC"],
["BWK", "LTC", "DOGE"],
["BWK", "LTC", "USDT"],
["BWK", "DOGE", "BCH"],
["BWK", "DOGE", "BTC"],
["BWK", "DOGE", "LTC"],
["BWK", "DOGE", "USDT"],
["ENT", "BCH", "BTC"],
["ENT", "BCH", "LTC"],
["ENT", "BCH", "DOGE"],
["ENT", "BCH", "USDT"],
["ENT", "BTC", "USDT"],
["ENT", "LTC", "BCH"],
["ENT", "LTC", "BTC"],
["ENT", "LTC", "DOGE"],
["ENT", "LTC", "USDT"],
["ENT", "DOGE", "BCH"],
["ENT", "DOGE", "BTC"],
["ENT", "DOGE", "LTC"],
["ENT", "DOGE", "USDT"],
["TRC", "BCH", "BTC"],
["TRC", "BCH", "LTC"],
["TRC", "BCH", "DOGE"],
["TRC", "BCH", "USDT"],
["TRC", "BTC", "USDT"],
["TRC", "LTC", "BCH"],
["TRC", "LTC", "BTC"],
["TRC", "LTC", "DOGE"],
["TRC", "LTC", "USDT"],
["TRC", "DOGE", "BCH"],
["TRC", "DOGE", "BTC"],
["TRC", "DOGE", "LTC"],
["TRC", "DOGE", "USDT"],
["CRAVE", "BCH", "BTC"],
["CRAVE", "BCH", "LTC"],
["CRAVE", "BCH", "DOGE"],
["CRAVE", "BCH", "USDT"],
["CRAVE", "BTC", "USDT"],
["CRAVE", "LTC", "BCH"],
["CRAVE", "LTC", "BTC"],
["CRAVE", "LTC", "DOGE"],
["CRAVE", "LTC", "USDT"],
["CRAVE", "DOGE", "BCH"],
["CRAVE", "DOGE", "BTC"],
["CRAVE", "DOGE", "LTC"],
["CRAVE", "DOGE", "USDT"]];
 export {satoshiMarkets}