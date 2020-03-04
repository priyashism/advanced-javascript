//Falsy Value
// false
// 0
// ""
//undefined
// null
//NaN



//Truthy
// "0". ' ', []

let name = 0;
console.log(name || name == 0);


if(name){
    console.log("Condition is true")
}
else{
    console.log("condition is false")
}