let text = "my namer is nahyan and im a full stack developer"


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

//phone number matching
let phone = "+91 7592009094"
console.log(/\++\d{2} \d{10}$/.test(phone));


//find number of spaces
console.log(text.match(/\s/g));
console.log(text.match(/\S/g));


//matches anything that is not a whitespace
console.log(text.match(/\w/g));
console.log(text.match(/\W/g));

//match all the words with 4 charcters
console.log(text.match(/\S{4,}/));
//match all the words with 4 to 5 charcters
console.log(text.match(/\S{4,}/));

//match all the words ends with "er"
console.log(text.match(/[a-z]+er/g));
 