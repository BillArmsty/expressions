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
