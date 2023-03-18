//Print Even digits

const evenDigitCount = (arr) =>{  

    for(let i=0; i<arr.length; i++){
        if(arr[i]%2 == 0)
        console.log(arr[i]);
    }  
}
console.log(evenDigitCount([2,4,3,433333,8789,76,24,1,5]));