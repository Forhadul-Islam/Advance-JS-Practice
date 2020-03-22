const nums = [1, 2, -3, 4, -5, 6, -9, -10, 8, 11];
for (let i = 0; i<nums.length; i++){
    const element = nums[i];
    if(element>8){
        break;
    } 
    console.log(element);

}


for (let i = 0; i<nums.length; i++){
    if(nums[i]<0){
        continue;
    } 
    console.log(nums[i]);

}



//something out of the topic 'break' and 'continue'

function doSomething(x, y = 4){

    console.log(y);
    
    }
    
     
    
    doSomething(3,2);