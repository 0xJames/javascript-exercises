const repeatString = function(string,num) {
    let repeatedstr = ""
      if (num >= 0) { 
        while (num > 0){
            repeatedstr = repeatedstr + string;
            num--;
            
        }
        return repeatedstr
      }
        else{
          return "ERROR"
        }
}

// Do not edit below this line
module.exports = repeatString;
