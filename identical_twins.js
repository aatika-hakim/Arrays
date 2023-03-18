// Identical Twins

const checkTwins = (arr) => {
    let res = [];
    for(let i=0; i<arr.length; i++){
        for(let j=i; j<arr.length; j++){
            if(arr[i] + arr[j] > 0){
                arr.sort();
                res.push([arr[i],arr[j]]);
            }
        }
    }
    return res;
}
console.log(checkIdenticalTwin([3,-4,5,-6,4,0,2,-1,0]));