
const integers = [70912682, 86232516, 134873264, -22475370, -148631598, -196936886, -42720962, -177521382, -11618836, -132287300, 121780164, 13853652, 3809842, 185841560, -138308701, -49533608, -177515464, -21013534, 4450136, 151276788, -385564, -59538732, -127770582, -34572046, 132597120, -127740514, 44306340];




function findOutlier(integers) {
  for (let i = 0; i < integers.length; i++) {
    if (integers[i] % 2 === 2) {
      return integers.find(ele => ele % 2 === 1);
    } else {
      return integers.find(ele => ele % 2 === 0);
    }
  }
}

// console.log(findOutlier(integers));


function findOutlier2(integers) {
  let par = 0;
  let impar = 0;
  let result = null;
  integers.forEach((integer, index) => {
    if (integer % 2 === 0) {
      // console.log(`1 Entro por aquí integer: ${integer} index: ${index}`);
      par++;
    } else {
      // console.log(`2 Entro por aquí integer: ${integer} index: ${index}`);
      impar++
    }

    if (index === 2) {
      if (par > impar) {
        console.log(`3 Entro por aquí integer: ${integer} index: ${index} par: ${par} impar: ${impar}`);
        result = integers.find(ele => ele % 2 !== 0);
      } else {
        console.log(`4 Entro por aquí integer: ${integer} index: ${index} par: ${par} impar: ${impar}`);
        result = integers.find(ele => ele % 2 === 0);
      }
    }
  });
  return result;
}

console.log(findOutlier2(integers));