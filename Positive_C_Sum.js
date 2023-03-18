// Positive Comulative Sum

const positiveComulativeSum = (arr) =>{
    let res = [];
    for(let i=0; i<arr.length; i++){
        for(let j=i; j<arr.length; j++){
            if(arr[i] + arr[j] > 0){
                res.push([arr[i],arr[j]]);
            }
        }
    }
    return res;
}
console.log(positiveComulativeSum([1,3,-4,-5,4,2]));

