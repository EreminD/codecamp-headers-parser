const config = require('config')
const express = require('express')
const app = express()

app.get('/', function(req, res){
    var requestInfo = {
        "ipaddress" : req.ip.split(":").pop(),
        "language": req.get('Accept-Language').split(",")[0],
        "software": req.get('User-Agent').split("(")[1].split(")")[0]
    };
    console.log('Got request: ' + JSON.stringify(requestInfo));
    res.send(requestInfo); 
}) 

app.listen(config.port, function () {
  console.log('Example app listening on port ' + config.port)
})