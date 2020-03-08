
function pokemonDamageCalculator(attack, defense, effectiveness){
  const damage = 50 * (attack / defense) * effectiveness;
  console.log(damage);
  return damage;
}


pokemonDamageCalculator(10, 20, 40);