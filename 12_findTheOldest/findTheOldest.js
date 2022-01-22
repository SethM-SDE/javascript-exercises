const findTheOldest = function(people) {
  const date = new Date;
  const thisYear = date.getFullYear();
  let oldest = {
    name: people[0].name,
    age: !people[0].yearOfDeath ? thisYear - people[0].yearOfBirth : people[0].yearOfDeath - people[0].yearOfBirth,
  };
  people.forEach(person => {
    const personAge = !person.yearOfDeath ? thisYear - person.yearOfBirth : person.yearOfDeath - person.yearOfBirth;
    if (personAge > oldest.age) {
      oldest = {
        name: person.name,
        age: personAge,
      }
    }
  });
  return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
