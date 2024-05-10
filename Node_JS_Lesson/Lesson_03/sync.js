const fs = require('fs');

try {const result = fs.readFileSync(__filename, 'utf-8');  
        console.log(result);
    }
catch (error) {
        console.log(error);
}

try { fs.appendFileSync(__filename, 'console.log("ONE TEAM!!!")');  
        console.log('The file was saved!');
    }
catch (error) {
        console.log(error);
}
console.log("ONE TEAM!!!")