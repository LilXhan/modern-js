// Functions in JS

const greeting = function(name) {
  return `Hello ${name}`;
};

const greeting2 = (name) => {
  return `Hello ${name}`;
};

const greeting3 = (name) => `Hello ${name}`;
const greeting4 = () => `Hello world`;

const getUser = () => ({
  uid: 1,
  name: 'Flavio'
});


console.log(greeting3('Goku'));
console.log(getUser());

// Tarea
// Transform arrow function
// Should return object implicity
// Test

const getUserActive = ( name ) => ({ uid: 1, username: name });

const userActive = getUserActive('Flavio');

console.log(userActive);