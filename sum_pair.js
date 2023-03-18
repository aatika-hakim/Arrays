//  find sum pairs in an array

const squaredArray = (arr) =>{
    let res = [];
    for(let i=0; i<arr.length; i++){
        for(let j=i; j<arr.length; j++){
            res.push(arr[i], arr[j]);
        }
    }   
    return res;
}
console.log(sumPair([2,4,3,4,8,76,24,1,5]));