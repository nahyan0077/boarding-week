var searchInSortedTotated = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        if (nums[mid] === target) {
            return mid;
        }
        
        // Check if the left side is sorted
        if (nums[left] <= nums[mid]) {
            if (target >= nums[left] && target < nums[mid]) {
                // Target is in the left half
                right = mid - 1;
            } else {
                // Target is in the right half
                left = mid + 1;
            }
        } 
        // Right side is sorted
        else {
            if (target > nums[mid] && target <= nums[right]) {
                // Target is in the right half
                left = mid + 1;
            } else {
                // Target is in the left half
                right = mid - 1;
            }
        }
    }
    
    return -1;  // Target not found
};

let arr = [3, 4, 5, 6, 7, 8, 1, 2]

console.log(searchInSortedTotated(arr, 8));
