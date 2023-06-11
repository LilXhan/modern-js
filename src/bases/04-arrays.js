// Arreglos

// const array = new Array(100); -> 100 posicion empty
const array = [1, 2, 3, 4];

// array.push(1);
// array.push(2);
// array.push(3);
// array.push(4);

let array2 = [ ...array, 5 ]

const array4 = array2.map( function(number) {
  return number * 2;
});
console.log(array);
console.log(array2);
console.log(array4);