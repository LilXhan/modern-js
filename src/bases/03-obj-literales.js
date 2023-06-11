const person = {
  firstname: 'Tony',
  surname: 'Stark',
  age: 45,
  address: {
    city: 'New York',
    zip: 12313,
    lat: 14.52432,
    lng: 34.4413
  }
};

// console.table({ person });

// const person2 = person -> bad practica copy reference in memory not create new object
const person2 = structuredClone(person)
person2.firstname = 'Flavio'

console.log(person);
console.log(person2);