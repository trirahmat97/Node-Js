const fs = require('fs');

// const book = {
//     title: 'Full Angular 7',
//     author: 'Tri Rahmat Aribowo'
// }

//conver object to json
// const bookJSON = JSON.stringify(book);

//conver json to object
// const dataJSON = JSON.parse(bookJSON);

//create file 1-json.json
// fs.writeFileSync('1-json.json', bookJSON);


//read file
// const dataBuffer = fs.readFileSync('1-json.json');
// const dataJSON2 = dataBuffer.toString()
// const data = JSON.parse(dataJSON2)

// console.log(data.title);




//change a node
const data = fs.readFileSync('2-json.json');
const json = data.toString();
const object = JSON.parse(json);

//change node json
object.name = 'riska rahmatul jannah',
object.age = 22

//write a json
const user = JSON.stringify(object);
fs.writeFileSync('2-json.json', user);

