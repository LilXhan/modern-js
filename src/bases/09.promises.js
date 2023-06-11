import { getHeroeById } from './bases/08-imports'

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const heroe = getHeroeById(1);
//     resolve(heroe);
//     // reject('No se pudo encontrar el heroe');
//   }, 2000)
// });

// promise.then((heroe) => {
//   console.log('heroe:', heroe);
// })
// .catch(err => console.warn(err));

const getHeroeByIdSync = ( id ) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroe = getHeroeById(id);
      if (heroe) {
        resolve(heroe);
      }
      reject('No se pudo encontrar el heroe');
    }, 2000)
  });
};

getHeroeByIdSync(1).then(console.log)
                   .catch(console.warn)