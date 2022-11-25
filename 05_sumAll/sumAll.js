const sumAll = function(x, y) {
    if (x < 0 || y < 0){
        return "ERROR"
    }
        else if (Number.isInteger(x) == false || Number.isInteger(y)== false){
            return "ERROR"
        }
        else{sum = (x+y) * (Math.abs(y-x)+1) * 0.5;
        }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
