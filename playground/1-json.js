const fs = require('fs');

// const book = {
//     title: 'test book',
//     author: 'test author',
// };

// const bookJSON = JSON.stringify(book);

// fs.writeFileSync('1-json.json', bookJSON);

// const dataBuffer = fs.readFileSync('1-json.json');
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);

// console.log(data.title);

const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);

const myData = {
    ...data,
    name: 'Zoti',
    age: 99,
};

fs.writeFileSync('1-json.json', JSON.stringify(myData));
