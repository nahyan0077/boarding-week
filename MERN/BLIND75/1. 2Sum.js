let arr = [2, 7, 11, 15]

//  =====  Problem with if (obj[target - nums[i]])  ====
// When the complement is found at index 0, your condition fails because 0 is treated as false in JavaScript. This leads to the issue where the code doesn’t return a valid index when it should.
    
//  =====   Why hasOwnProperty is used: =====
// The method hasOwnProperty() is used to explicitly check if an object contains a particular key, without caring about the value being 0, null, undefined, or any other falsy value. It ensures that you are specifically checking for the existence of the key, rather than relying on its truthiness.

function TwoSum(arr, target) {
    let obj = {}

    for (let i = 0; i < arr.length; i++) {
        let diff = target - arr[i]
        if (obj.hasOwnProperty(diff)) {
            return [obj[diff], i]
        }
        obj[arr[i]] = i
    }
}

console.log(TwoSum(arr, 9));
