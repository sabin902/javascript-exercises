const getTheTitles = function(array) {
    let array2 = [];
    array.forEach(element => {
        array2.push(element.title);
    });
    return array2;

};

// Do not edit below this line
module.exports = getTheTitles;
