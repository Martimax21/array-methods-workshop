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
//var testaaar = [40,2,5,32,76,5675];

//console.log(highLow(testaaar));

// Exercise 7
// Expanding on exercise 6, write a function called highLowTwo that takes an array of numbers, 
// and returns the higest, second highest, lowest, and second lowest numbers.
// For example, starting with [1, -10, 20, 40, 5], your function should return:
// {
//   "highest": 40,
//   "secondHighest": 20,
//   "lowest": -10,
//   "secondLowest": 5
// }

function highLowTwo(arrNum){
    return arrNum.reduce(function(obj,item){
        if (item >= obj.highest) {
            obj.secondHighest=obj.highest;
            obj.highest = item;
        }
        if (item < obj.highest && item > obj.secondHighest) {
            obj.secondHighest=item;
        }
        if (item <= obj.lowest){
            obj.secondLowest=obj.lowest;
            obj.lowest = item;
        }
        if (item > obj.lowest && item < obj.secondLowest){
            obj.secondLowest=item;
        }
        return obj;
        
    },{highest:-Infinity,secondHighest:-Infinity,secondLowest:Infinity,lowest:Infinity});
}

//var testaaar = [40,2,5,32,76,44444444, 43,44444444,34,54, 54, 888888];

//console.log(highLowTwo(testaaar));

// Exercise 8

// Write a function called countChars that takes a string, and returns an object where 
// the keys are letters, and the value is the number of times that letter appears.
// For example, with input "hello world", the output should be:

// {
//   "h": 1,
//   "e": 1,
//   "l": 3,
//   "o": 2,
//   "w": 1,
//   "r": 1,
//   "d": 1
// }
// NOTE: Unlike arrays, objects don’t have any ordering on them. When you print your 
// object on the console, your keys may be displayed in a different order, and it does not matter.
function isNotSpace(letter){
    if (letter !== " "){
        return true;
    }
}

function countChars(str){
    var arrStr = str.split("");
    var finalArrStr = arrStr.filter(isNotSpace);
    return finalArrStr.reduce(function(obj,char){
        if (obj[char]) {
            obj[char] += 1;
         }
        else {
             obj[char] = 1;
        }
        return obj;
    },{});
}

//var teststr23 = "Beyonce JayZ and Nicki";
//console.log(countChars(teststr23));

// Exercise 9
// Starting on week 3 of the bootcamp, we will be learning about databases. Databases are useful 
// for saving data for long periods of time.
// Contrary to a JavaScript program, where all the data disappears when the program terminates, 
// databases keep their data "forever".
// In this exercise, we’re going to imagine that we are storing people information in a database, 
// and that we queried our database to retrieve a list of people.
// Our database returns to us an array of people objects, and each of them has a unique ID that the 
// database uses to refer to it.
// Here’s what our person data could look like:

var testArrObjects = [
  {
    "id": "KeXoYg92is",
    "firstName": "John",
    "lastName": "Smith",
    "email": "john@smith.com"
  },
  {
    "id": "NkALmSWtUp",
    "firstName": "Donald",
    "lastName": "Duck",
    "email": "don@disney.com"
  },
  {
    "id": "m7LPbJYSUg",
    "firstName": "John",
    "lastName": "Vader",
    "email": "vader@darkside.com"
  }
]
// For this exercise, we want to use Array.prototype.reduce to transform our array of people into
//an object, keyed with the unique ID.

// The end result should look like this:

// {
//   "KeXoYg92is": {
//     "id": "KeXoYg92is",
//     "firstName": "John",
//     "lastName": "Smith",
//     "email": "john@smith.com"
//   },
//   "NkALmSWtUp": {
//     "id": "NkALmSWtUp",
//     "firstName": "Donald",
//     "lastName": "Duck",
//     "email": "don@disney.com"
//   },
//   "m7LPbJYSUg": {
//     "id": "m7LPbJYSUg",
//     "firstName": "John",
//     "lastName": "Vader",
//     "email": "vader@darkside.com"
//   }
// }
// This object could be useful if we are often looking up people by their unique ID.
// Write a function called peopleById that takes an array of people and returns an object 
// where each person is keyed by their unique ID.
// You have effectively created what we call an index, not unlike the one you have in your phonebook.

function peopleById(arrPeople){
    return arrPeople.reduce(function(obj,char){
        obj[char.id]=char;
        return obj;
    },{});
}

//console.log(peopleById(testArrObjects ));

// Exercise 10

// Expanding on the previous exercise, this time we are going to create an index on first names.
// Notice how in the previous exercise, each ID was unique. In this case, two people have the same first name.

// We want to create a function called peopleByFirstName that will take an array of people and return
// something that looks like this:

// {
//   "John": [
//     {
//       "id": "KeXoYg92is",
//       "firstName": "John",
//       "lastName": "Smith",
//       "email": "john@smith.com"
//     },
//     {
//       "id": "m7LPbJYSUg",
//       "firstName": "John",
//       "lastName": "Vader",
//       "email": "vader@darkside.com"
//     }
//   ],
//   "Donald": [
//     {
//       "id": "NkALmSWtUp",
//       "firstName": "Donald",
//       "lastName": "Duck",
//       "email": "don@disney.com"
//     }
//   ]
// }
// You have effectively created an index on first name. This lets you find all people called, say, 
// “John” without having to look through the whole results.

function peopleByFirstName (arrPeople){
    return arrPeople.reduce(function(obj,char){
        if (obj[char.firstName]) {
            obj[char.firstName].push(char);
         }
        else {
             obj[char.firstName] = [];
             obj[char.firstName].push(char);
             
        }
        return obj;
    },{});
}

console.log(peopleByFirstName(testArrObjects ));