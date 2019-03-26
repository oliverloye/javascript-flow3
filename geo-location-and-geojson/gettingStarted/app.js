const express = require('express');
const http = require("http");
const app = express();
const gju = require("geojson-utils");

var gameArea = require("./gameData").gameArea.geometry;
var players = require("./gameData").players;

function setDataStores(ga, p1) {
    gameArea = ga;
    players = p1;
}

function geoServer(port, area, player) {
    return new Promise((resolve, reject) => {
        if (area && player) {
            setDataStores(area, player);
        }
        let server = http.createServer(app);
        server.listen(port, () => {
            resolve(server)
        })
    })
}


//Endpoints
app.get('/', (req, res) => res.send('Geo Demo API!'));

app.get('/geoapi/isuserinarea/:lon/:lat', (req, res) => {
    /*
    const lon = req.params.lon;
    const lat = req.params.lat;
    */
    const {lon, lat} = req.params;
    const point = {"type": "Point", "coordinates": [lon, lat]};
    let isInside = gju.pointInPolygon(point, gameArea);
    let result = {status: isInside};
    result.msg = isInside ? "Point was inside the tested polygon":
                            "Point was NOT inside tested polygon";

    return res.json(result);

});


module.exports = geoServer;




