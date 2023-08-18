const fibonacci = function(number) {
    if (number <= 0){
        return "OOPS"
    }
    let prime;
    let a =  0;
    let b = 1;
    for (let index = 0; index <= number; index++) {
        prime = a;
        a = b;

        b = prime + a;
        
    }
    return prime;

};

// Do not edit below this line
module.exports = fibonacci;
