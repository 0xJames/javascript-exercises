const palindromes = function (word) {
    const palinArray = Array.from(word.toLowerCase().replace(/[^a-zA-Z]/g, ""))   
    console.log(palinArray);
    console.log(palinArray.reverse());
    reverseArray = [...palinArray].reverse();
    return palinArray.toString() === reverseArray.toString();
    

};

// Do not edit below this line
module.exports = palindromes;
