const config = require('config')
const express = require('express')
const app = express()

//{"ipaddress":"165.225.66.54","language":"en-US","software":"Windows NT 10.0; Win64; x64"}
app.get('/', function(req, res){
    res.send({
        "ipaddress" : req.ip,
        "language": req.get('Accept-Language'),
        "software": req.get('User-Agent')
    }); 
}) 

app.listen(config.port, function () {
  console.log('Example app listening on port ' + config.port)
})