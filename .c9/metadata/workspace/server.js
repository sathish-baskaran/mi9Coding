{"filter":false,"title":"server.js","tooltip":"/server.js","undoManager":{"mark":6,"position":6,"stack":[[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":37,"column":0},"action":"insert","lines":["","//SB: loading this is .js file on node server for initial setup as per package.json","","var http = require('http');","var port = process.env.port || 1337;","var express = require('express');","var app = express();","var data = require(\"./data\");","var score = require('underscore');","","app.get(\"/\", function (req, res) {","    ","    data.getPayload(function (err, results) {","        ","        if (err) {","            res.send(400, err);","        }","        else {","            ","            res.set(\"Content-Type\", \"application/json\");","            ","            var filteredList = score._.filter(results[0].details , function (i) {","                return i.drm == true && i.episodeCount > 0","            });","          ","            var filter = score._.map(filteredList , function (num, key) {","                ","                return { image : num.image.showImage, title : num.title, slug: num.slug};","            });","            res.json(filter);","        }","    });","","});","","//SB: create server instance to handle from client side","http.createServer(app).listen(port);",""]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":0},"end":{"row":4,"column":36},"action":"remove","lines":["var port = process.env.port || 1337;"]},{"start":{"row":4,"column":0},"end":{"row":6,"column":1},"action":"insert","lines":["var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080","var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'"," "]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":27},"end":{"row":4,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":0},"end":{"row":5,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":40,"column":30},"end":{"row":40,"column":34},"action":"remove","lines":["port"]},{"start":{"row":40,"column":30},"end":{"row":40,"column":41},"action":"insert","lines":["server_port"]}]}],[{"group":"doc","deltas":[{"start":{"row":40,"column":41},"end":{"row":40,"column":42},"action":"insert","lines":[","]}]}],[{"group":"doc","deltas":[{"start":{"row":40,"column":42},"end":{"row":40,"column":59},"action":"insert","lines":["server_ip_address"]}]}]]},"ace":{"folds":[],"scrolltop":200,"scrollleft":0,"selection":{"start":{"row":14,"column":34},"end":{"row":14,"column":34},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":13,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1424380163541,"hash":"5018cecf604dda26c5547e922dfc0620aeb91074"}