//double-equal: double equal checks only the values. do not check the type of value used.for example, 2 and "2" are equal though here first one is a number and second one id a string.
 // & double-equal tries to make the values similar. like it compares 1 to true equal and 0 to false equal.

        // 0==false => true
        // 1==true => true
        // 2=="2"  => true
        
    const num1 = 4;
    const num2 = "4";
    if(num1 == num2){
        console.log("condition is true");
    }
    else{
        console.log("condition is false");
    }

//triple-equal: triple equal checks both the value and type. it has the sense of difference of number and string.
        // 0===false => false
        // 1===true => false
        // 2==="2" =>false

        const num1 = 4;
        const num2 = "4";
        if(num1 === num2){
            console.log("condition is true");
        }
        else{
            console.log("condition is false");
        }

//NOTE: as a junior developer we should use only ===