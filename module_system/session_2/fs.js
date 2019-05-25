//import module file system
const fs = require("fs"); 

//cretae file in nodejs
fs.writeFileSync("note.txt", "learn node js"); 

// add word in file 
fs.appendFileSync("note.txt", " and learn angular because i will tobe programmer node js"); 