
//SB: loading this is .js file on node server for initial setup as per package.json

var http = require('http');
var express = require('express');
var score = require('underscore');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

var data = require("./data");

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'

app.use(function (error, req, res, next) {
    //Catch bodyParser error
    if (error.message === "invalid json") {
        res.send(400, error.message);
    } else {
        next();
    }
});

app.post("/", function (req, res) {
    
    data.getPayload(function (err, results) {
        
        if (err) {
            res.send(400, err);
        }
        else {
            
            res.set("Content-Type", "application/json");
            
            var filteredList = score._.filter(results[0].details , function (i) {
                return i.drm == true && i.episodeCount > 0
            });
            
            var filter = score._.map(filteredList , function (num, key) {
                
                return { image : num.image.showImage, title : num.title, slug: num.slug };
            });
            res.send(filter);
        }
    });

});


//SB: create server instance to handle from client side
http.createServer(app).listen(server_port,server_ip_address);
