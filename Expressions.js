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