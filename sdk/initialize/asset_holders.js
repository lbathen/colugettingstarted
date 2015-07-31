// http://documentation.colu.co/#AssetHolders

var Colu = require('colu')
var settings = {
    coloredCoinsHost: 'https://testnet.api.coloredcoins.org',
    coluHost: 'https://testnet.engine.colu.co',
    network: 'testnet'
}
var colu = new Colu(settings)

var assetId = 'LDAnvUTchr6ZguNcyuJeRDmhw8zPgKvkPfy9B'

colu.on('connect', function () {
    colu.coloredCoins.getStakeHolders(assetId,function (err, body) {
        if (err) return console.error(err)        
        console.log("Body: ",body)
    })
})

colu.init()