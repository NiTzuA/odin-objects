function getAverageAge(arr) {
    let sum = arr.map(user => user.age);
    let average = sum.reduce((acc, val) => acc + val, 0) / arr.length;
    return average;
};

function getAverageAgeSimpler(arr) {
    return arr.reduce((sum, user) => sum + user.age, 0) / arr.length;
}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

alert(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28