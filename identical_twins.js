// Identical Twins

const checkTwins = (arr) => {
    let SortedArray = arr.slice().sort(); 
    let res = []; // store all results

    // traverse through all indexes
    for(let i=0; i<SortedArray.length; i++){
            if(SortedArray[i+1] === SortedArray[i]){
                res.push(SortedArray[i]);
            }
        }
    return res;
}
console.log(checkTwins([3,3,4,4,4,2,7,5,7,4,7,2,-1,0]));