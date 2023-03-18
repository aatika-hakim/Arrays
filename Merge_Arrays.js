//  Merge two arrays

const mergeArrays = (arr1,arr2) =>{

    for(let i=0; i<arr2.length; i++){
        arr1.push(arr2[i]);
    }

    for(let i=0; i<arr1.length; i++){
        for(let j=i; j<arr1.length; j++){
            if(arr1[i] > arr2[j]){
                // swaping elements
                let temp = arr1[i];
                arr1[i] = arr1[j];
                arr1[j] = temp;
            }
            return arr1;
        }
    }
}
console.log(mergeArrays([1,2,5,7,5,3],[5,4,8,0,7,-1]))