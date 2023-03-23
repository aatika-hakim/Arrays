//Print Even digits

const evenDigitCount = (arr) =>{  
    let count = 0;

    for(let num of arr){
      	// convert to string it is easy to find length
            num = num.toString();
		if (num.length % 2 === 0) {
			count++;
        }
    }
    return count;
}                                                                                                                                                    
let arr = [2,45,678,2000,4567];

console.log(evenDigitCount(arr));