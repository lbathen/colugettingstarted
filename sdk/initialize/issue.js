var Colu = require('colu')

var privateSeed = null
var assetId;

var settings = {
    network: 'testnet',
    privateSeed: '446d67388a97135d227f7f1689077e8445a8730a72678471827e218ec8fa7432'
}


var colu = new Colu(settings)
colu.on('connect', function () {
    var asset = {
        amount: 10,
        divisibility: 0,
        reissueable: false,
        transfer: [{
            amount: 10
        }],
        metadata: {        
            'assetName': 'Event Token',
            'issuer': 'Danny',
            'description': 'Simple token to enter our super duper awesome demo',
            'userData': {
                'meta' : [
                    {key: 'Item ID', value: 1, type: 'Number'},
                    {key: 'Item Name', value: 'Event Token', type: 'String'},
                    {key: 'Company', value: 'Danny Corp', type: 'String'},
                    {key: 'Address', value: 'San Jose, CA', type: 'String'}
                ]
            }
        }
    }

  colu.issueAsset(asset, function (err, body) {

        if (err) return console.error(err)
        assetId = body.assetId
        privateSeed = colu.hdwallet.getPrivateSeed()
        console.log("PrivateSeed: ", privateSeed)
        console.log("Body: ", body)
    })
})

colu.init()