
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