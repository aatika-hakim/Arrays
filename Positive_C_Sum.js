// Positive Comulative Sum

const positiveSum = (arr) =>{
    let res = []; // store all the results
    let sum = 0;

    for(let i=0; i<arr.length; i++){
        for(let j=i; j<arr.length; j++){
            if(arr[i] + arr[j] === sum){
                res.push(arr[i],arr[j]);
            }
        }
    }
    return res;
}
console.log(positiveSum([1,3,-4,-5,4,2]));