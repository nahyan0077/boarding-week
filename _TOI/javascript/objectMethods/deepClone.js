function deepClone(obj) {
    if (obj == null || typeof obj !== 'object') {
        return obj
    }
    if (obj instanceof Date) {
        return new Date(obj.getTime())
    }
    if (obj instanceof Array) {
        return obj.reduce((arr, item, i) => {
            arr[i] = deepClone(item)
            return arr
        },{})
    }
    if (obj instanceof Object) {
        return Object.keys((newObj, item) => {
            newObj[item] = deepClone(newObj[item])
            return newObj
        },{})
    }
  }
  
  // Usage example
  const original = {
    a: 1,
    b: { c: 2 },
    d: [3, 4, { e: 5 }]
  };
  const cloned = deepClone(original);
  console.log(cloned);
  console.log(cloned.b === original.b);