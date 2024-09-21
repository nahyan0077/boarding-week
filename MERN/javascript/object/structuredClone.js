let obj = {
    name: 'Nahyan',
    skills: ['JavaScript', 'Node.js'],
    address: { city: 'Calicut' },
    dateOfBirth: new Date('1990-01-01'),
    map: new Map([['key', 'value']]),
  };
  
  let clonedObj = structuredClone(obj);
  
  console.log(clonedObj); // Deep copy of the original object
  
  // Modify the original object to see that the clone is unaffected
  obj.address.city = 'Malappuram';
  console.log(clonedObj.address.city); // 'Calicut' (remains unchanged)
  