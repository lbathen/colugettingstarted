var Colu = require('colu')

var settings = {
    network: 'testnet',
    privateSeed: '446d67388a97135d227f7f1689077e8445a8730a72678471827e218ec8fa7432'
}

var colu = new Colu(settings)
colu.on('connect', function () {
  var address = colu.hdwallet.getAddress()

    console.log("address: ", address)
});

colu.init()