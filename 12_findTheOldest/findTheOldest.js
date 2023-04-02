const findTheOldest = function(data) {
    return data.reduce((oldest, current) => {
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentAge = getAge(
            current.yearOfBirth, 
            current.yearOfDeath
            );

        return oldestAge < currentAge ? current : oldest
    })
};

const getAge = function(birthYear, deathYear) {
    if (!deathYear) {
        deathYear = new Date().getFullYear()
    }

    return deathYear - birthYear;
}

//testing the code
const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

console.log(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;
