function randomInteger(min, max) {
    var random = Math.floor(Math.random() * (max - min + 1)) + min;
    return random;
}

var generateWeighedList = function(list, weight) {
    var weighedArray = [];

    // Loop over weights
    for (var i = 0; i < weight.length; i++) {
        var multiples = weight[i] * 100;

        // Loop over the list of items
        for (var j = 0; j < multiples; j++) {
            weighedArray.push(list[i]);
        }
    }


    return weighedArray;
};