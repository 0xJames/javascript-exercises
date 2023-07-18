const findTheOldest = function (peopleArray) {
    const date = new Date()
    const ageArray = peopleArray.map(x => x.yearOfDeath ? x.yearOfDeath - x.yearOfBirth : date.getFullYear()-x.yearOfBirth);
    const oldest = Math.max(...ageArray);
    const oldIndex = ageArray.indexOf(oldest);
    return peopleArray[oldIndex]
};

// Do not edit below this line
module.exports = findTheOldest;


