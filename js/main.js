'use strict';

// ejercicio 1

function reverseSequence(entry) {
  
  let result = [];
  for (let i = 0; i < entry; i++){
    result.push(entry - i);
  }

  return console.log(result);
};

reverseSequence(5);


// ejercicio 2

function countDivisorNumber(entry) {
  
  let result = [];
  for (let i = 0; i < entry; i++){
    if (entry % i === 0) {    
      result.push(entry - i);
    }
  }
return console.log(result.length);
};

countDivisorNumber(4);

// ejercicio 3

function pokemonDamageCalculator(attack, defense, effectiveness){
  const damage = 50 * (attack / defense) * effectiveness;
  console.log(damage);
  return damage;
}


pokemonDamageCalculator(10, 20, 40);