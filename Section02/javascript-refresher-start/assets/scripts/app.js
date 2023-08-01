// Revision for JS

let userMessage = "Hello World!";

console.log(userMessage);

function greet(userName, message) {
    console.log(userName, message);
}

greet("Jeff,", "Hi");

greet(1, 2);

function createGreet(userName, message = "Hello!") {
    return "Hi, I am " + userName + ". " + message;
}

const message1 = createGreet("Jeff");
const message2 = createGreet("Jeff", "How are ya?"); // overwriting


console.log(message1);
console.log(message2);


// Ex 1
function combine(num1, num2, num3) {
    const result = num1 * num2 / num3;
    return result;
}

const result1 = combine(2, 5, 2);

console.log(result1);

//If your function takes no parameters, parentheses must not be omitted - () => { ... } is the only correct form in that case.

// If your function takes more than one parameter, you also must not omit parentheses - userName, userAge => { ... } would be invalid ((userName, userAge) => { ... } is correct)!


const user = {
    name: "Jeff",
    age: 28,
    hello() {
        console.log("Hello!");
        console.log(this.age);
    }
};

console.log(user.name);
console.log(user.hello());

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    hello() {
        console.log("Hello!");
    }
}

const user1 = new User("Jeff", 28);

console.log(user1);

//Ex 2
function transformToObjects(numberArray) {
    return numberArray.map(number => {
        return { val: number }
    });
}


// destructuring array
// const firstName = "Jeff";
// const lastName = "Hwang";

const [firstName, lastName] = ["Jeff", "Hwang"];

console.log(firstName);
console.log(lastName);



// destructuring object

const { name: userName, age } = {
    name: "Jeff",
    age: 28
}

// const name1 = user2.name;
// const age1 = user2.age;


// Spread Operator ...

const hobbies = ["Sports", "Cooking"];

const newHobbies = ["Reading"];

const mergedHobbies = [hobbies, newHobbies];

const mergedHobbies2 = [...hobbies, ...newHobbies];

console.log(mergedHobbies);

console.log(mergedHobbies2);

const user2 = {
    name: "F",
    age: 2
}

const extenderdUser = {
    isAdmin: true,
    ...user2
}

console.log(extenderdUser);


// Revisiting Control Structures

// const password = prompt("Your password");

// more about anonymous functions

// (1)
function handleTimeout() {
    console.log("Timed out");
}

// (2)
const handleTimeout2 = () => {
    console.log("Timed out2");
}

setTimeout(handleTimeout, 2000);
setTimeout(handleTimeout2, 3000);

// (3)
setTimeout(() => {
    console.log("Timed out3");
}, 4000)