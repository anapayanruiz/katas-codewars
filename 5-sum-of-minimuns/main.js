
const arr = [
  [1, 2, 3, 4, 5], // minimum value of row is 1
  [5, 6, 7, 8, 9], // minimum value of row is 5
  [20, 21, 34, 56, 100] // minimum value of row is 20
]

function sumOfMinimums(arr) {
  let resultFinal = 0;
  arr.forEach(array => {
    let result = array[0];
    array.forEach(element => {
      if (element < result) {
        result = element;
      }
    });
    resultFinal += result;
  });
  return resultFinal;
}
console.log(sumOfMinimums(arr));

function sumOfMinimums2(arr) {
  let resultFinal = 0;
  arr.forEach(array => {
    const result = array.sort((a, b) => a - b)[0];
    resultFinal += result;
  });
  return resultFinal;
}
console.log(sumOfMinimums2(arr));

function sumOfMinimums3(arr) {
  const reducer = (acc, eleArr) => acc + eleArr.sort((a, b) => a - b)[0];
  return arr.reduce(reducer, 0);
}
console.log(sumOfMinimums3(arr));