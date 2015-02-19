(function(data) {
    
    var seedData = require("./seedData");

    data.getPayload = function (next) {
        
        next(null, seedData.payLoad);
    };

})(module.exports);