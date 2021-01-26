/*
IN: 
[1, 10, 20, 0, 59, 63, 0, 88, 0]

OUT: 
[0, 0, 0, 1, 10, 20, 59, 63, 88]
*/

let arr = [1, 10, 20, 0, 59, 63, 0, 88, 0]

let leng = arr.length
let number_of_zeros = 0

for (let i = leng-1; i >= 0; i--) {
  const num = arr[i];
  if (num == 0) {
    number_of_zeros++
  } else {
    arr[i+number_of_zeros] = num
  }
}

while(number_of_zeros > 0) {
  number_of_zeros--
  arr[number_of_zeros] = 0
}

console.log(arr)
