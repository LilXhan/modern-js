const person = {
  name: 'Tony',
  edad: 45,
  alias: 'Ironman',
  range: 'SuperHero'
}

const { name, edad, alias } = person;


const context = ( { name, edad, range = 'Hero', alias } ) => {
  return {
    anios: edad,
    nameAlias: alias,
    latlng: {
      lat: 14.55,
      lng: 15.43
    }
  }
}

const { anios, nameAlias, latlng: { lat, lng } } = context(person);

console.log(anios, nameAlias);
console.log(lat, lng);