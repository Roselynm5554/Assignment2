// forEach
function myEach(arr, callback) {
  callback(arr);
}

function loop(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

let arr1 = [1, 2, 3, 4, 5];
myEach(arr1, loop);

arr1.forEach(function (number) {
  console.log("ForEach: ", number, "\n");
});
// map()

// filter()
function callBackFunction(number) {
  return number % 2 == 0;
}
function myFilter(arr, callBackFunc) {
  const array = [];
  for (let i = 0; i < arr.length; i++) {
    if (callBackFunc(arr[i])) {
      array.push(arr[i]);
    }
  }
  return array;
}

let newArr = myFilter(arr1, callBackFunction);
console.log("New array after filter: ", newArr);

// some()
function mySome(arr, callBackFunc) {
  for (let i = 0; i < arr.length; i++) {
    if (callBackFunc(arr[i])) {
      return true;
    }
  }
  return false;
}

const arr2 = [1, 1, 1, 1, 1, 1];
const containsEvenNums = mySome(arr2, callBackFunction);
console.log(containsEvenNums);

// every()
function myEvery(arr, callBackFunc) {
  for (let i = 0; i < arr.length; i++) {
    if (!callBackFunc(arr[i])) {
      return false;
    }
  }
  return true;
}

const arr3 = [2, 2, 2, 2, 2];
const isEveryEven = myEvery(arr3, callBackFunction);
console.log(isEveryEven);

// reduce()
function myReduce(arr, callBackFunc) {
  let value = 0;
  for (let i = 0; i < Math.ceil(arr.length / 2); i += 2) {
    console.log("current value: " + arr[i] + " " + arr[i + 1]);
    value += callBackFunc(arr[i], arr[i + 1] || 0);
  }
  return value;
}

function reduceFunction(num1, num2) {
  return num1 + num2;
}
const arr4 = [1, 2, 3, 4, 5];
let val = myReduce(arr4, reduceFunction);
console.log("After reduce: ", val);
