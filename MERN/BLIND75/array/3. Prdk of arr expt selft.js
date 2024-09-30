
function productExceptSelf(nums) {
    let result = []
    
    //here we are taking the product from the left side and storing in the results array
    let leftProduct = 1
    for(let i = 0; i < nums.length; i++){
        result[i] = leftProduct //here we assigning as the result is empty arr
        leftProduct *= nums[i]
    }

    //here we are taking the product from the right side and storing in the results array
    let rightProduct = 1
    for(let i = nums.length - 1; i >= 0; i--){
        result[i] *= rightProduct //here we taking product as result is not empty array
        rightProduct *= nums[i]
    }

    return result
}


const nums = [1, 2, 3, 4];
console.log(productExceptSelf(nums));  
