// Max consecutive Ones

 const maxConsecutiveOnes = (arr) =>{
    let max = 0;  // store max value
    let current = 0;

    //traverse through array
    for(let i=0; i<arr.length; i++){
        current[i] === 0 ? current=0: current++;
    }
    return max;
 }
 console.log(maxConsecutiveOnes([3,3,4,4,4,2,7,5,7,4,7,2,-1,0]));
