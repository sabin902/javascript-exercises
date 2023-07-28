const reverseString = function(word) {
    let reversed = ''
    for(let letter = word.length-1;letter >= 0;letter--){
        reversed += word[letter];
    }
    return reversed;

};

// Do not edit below this line
module.exports = reverseString;
