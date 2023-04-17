const fs = require('fs');

fs.readFile('../src/events.json','utf-8', (err, jsonString) => {
    console.log(jsonString);
});

/*fs.readFile('../src/customer.json','utf-8', (err, jsonString) => {
    console.log(jsonString);
});

const customer = require('../src/customer.json');

console.log(customer.address); */