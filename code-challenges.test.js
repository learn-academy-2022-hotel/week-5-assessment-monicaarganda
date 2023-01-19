// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest
 
// const { it } = require("node:test")
// const { describe } = require("yargs")
 
// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process
 
// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest
 
// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest
 
// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.
 
// a) Create a test with expect statements using the variables provided.
 
const secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"
 
   // WRITE TEST
   describe("codedMessage", () => {
       it("takes in a string and returns a string with a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.", () => {
           const secretCodeWord1 = "Lackadaisical"
           // Expected output: "L4ck4d41s1c4l"
           const secretCodeWord2 = "Gobbledygook"
           // Expected output: "G0bbl3dyg00k"
           const secretCodeWord3 = "Eccentric"
           // Expected output: "3cc3ntr1c"
           expect(codedMessage(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
           expect(codedMessage(secretCodeWord2)).toEqual("G0bbl3dyg00k")
           expect(codedMessage(secretCodeWord3)).toEqual("3cc3ntr1c")
       } )
   })
 
   // SEE TEST GOOD FAIL:
   // FAIL  ./code-challenges.test.js
   // codedMessage
   //   ✕ takes in a string and returns a string with a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0. (1 ms)
    // ● codedMessage › takes in a string and returns a string with a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.
    //   ReferenceError: codedMessage is not defined
 
// b) Create the function that makes the test pass.
 
   // PROCESS
       // input: a string
       // output: a new string that will replace specific letters with numbers
   // PSEUDOCODE
       // Create a method called 'codedMessage'
       // Pass the variable 'string' into the parameters in to the method
       // CONDITIONAL STATEMENT:
           // use a for loop to access each letter
           // if the string index is equal to 'a' use .replace it with 4
           // if the string index is equal to 'e' use .replace it with 3
           // if the string index is equal to 'i' use .replace it with 2
           // if the string index is equal to 'a' use .replace it with 4
           // return the string
           // after running the test my code did pass but I couldnt get it to return the new string that replaced the given letters with numbers.
       // Create an object called replaceLetters that give access to the replacement values that are given, the object will have the key:pair values {'a': 4, 'A': 4, 'e': 3, 'E': 3, 'i': 1, 'I': 1, 'o': 0, 'O': 0}
       // In order to replace each instance of the letter use the .replace method, this method doesn't mutate the original string but it creates a new string. (Here is the link I used for .replace: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#:~:text=The%20replace()%20method%20returns,first%20occurrence%20will%20be%20replaced.)
       // Use /[aeio]/gi to access each letter in the string, gi tells the function to look for each instance over the entire string and not stop at the first instance of occurrence. (Here is the link to more information on /[aeio]/gi: https://www.sololearn.com/discuss/3000975/what-does-aeiou-gi-do-in-this-code)
       // Access each letter in the new string and call on the variable replaceLetters inorder to replace the given strings letter with the corresponding numbers.
 
   // const codedMessage = string => {
   //     // let splitString = string.split("")
   //     for (let i = 0; i < string.length; i++) {
   //         if (string[i] = "a")
   //             {(string[i].replace("a", 4))}
   //         else if (string[i] = "i")
   //             {(string[i].replace("e", 3))}
   //         else if (string[i] = "i")
   //             {(string[i].replace("i", 1))}
   //         else if (string[i] = "i")
   //             {(string[i].replace("o", 1))}
   //         else
   //             {}
   //     }
   //     return string
   // }
   
    const codedMessage = (string) => {
       let replaceLetters = {'a': 4, 'A': 4, 'e': 3, 'E': 3, 'i': 1, 'I': 1, 'o': 0, 'O': 0}
      return string.replace(/[aeio]/gi, (letter) => replaceLetters[letter])
    }
 
     console.log(codedMessage(secretCodeWord1))
     console.log(codedMessage(secretCodeWord2))
     console.log(codedMessage(secretCodeWord3))
 
   //  SEE TEST PASS
       // PASS  ./code-challenges.test.js
       // codedMessage
       // ✓ takes in a string and returns a string with a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0. (1 ms)
  
       // Test Suites: 1 passed, 1 total
       // Tests:       1 passed, 1 total
       // Snapshots:   0 total
       // Time:        0.175 s, estimated 1 s
       // Ran all test suites.
       // ✨  Done in 0.56s.
 
 
 
// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.
 
// a) Create a test with expects statement using the variable provided.
 
const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]
 
const letterA = "a"
// Expected output: ["Mango", "Apricot", "Peach"]
const letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]
 
   // WRITE TEST
   describe("singleLetter", () => {
       it("takes in an array of words and a single letter and returns an array of all the words containing that particular letter.", () => {
           const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]
           const letterA = "a"
           // Expected output: ["Mango", "Apricot", "Peach"]
           const letterE = "e"
           // Expected output: ["Cherry", "Blueberry", "Peach"]
           expect(singleLetter(fruitArray, letterA)).toEqual(["Mango", "Apricot", "Peach"])
           expect(singleLetter(fruitArray, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
       })
   })
 
   // SEE TEST GOOD FAIL:
       // FAIL  ./code-challenges.test.js
       // codedMessage
       // ✓ takes in a string and returns a string with a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0. (1 ms)
       // singleLetter
       // ✕ takes in an array of words and a single letter and returns an array of all the words containing that particular letter.
  
       // ● singleLetter › takes in an array of words and a single letter and returns an array of all the words containing that particular letter.
  
       // ReferenceError: singleLetter is not defined
 
// b) Create the function that makes the test pass.
 
   // PROCESS
       // input: an array of strings and a string
       // output: a new array that will return specific words that contain specific letters
   // PSEUDOCODE
       // Create a method called 'singleLetter'
       // Pass in 'array' and 'string' into the parameters to pass the given variables into the method
       // iterate through each value in the array using the method .filter, this will filter through an array and return a subset of the original array.
       // Create a HOF that passes each 'word' in the array, if the array value .includes() the particular letter then it will return the array values with that letter
       // Because the words begin with capitals use the .toLowercase as well as the .toUppercase methods to allow access of the array no matter the casing in the word.
 
       // WRITE CODE
       const singleLetter = (array, string) => {
           return array.filter((word) =>
               word.includes(string.toUpperCase()) || word.includes(string.toLowerCase())
           )
       }
   // console.log(singleLetter(fruitArray, letterA))
   // console.log(singleLetter(fruitArray, letterE))
 
       // SEE CODE PASS
       // PASS  ./code-challenges.test.js
       // codedMessage
       //   ✓ takes in a string and returns a string with a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0. (1 ms)
       // singleLetter
       //   ✓ takes in an array of words and a single letter and returns an array of all the words containing that particular letter. (1 ms)
    
       // Test Suites: 1 passed, 1 total
       // Tests:       2 passed, 2 total
       // Snapshots:   0 total
       // Time:        0.161 s, estimated 1 s
       // Ran all test suites.
       // ✨  Done in 0.51s.
 
// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.
 
// a) Create a test with expect statements using the variable provided.
 
const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false
const hand4 = [7, 2, 7, 2, 7]
// Expected output: true
 
   // WRITE TEST
   describe("fullHouse", () => {
       it("takes in an array of 5 numbers and determines whether or not the array is a full house.", () => {
           const hand1 = [5, 5, 5, 3, 3]
           // Expected output: true
           const hand2 = [5, 5, 3, 3, 4]
           // Expected output: false
           const hand3 = [5, 5, 5, 5, 4]
           // Expected output: false
           const hand4 = [7, 2, 7, 2, 7]
           // Expected output: true
           expect(fullHouse(hand1)).toEqual(true)
           expect(fullHouse(hand2)).toEqual(false)
           expect(fullHouse(hand3)).toEqual(false)
           expect(fullHouse(hand4)).toEqual(true)
       })
   })
 
   // SEE TEST GOOD FAIL:
   // FAIL  ./code-challenges.test.js
   // codedMessage
   //   ✓ takes in a string and returns a string with a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0. (1 ms)
   // singleLetter
   //   ✓ takes in an array of words and a single letter and returns an array of all the words containing that particular letter.
   // fullHouse
   //   ✕ takes in an array of 5 numbers and determines whether or not the array is a full house.
    // ● fullHouse › takes in an array of 5 numbers and determines whether or not the array is a full house.
    //   ReferenceError: fullHouse is not defined
 
// b) Create the function that makes the test pass.
 
    // PROCESS
       // input: an array of numbers
       // output: a boolean that determines of the value before it is equal to itself
   // PSEUDOCODE
       // Create a function called fulHouse
       // Pass the variable 'array' into the parameters in to the method
       // A full house is exactly one pair and one three of a kind.
       // CONDITIONAL STATEMENT:
           // Use && operator to determine if there are 2 of the same values and 3 of the same values in the array by accessing the values indexes.
           // if the array does output a full house with the possible full house outcomes [0,0,0,1,1] [1,0,0,0,1] [0,1,0,1,0] [1,1,0,0,0], then it will return true
           // else if: if the statement does not meet the pair requirements then it will return false
 
       // WRITE CODE
       const fullHouse = (array) => {
           if (array[0] === array[1] && array[3] === array[4] && array[0] === array [2]) {
               return true
           } else if (array[0] === array[1] && array[2] === array[3] && array[4] === array [2]) {
               return true
           } else if (array[0] === array[2] && array[3] === array[1] && array[4] === array [2]) {
               return true
           } else {
               return false
           }
       }
       // console.log(fullHouse(hand1))
       // console.log(fullHouse(hand2))
       // console.log(fullHouse(hand3))
       // console.log(fullHouse(hand4))
 
       // SEE A PASS
       // PASS  ./code-challenges.test.js
       // codedMessage
       //   ✓ takes in a string and returns a string with a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0. (1 ms)
       // singleLetter
       //   ✓ takes in an array of words and a single letter and returns an array of all the words containing that particular letter.
       // fullHouse
       //   ✓ takes in an array of 5 numbers and determines whether or not the array is a full house.
    
       // Test Suites: 1 passed, 1 total
       // Tests:       3 passed, 3 total
       // Snapshots:   0 total
       // Time:        0.189 s, estimated 1 s
       // Ran all test suites.
       // ✨  Done in 0.79s.
 
 
