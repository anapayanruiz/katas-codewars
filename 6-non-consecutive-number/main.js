
const arr = [-3, -2, -1, 0, 1, 2, 3, 4];

function firstNonConsecutive(arr) {
  let result = null;
  for (let j = 0; j < arr.length; j++) {
    if ((arr[j + 1]) - arr[j] !== 1 && j !== arr.length - 1) {
      return result = arr[j + 1];
    }
  }
  return result;
}

console.log(firstNonConsecutive(arr));


function firstNonConsecutive2(arr) {
  let count = arr[0];
  return arr.find((ele, index) => ele !== count + index) || null;
}

console.log(firstNonConsecutive2(arr));