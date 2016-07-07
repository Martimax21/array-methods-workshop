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

//getPositives2(arrayTest);

// Exercise 3

// Write a function called filterArray that takes an array AND a function as arguments. 
// Your filter function should return a new array that contains only the elements where the 
// passed function returns a truthy value.

// NOTE: You are allowed to use Array.prototype.filter to answer this question.
// NOTE 2: This is a bit of a trick question, the answer is a one-liner :)

function filterArray(arr,func){
    return arr.filter(func);
}

//console.log(filterArray(arrayTest,isPositive));

// Exercise 4

// Write a function called longestWord that takes a string as argument, 
// and returns the longest word in the string. You should use Array.prototype.reduce
// to do your work.

// Hint: You can use String.prototype.split to split the string into an array of words.
var testStr = "Je m'appelle Maxime Martin et j'habite à Montréalett";
//var strarr = teststr.split(' ');
//console.log (strarr);

function longer(a,b){
    if (a.length > b.length) {
        return a;
    }
    else { 
        return b;
    }
}

function longestWord(str){
    var arrstr = str.split(' ');
    return arrstr.reduce(longer,"");
}

// console.log(longestWord(testStr));



// Exercise 5
// Write a function called countVowels that takes a string and returns the number of
// vowels in the string. You should use Array.prototype.reduce to do your work.
// Hint: You can use String.prototype.split again. There is a way to use it to split 
// a string by character. Try to Google it :)
// Hint 2: You can create an array of vowels and use Array.prototype.indexOf 
// to check if the current letter is a vowel.
function isVowel(letter){
    if (letter ==='a' || letter ==='i'|| letter ==='e'|| letter ==='u'|| letter ==='o'|| letter ==='y'){
        return true;
    }
}

function countVowels(str){
    var arrStr = str.split("");
    return arrStr.reduce(function(counter,char){
        if (isVowel(char)) {
            counter = counter + 1;
        }
        return counter;
    }, 0);
}

// var testStr2 = "mappelletra";

// console.log(countVowels(testStr2));

// Exercise 6
// Write a function called highLow that takes an array of numbers, and returns an 
// object with a property highest containing the highest number, and a property lowest 
// containing the lowest number, using Array.prototype.reduce.

// For example, starting with [1, -10, 20, 40, 5], your function should return 
// {highest: 40, lowest: -10}.

// Hint: Javascript has a special value called Infinity, which is higher than any other number. 
// See if you can initialize your reduce accumulator with Infinity and -Infinity :)

function highLow(arrNum){
    return arrNum.reduce(function(obj,item){
        if (item > obj.highest) {
            obj.highest = item;
        }
        else if (item < obj.lowest){
            obj.lowest = item;
        }
        return obj;
        
    },{highest:-Infinity,lowest:Infinity});
}
var testaaar = [40,2,5,32,76,5675];

console.log(highLow(testaaar));

// var counts = animals.reduce(function(animalCounts, animal) {
//     /*
//         Look at each animal in turn:
//             If the key for its species is already in the accumulator, then add one to it
//             Otherwise, create this key and set it to 1
//     */
//     if (animalCounts[animal.species]) {
//         animalCounts[animal.species] += 1;
//     }
//     else {
//         animalCounts[animal.species] = 1;
//     }
    
//     return animalCounts;
// }, {});
