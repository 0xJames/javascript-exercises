
const reverseString = function(word) {
    let chararray = []
    var stringleng = word.length
    for (let i = 0; i < stringleng; i++){
        let char =""
        char = word.slice(i,i+1)
        chararray.push(char)
    }
    
    var reverseword =""
    for (i=1;i <= chararray.length; i++){
        reverseword = reverseword + chararray[chararray.length-i]
    }
    return reverseword;
}

// Do not edit below this line
module.exports = reverseString;
