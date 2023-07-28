const removeFromArray = function(arr,arg) {
    
    const new_arr = arr.filter(ele => {
        if(ele != arg){
            return ele;
        }
    })
    return new_arr;

};

// Do not edit below this line
module.exports = removeFromArray;
