const firstname = 'Flavio';
const surname = 'Alvarado';

// const fullname = firstname + ' ' + surname;
const fullname = `
${firstname}
${surname}
${1 + 1}
`

console.log(fullname);

function getGreeting(firstname) {
  return 'hello ' + firstname;
};

console.log(`This a text: ${ getGreeting(firstname) }`)