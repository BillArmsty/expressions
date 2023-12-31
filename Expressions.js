function* func() {
    yield 1;
    yield 2;
    yield 3;
    yield "Yoh  Geeks";
}

let obj = '';

for ( const i of func() ) {
    obj += i;
}

console.log(obj);

//Implicit Binding - this keyword

const person = {
    name: 'John',
    age: 23,
    display: function() {
        return 'My name is ' + this.name + ' and I am ' + this.age + ' years old';
        
    }
}

console.log(person.display());

//Explicit Binding - this keyword

function ageVerify() {
    if(this.age > 18 ) {
        console.log('You are eligible to vote');
    } else {
        console.log('You are not eligible to vote');
    } 
}

const person1 = {age: 20};
const person2 = {age: 17};
ageVerify.call(person1);
ageVerify.call(person2);


//Default Binding - this keyword

const age = 22;
function verifyAge() {
    return this.age;
}

console.log(verifyAge());

//Arrow Function Binding - this keyword

const someone = {
    name: 'ram',
    age: 23,
    greet : () => {
        return `Hello, you are ${this.name} and you are ${this.age} years old`;
    }
}

console.log(someone.greet());