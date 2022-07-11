
function twoSum(nums, target) {
    var finalArray = [];
    for (let i = 0; i < nums.length-1; i++) {
        const currentIndex = i;
        for (let t = 0; t < nums.length; t++) {
            const nextIndex = t;
            if(i !=t){

                if(nums[i] + nums[t] == target){
                    console.log(nums[i] , nums[t]);
                    finalArray.push(i);
                    finalArray.push(t);        
                    return finalArray;
                }
            }

        }
        
    }
    return [];
}

const output = twoSum([3,2,4], 6);

console.log(output);