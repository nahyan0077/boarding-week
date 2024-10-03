let text = "my name is nahyan and im a full stack developer"


console.log((/^my/.test(text))); 
console.log(text.match(/\S/g));
console.log(text.match(/\W/g));
console.log(text.match(/Nahyan/i));

//match any character within the brackets.
console.log(text.match(/[abc]/g));

// match any character not in the brackets.
console.log(text.match(/[^abc]/g));



console.log(text.match(/[n.yan]/g));

let text1 = "nahyanmp4@gmail.com"

//email matching
console.log(text1.match(/^[a-z0-9]+@[a-zA-Z0-9._-]+\.[a-z]{2,6}/));
console.log(/^[a-z0-9]+@[a-zA-Z0-9._-]+\.[a-z]{2,6}/.test(text1));

let phone = "+91 7592009094"
console.log(/\++\d{2} \d{10}$/.test(phone));
