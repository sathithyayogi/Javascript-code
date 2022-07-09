function binarySearch(arr, target){
    const arrLength = arr.length;
     const startIndex = Math.floor(arrLength/2);
     const middleValue = arr[startIndex];
     if(target>=middleValue){
         for (let i = startIndex; i < arrLength; i++) {
            const element = arr[i];
            if(element == target){
                console.log("up");
                return i;
                
            }
    
         }
     }else{
        for (let i = startIndex; i >= 0; i--) {
            const element = arr[i];
            if(element == target){
                console.log("down");
    
                return i;
                
            }
         }
     }
    
     return -1;
        
    }
    
    
console.log(binarySearch([1,2,3,4,5,6,7],4))