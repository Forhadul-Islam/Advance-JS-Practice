//important!
//TOPIC: slice, splice, join

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];


const part = nums.slice(1, 5); // slice just make an array by taking elements from nums named array. from index 2 to (5-1) or 4.
// console.log(part);
// console.log(nums);


const remove = nums.splice(2, 4);
console.log(remove);
console.log(nums);


const together = nums.join("")
const together1 = nums.join(",");
const together2 = nums.join("-");
console.log(together);

