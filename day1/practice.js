// spread operator
let numbers=[1,2,3];
let newNumbers=[...numbers,4,5];
let nums=[-1,0,...newNumbers];
console.log(nums);
// rest operator
function add(...letters) {
    console.log(letters);
}

add("A", "B", "C");

// default parameter
function greet(name = "User") {
    console.log("hello"+name);
}

greet("Siyana");
greet();

// object
const student = {
    name: "Siyana",
    age: 18,
    course: "JavaScript"
};

const { name, age, course } = student;

console.log(name);
console.log(age);
console.log(course);

// Array
let fruits=["apple","orange","banana"];
let [a,b,c]=fruits;
console.log(a);
console.log(b);
console.log(c);