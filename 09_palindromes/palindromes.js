const palindromes = function (word) {
    let altered_wrd = word.replace(/[^\w\s]/g, '').replace(/\s/g, '').toLowerCase();
    let new_wrd = ""
    for(let i = altered_wrd.length-1;i >= 0;i--){
        new_wrd += altered_wrd[i];
    }
    if (new_wrd == altered_wrd){
        return true;
    }else{
        return false;
    }

};

// Do not edit below this line
module.exports = palindromes;
