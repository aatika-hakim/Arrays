//  find sum pairs in an array

const sumPair = (arr, sum) =>{
    let res = []; //store all the results

    // Traverse through an array
    for(let i=0; i<arr.length; i++){
        for(let j=i; j<arr.length; j++){
            if(arr[i]+ arr[j] === sum)
            res.push([arr[i], arr[j]]);
        }
    }   
    return res;
}
let arr = [2,45,6,0,-12,4,6];
let sum = 8;

console.log(sumPair(arr, sum));