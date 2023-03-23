// sort array by insertion sort

const insertionSort = (arr) =>{

    for(let i=0; i<arr.length; i++){
        let current = arr[i];

        let j=i-1;
        while(j>=0 && arr[j]>current){
            arr[j+1] = arr[j];
            j = j-1;
        }
        arr[j+1] = current;
    }
    return arr;
}
let arr = [2,0,-3,4,9,1]
console.log(insertionSort(arr));