function generateRandomMultiDimArray(dimensions, min, max) {
    if (dimensions.length === 0) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    const [currentDim, ...remainingDims] = dimensions;
    return Array.from({ length: currentDim }, () => generateRandomMultiDimArray(remainingDims, min, max));
  }

  // 1D array: 5 elements, values between 0 and 9
const array1D = generateRandomMultiDimArray([5], 0, 9);
console.log("1D Array:", array1D);

// 2D array: 3x4, values between 10 and 99
const array2D = generateRandomMultiDimArray([3, 4], 10, 99);
console.log("2D Array:", array2D);

// 3D array: 2x3x2, values between 100 and 999
const array3D = generateRandomMultiDimArray([2, 3, 2], 100, 999);
console.log("3D Array:", array3D);

// 4D array: 2x2x2x2, values between 1000 and 9999
const array4D = generateRandomMultiDimArray([2, 2, 2, 2], 1000, 9999);
console.log("4D Array:", array4D);