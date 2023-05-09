var user = {
    first_name: "Luffy",
    last_name: "Mugiwara",
    age: "20",
    occupation : "Kaizoku"
    };
console.log(user);
console.log(Object.keys(user).length);
delete user.last_name;
console.log(user);
var length = Object.keys(user).length;
console.log(length);

const prompt = require('prompt-sync')()

var num = parseInt(prompt('Enter number'));