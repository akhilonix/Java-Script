let x =10;
x=40;
console.log(x);
console.log(x);
let arr = [1, 2, 3];
console.log(arr);
let obj = { name: "John", age: 30 };
console.log(obj);
console.warn("This is a warning message");
console.error("This is an error message");

//var
//var a=10;
//var a=20;
//console.log(a);
//console.log(a);

//const
//const b=30; 
// b=40 error
//const b=50; error
//console.log(b);



var d=50;
if(true){
    let c=60;
    let y=100;
    console.log(c,y,d);
}



let name = "Akhilesh";

console.log(name);
console.log(typeof name);

let age = 20;
let marks = 85.5;

console.log(age);
console.log(marks);
console.log(typeof age);
console.log(typeof marks);


let isStudent = true;
let isWorking = false;

console.log(isStudent);
console.log(isWorking);
console.log(typeof isStudent);

let result;
console.log(result);
console.log(typeof result);

let data = null;
console.log(data);
console.log(typeof data);

let id = Symbol("id");
console.log(id);
console.log(typeof id);


//object

let student = {
    name: "Akhilesh",
    age: 20,
    course: "B.Tech CSE"
};

console.log(student);
console.log(student.name);
console.log(student.age);
console.log(typeof student);

//array
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);

//function
function Hello(Akhil){
    return "Hello " + Akhil;
}
console.log(Hello("Akhil"));
