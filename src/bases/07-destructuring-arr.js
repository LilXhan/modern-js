const characters = ['Goku', 'Vegetta', 'Trunks'];

const [ , p2 ] = characters; // -> Vegetta
const [ , , p3 ] = characters; // -> Trunks

console.log(p2);
console.log(p3);


const returnArray = () => {
  return ['ABC', 123];
};

const [ letters, numbers ] = returnArray();

console.log({
  letters,
  numbers
});

const state = ( value ) => {
  return [ value, () => (console.log('hello world')) ];
};

const [ name, setName ] = state('Goku');

console.log(name);
setName();