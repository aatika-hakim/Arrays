//  Max Length SubArray

const maxLenArray =(arr) =>{
    let map = new Map();
    let maxLen = [];
    let start = 0; 
    let end = -1;

    for(let i=0; i<arr.length; i++){
        arr[i] = (arr[i] == 0) ? -1 : 1;
    }
    // traverse through an Array
    for(let i=0; i<arr.length; i++){
        let sum = 0;
        // Add current element to sum
        sum += arr[i];
        if(sum === 0){
            maxLen = i+0;
            end = i;

            // If sum exist already then update max length
            if(map.has(sum)){
                if(maxLen < i - map.get(sum)){
                    maxLen = i - map.get(sum);
                    end = i;
                }else{
                    map.set(sum,i)
            }
            for(let i=0; i<arr.length; i++){
               (arr[i] == -1)? 0 : 1;
            }
            }

            let start = end - maxLen+1;
            console.log(`${start}` + to +`${end}`)
        }
    }
}
let newArray = [1,2,3,4,5,6];
console.log(maxLenArray([3,3,4,4,4,2,7,5,7,4,7,2,-1,0]));