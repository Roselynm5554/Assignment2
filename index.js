// Some global values
function isEven(num) {
  return num % 2 === 0;
}
const obj1 = {
  name: "Bob",
  age: 21,
  address: "123 Avenue",
};
const arr1 = [1, 2, 3, 4, 5];

// forEach
function myEach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

myEach(arr1, (num) => {
  console.log(num);
});

// map()
function myMap(arr, callback) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(callback(arr[i]));
  }
  return newArr;
}

console.log(myMap(arr1, (num) => num * 2));

// filter()
function myFilter(arr, callback) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log("Filtered Array: ", myFilter(arr1, isEven));

// some()
function mySome(arr, callBackFunc) {
  for (let i = 0; i < arr.length; i++) {
    if (callBackFunc(arr[i])) {
      return true;
    }
  }
  return false;
}

const arr3 = [1, 1, 1, 1, 1, 1];
console.log(mySome(arr3, isEven));

// every()
function myEvery(arr, callBackFunc) {
  for (let i = 0; i < arr.length; i++) {
    if (!callBackFunc(arr[i])) {
      return false;
    }
  }
  return true;
}

const arr4 = [2, 2, 2, 2, 2];
console.log(myEvery(arr4, isEven));

// reduce()
function myReduce(arr, callBackFunc) {
  let sum = 0;
  for (let i = 0; i < arr.length; i += 2) {
    sum += callBackFunc(arr[i], arr[i + 1] || 0);
  }
  return sum;
}

function reduceFunction(num1, num2) {
  return num1 + num2;
}
console.log("Reduced Array: ", myReduce(arr1, reduceFunction));

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

// indexOf()
function myIndexOf(array, element) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) return i;
  }
}
const nums = [1, 2, 3, 4, 5];
const element = 5;
const index = myIndexOf(nums, element);

// myPush()
function myPush(array, element) {
  array[array.length] = element;
}
const pushNum = [1, 2, 3, 4, 5];
const element1 = 6;
myPush(pushNum, element1);
console.log(pushNum);

// myLastIndexOf()
function myLastIndexOf(arr, target) {
  let index = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == target) {
      index = i;
    }
  }
  return index;
}

const arr6 = [4, 77, 34, 12, 22, 1, 22, 17, 19, 1, 99, 4];
const index1 = myLastIndexOf(arr6, 1);
console.log(index1);

// Object.keys()
function grabKeys(obj) {
  const arr = [];
  for (const prop in obj) {
    arr.push(prop);
  }
  return arr;
}
console.log(grabKeys(obj1));

// Object.values()
function grabValues(obj) {
  const arr = [];
  for (const prop in obj) {
    arr.push(obj[prop]);
  }
  return arr;
}
console.log(grabValues(obj1));
