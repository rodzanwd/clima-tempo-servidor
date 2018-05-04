var fs = require("fs");

//controller da rota index
module.exports.locales = (req, res) => {
    fs.readFile('base/locales.json', 'utf8', function (err, data) {
        if (err) throw err; 
        var obj = JSON.parse(data);
    });
}

module.exports.weather = (req, res) => {
    fs.readFile('base/weather.json', 'utf8', function (err, data) {
        if (err) throw err; 
        var obj = JSON.parse(data);
    });
}