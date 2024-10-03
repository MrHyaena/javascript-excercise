
const findTheOldest = function(people) {

    
    function getTheAges(person) {
        return age = person.yearOfDeath - person.yearOfBirth;
    }

    let ages = people.map(getTheAges);
    let oldestAge = Math.max.apply(Math, ages);
    let indexOldestAge = ages.indexOf(oldestAge);
    
    return people[indexOldestAge];
};


// Do not edit below this line
module.exports = findTheOldest;
