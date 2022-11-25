
const removeFromArray = function(array,...unwanted) {
    for (items of unwanted){
        ///console.log(unwanted)
        index = array.indexOf(items)
        if (index == -1){
            continue;
        }
            else{
        ///console.log(index)
                array.splice(index,1)
            }
        
    }
    return array
    
};

// Do not edit below this line
module.exports = removeFromArray;
