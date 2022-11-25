const leapYears = function(year) {
    if(year % 400 == 0){
        return true //remaining numbers: not divisible by 400
    }
        else if(year % 100 ==0){
            return false   //remaining numbers: not divisible by 100
        }
        else if(year % 4 ==0){
            return true  //remaining numbers: not divisible by 4
        }
        else {
            return false;
        }
   

};

// Do not edit below this line
module.exports = leapYears;
