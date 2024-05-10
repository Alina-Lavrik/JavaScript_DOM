// при запуске кода файл полностью перезапишется и будет выведено 
// console.log("ONE TEAM!!!")

const fs = require('fs');

// fs.writeFile(__filename, 'console.log("ONE TEAM!!!")', (err) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log('The file was saved!');
//     }
// });

// Перезапишем text.txt

fs.writeFile('./test.txt', 'console.log("ONE TEAM!!!")', (err) => {
    if(err) {
        console.log(err);
    } else {
        console.log('The file was saved!');
    }
});