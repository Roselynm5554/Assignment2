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
  for (let i = 0; i < arr.length; i++) {
    //value += callBackFunc(arr[i], arr[i + 1] || 0);
    value = value + callBackFunc(arr[i]);
  }
  return value;
}

function reduceFunction(num1, num2) {
  return num1 + num2;
}
const arr4 = [1, 2, 3, 4, 5];
let val = myReduce(arr4, reduceFunction);
console.log("After reduce: ", val);

// includes()
function myIncludes(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return true;
    }
  }
  return false;
}
const words = ["1bob", "gary", "cassie"];
const isFound = myIncludes(words, "1bob");
console.log(isFound);

//indexOf()
function myIndexOf(array, element){
  for(let i = 0; i < array.length; i++ ) {
    if(array[i] === element)
      return i;
  } 
}
const nums = [1, 2 ,3, 4, 5];
const element = 5;
const index = myIndexOf(nums,element)

function myPush(array, element) {
  array[array.length] = element;
  

}
const pushNum = [1, 2 ,3, 4, 5];
const element1 = 6;
myPush(pushNum, element1);
console.log(pushNum);

function myLastIndexOf(arr, target) {
  let index = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == target) {
      index = i;
    }
  }
  return index;
}

const arr5 = [4, 77, 34, 12, 22, 1, 22, 17, 19, 1, 99, 4];
const index1 = myLastIndexOf(arr5, 1);
console.log(index1);


// Object.keys()
function grabKeys(obj) {
  const arr = [];
  for (const prop in obj) {
    arr.push(prop);
  }
  return arr;
}
const obj1 = {
  name: "Bob",
  age: 21,
  address: "123 Avenue",
};
console.log(grabKeys(obj1));

// Object.values()
function grabValues(obj) {
  const arr = [];
  for (const prop in obj) {
    arr.push(obj[prop]);
  }
  return arr;
}
const obj2 = {
  name: "Bob",
  age: 21,
  address: "123 Avenue",
};
console.log(grabValues(obj2));









