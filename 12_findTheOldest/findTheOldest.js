
const findTheOldest = function(people) {

    
    function getTheAges(person) {
        if (person.yearOfDeath === undefined) {
            let currentDate = new Date();
            let currentYear = currentDate.getFullYear();

            return age = currentYear - person.yearOfBirth;
        } else {

        return age = person.yearOfDeath - person.yearOfBirth;
    }
    };

    let ages = people.map(getTheAges);
    let oldestAge = Math.max.apply(Math, ages);
    let indexOldestAge = ages.indexOf(oldestAge);
    
    return people[indexOldestAge];
};


// Do not edit below this line
module.exports = findTheOldest;
