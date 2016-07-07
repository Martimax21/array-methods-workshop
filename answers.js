// Exercise 1
// Write a function called printPositives that takes an array and uses the forEach 
// method to print only the positive numbers.

function printPositives(arr){
    arr.forEach(function(entry, i) {
        if (entry > 0) {
            console.log(entry, i);
        }
    })
}

var arrayTest = [-1,2,4,-5,3,-6];
//printPositives(arrayTest);


// Exercise 2

// Similar to the previous exercise, write a function called getPositives that takes an
// array and uses the filter method to return a new array with only the positive numbers.

function isPositive(something) {
    if (something > 0) {
        return true;
    }
}

function getPositives(arr){
   return arr.filter(isPositive);
}

//console.log(getPositives(arrayTest));

// Exercise 2B
// Re-do exercise 1 by first filtering the input array, and then printing the numbers from 
// the filtered array. Your code will look something like: return arr.filter(...).forEach(...).


function getPositives2(arr){
   arr.filter(isPositive).forEach(function(entry) {console.log(entry);});
}


getPositives2(arrayTest);







// function Counter() {
//   this.sum = 0;
//   this.count = 0;
// }
// Counter.prototype.add = function(array) {
//   array.forEach(function(entry) {
//     this.sum += entry;
//     ++this.count;
//   }, this);
//   // ^---- Note
// };

// var obj = new Counter();
// obj.add([2, 5, 9]);
// obj.count
// // 3 
// obj.sum