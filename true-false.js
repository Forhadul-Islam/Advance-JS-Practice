/**Falsy: for this values of a variable the condition is true */
Falsy:
    //false
    //0
    //""
    //undefined
    //NaN
    //null

/**Truthy: for this values of a variable the condition is true */
Truthy:
    //"0"
    //" "
    //{}
    //[]
    //note: "something" is always true

/**Some examples */

//const age = 15;
// if(age>5){
//     console.log("condition is true")
// }
// else{
//     console.log("condition is false")
// }


// const age = 15;
// if(age){
//     console.log("condition is true")
// }
// else{
//     console.log("condition is false")
// }


const age = 0;
if(age>5){
    console.log("condition is true")
}
else{
    console.log("condition is false")
}