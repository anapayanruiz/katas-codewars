
function reverseSequence(entry) {
  
  let result = [];
  for (let i = 0; i < entry; i++){
    result.push(entry - i);
  }

  return console.log(result);
};

reverseSequence(5);