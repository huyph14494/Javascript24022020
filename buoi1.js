// var a = 10;


// console.log("Buoi so 1", a);

// a = "Hello";
// console.log("Buoi so 2", a);

// const arr = [];
// arr[0] = 10;
// console.log(arr);
// arr[0] = 11;
// console.log(arr);


// const arr = { "a" : 1 };
// arr["a"] = 10;
// console.log(arr);
// arr["a"] = 11;
// console.log(arr);


// template string (js backtick)
let rectangle = {
    width: 20,
    height: 50,
    getWidth: function() { return this.width; },
    getHeight: function() { return this.height },
    getArea: function() { return `la: ${(this.height * this.width) / 2}` },
    getWidth2: () => this.width
}

let abc = () => 2;
console.log('abc', abc());


console.log("Width", rectangle.getWidth());
console.log('Height', rectangle.getHeight());
console.log('Area', rectangle.getArea());

console.log('getWidth2', rectangle.getWidth2());

let a = '5';
let b = '100';
console.log(a > b);
// string vs string => to ASCII compare
// number vs string => to number compare