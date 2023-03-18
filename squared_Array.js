//  Squared Sorted Array

const squaredArray = (arr) =>{
   
    let left = 0;  // left pointer
    let res = []; // store results
    let right = arr.length - 1;
    let current = arr.length - 1;
    while(left <= right){
        if(arr[left]^2 > arr[right]^2){
            res[current] = arr[left]^2;
            current--;
            left++;
        }else{
            res[current] = arr[right]^2;
            current--;
            right++;
        }
    }
    return res;
}
console.log(squaredArray([2,4,3,4,8,76,24,1,5]));