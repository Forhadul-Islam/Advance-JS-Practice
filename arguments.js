 function add(num1, num2){
     console.log(arguments)
     return num1 + num2;
 }
//const result = add(12, 10, 5, 7, 3);
//console.log(result)

            // for getting arguments in an array
 function add(num1, num2){
     console.log([...arguments])
     return num1 + num2;
 }
// const result = add(12, 10, 5, 7, 3);
// console.log(result)

                /**Problem solve */

  function add(num1, num2){
      console.log([...arguments])
      return num1 + num2 + arguments[2];
  }
//  const result = add(12, 10, 5, 7, 3);
//  console.log(result)


            //Problem
function add(){
   const num = [...arguments]
    let total = 0;
    for(let i = 0; i<num.length; i++){
        const element = num[i];
        const addTo = total + element;
    }
}

const result = add(10, 5, 7, 3)
console.log(result);
console.log(total);  // could not solve.