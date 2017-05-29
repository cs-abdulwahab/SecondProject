/**
 * Created by Abdul-Wahab on 3/30/2017.
 */
console.log('testing');

foo();

function *foo() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
    return 6;
}

for (var v of foo()) {
    console.log( v );
}