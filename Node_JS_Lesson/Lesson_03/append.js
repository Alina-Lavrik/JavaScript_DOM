const fs = require('fs');

fs.appendFile(__filename, 'console.log("ONE TEAM!!!");', (err) => {
    if(err) {
        console.log(err);
    } else {
        console.log('The file was saved!');
    }
});
console.log("ONE TEAM!!!");
console.log("ONE TEAM!!!");
console.log("ONE TEAM!!!");