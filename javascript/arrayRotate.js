// Given an array, return a rotated version of the array

// arrayRotate returns a left-shifted array
// if reverse is passed in as true, a right-shifted array is returned
function arrayRotate(arr, reverse) {
  if (reverse) arr.unshift(arr.pop());
  else arr.push(arr.shift());
  return arr;
}

console.log(arrayRotate([1, 2, 3, 4, 5]))
// [ 2, 3, 4, 5, 1 ]
console.log(arrayRotate([1, 2, 3, 4, 5], true))
// [ 5, 1, 2, 3, 4 ]