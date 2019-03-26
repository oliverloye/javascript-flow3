const gameArea = {
    "type": "Feature",
    "properties": {},
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [12.564239501953123, 55.77039358162004],
            [12.480468749999998, 55.699259616176356],
            [12.34039306640625, 55.68997171381322],
            [12.249755859375, 55.72401656896143],
            [12.205810546875, 55.78892895389262],
            [12.240142822265625, 55.840626886363616],
            [12.295074462890625, 55.88070333425207],
            [12.421417236328125, 55.88763544617004],
            [12.50244140625, 55.87531083569679],
            [12.553253173828125, 55.8360000202069],
            [12.571105957031248, 55.79973718325882]
        ]
    }
};

const players = [
    {
        "type": "Feature",
        "properties": {name: "Kurt"},
        "geometry": {
            "type": "Point",
            "coordinates": [12.43377685546875, 55.85296250455591]
        }
    },
    {
        "type": "Feature",
        "properties": {name: "Gurt"},
        "geometry": {
            "type": "Point",
            "coordinates": [12.462615966796875, 55.7425739894847]
        }
    },
    {
        "type": "Feature",
        "properties": {name: "Bobby"},
        "geometry": {
            "type": "Point",
            "coordinates": [12.32666015625, 55.78275147606406]
        }
    },
    {
        "type": "Feature",
        "properties": {name: "Peter"},
        "geometry": {
            "type": "Point",
            "coordinates": [12.33489990234375, 55.66132012128982]
        }
    },
    {
        "type": "Feature",
        "properties": {name: "Adam"},
        "geometry": {
            "type": "Point",
            "coordinates": [12.138519287109375, 55.83368638065531]
        }
    },
    {
        "type": "Feature",
        "properties": {name: "Oliver"},
        "geometry": {
            "type": "Point",
            "coordinates": [12.377471923828125, 55.9253552296527]
        }
    }
];

module.exports = {
    gameArea,
    players
};
