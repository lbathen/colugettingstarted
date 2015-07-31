var Colu = require('colu')

var privateSeed = '446d67388a97135d227f7f1689077e8445a8730a72678471827e218ec8fa7432'
var assetId = 'LDAnvUTchr6ZguNcyuJeRDmhw8zPgKvkPfy9B'
var addresses = ['mxL7CGyFhDK1q28DPcsrsgUbGco7XnuD8P','mxL7CGyFhDK1q28DPcsrsgUbGco7XnuD8P']

var settings = {
    network: 'testnet',
    privateSeed: privateSeed
}

var args= {
    assetId: assetId,
    addresses: addresses,
    numConfirmations: 0
}

var colu = new Colu(settings)
colu.on('connect', function () {
  colu.coloredCoins.getAssetData(args, function (err, body) {

        if (err) return console.error(err)
        console.log("assetData: ", JSON.stringify(body))
    })
})

colu.init()