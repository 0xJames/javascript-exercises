const fibonacci = function(index) {
    const fibArray = [1,1];
    let i = 2;
    if (index <= 0){
        return "OOPS"
    } else{
        while (i<= index){ 
            fibArray.push(fibArray[i-2]+fibArray[i-1]);
            i++;
        }
        return fibArray[index-1];

    }
    

};

// Do not edit below this line
module.exports = fibonacci;
