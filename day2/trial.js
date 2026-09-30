// map
let numbers = [1, 2, 3, 4];

let doubled = numbers.map(function(num) {
    return num * 2;
});
// filter
let students=[
    {name:"siyana",mark:75},
    {name:"shaza",mark:45},
    {name:"fathima",mark:65}
];
let passedStudent=students.filter(function(pass){
return pass.mark>=50;
});
console.log(passedStudent);
// reduce
let cart=[
    {name:"book",price:20},
    {name:"pen",price:10},
    {name:"bag",price:500}
];
let total=cart.reduce(function(sum,item){
    return sum+item.price;
},0);
console.log(total);
// sort
let products=[
      { name: "Bag", price: 500 },
    { name: "Pen", price: 20 },
    { name: "Book", price: 100 }
];
products.sort(function(a,b){
    return a.price - b.price;

});
console.log(products);
