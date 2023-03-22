const findTheOldest = function (array) {
    const res= array.reduce((oldest, current) => {
        const oldAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath)
        const currentAge = getAge(current.yearOfBirth, current.yearOfDeath)
        return oldAge < currentAge ? current : oldest;
    })
    return res;
};

function getAge(birthDate, deathDate) {
    if (!deathDate) {
        deathDate = new Date().getFullYear()
    }
    return deathDate - birthDate
}

// Do not edit below this line
module.exports = findTheOldest;