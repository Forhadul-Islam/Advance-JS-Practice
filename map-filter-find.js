//MAP: used for doing something for the elements of an array and resulting the new elements in an array;
//FILTER: used for finding some elements according to a condition from an array and give the result in an array;
//FIND: it is the ES-6 version of filter. it is as similar as filter but the only one difference is it does not result the elements in an array and it gives only the first value;

const numbers = [5, 6, 8, 9, 10, 15, 16, 18, 14, 19];

// const square = [];
// for(let i = 0; i< numbers.length; i++){
//     const element = numbers[i];
//     const result = element * element;
//     square.push(result);
// }
// console.log(square);


// numbers.map(function(element){
//     console.log(element);
// })



// numbers.map(function(index){
//     console.log(index);
// })



// numbers.map(function(array){
//     console.log(array);
// })


// numbers.map(function(element, index, array){
//     console.log(element, index, array);
// })

//note: a map can take three inputs from an array. those are- element, index and array

                        /** 1 */
// function square(element){
//     return element * element;
// }
// const result = numbers.map(square);
// console.log(result);

                        /** 2 */
// const result = numbers.map(function(element){
//     return element * element;
// })
// console.log(result);

                        /** 3 */
// const result = numbers.map(element => element * element);
// console.log(result);

                        /** 4 */
// const result = numbers.map(x => x * x);
// console.log(result);


                        //Filter


// const small = numbers.filter(element => element < 15);
// console.log(small);


// const small = numbers.filter(x => x < 15);
// console.log(small);


                        //Find

const small = numbers.find(x=> x < 15);
console.log(small);

/**NOTE: this will give us first value that is less than 15. this will not give us the collection of the numbers those are less than 15. so we are not gonna get an array here using 'find' */