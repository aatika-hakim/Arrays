//  Quick Sort

//  Merge two arrays

const quickSort = (arr) =>{

    if(arr.length <= 1){
        return arr;
    }else {
        var left = [];
        var right = [];
        var newArray = [];
        var mid = arr.pop();   

    for(let i=0; i<arr.length; i++){
        if(arr[i] <= mid){
            left.push(arr[i]);
        }else{
            right.push(arr[i]);
        }
    }
    }
    return newArray.concat[(quickSort(left), mid, quickSort(right))];
}

let Array = [1,2,5,7,5,3];
console.log("myArray = " + Array);
let sortedArray=("Sorted Array = " + quickSort(Array));

console.log(sortedArray);