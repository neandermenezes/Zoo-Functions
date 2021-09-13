const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function noParameters() {
  const save = {};
  species.forEach((type) => {
    save[type.name] = type.residents.length;
  });
  return save;
}

function countAnimals(animal) {
  // Se animal for undefined, chama a função NoParameters();
  if (animal === undefined) return noParameters();
  // animals irá guardar todos objetos cujo nome é igual a animal.name
  const animals = species.find((type) => type.name === animal.specie);
  // Caso animal.gender seja passado, iremos usar este if para retornar somente o genero requisitado
  if (animal.gender !== undefined) {
    const aux = animal.residents.filter((type) => type.sex === animal.gender);
    return aux.length;
  }
  // Caso gender não seja passado o if será ignorado e retornará todos animais residentes.
  return animals.residents.length;
}

module.exports = countAnimals;
