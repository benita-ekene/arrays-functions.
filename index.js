/**
 2. Here is an array of languages: [‘C#’, ‘JavaScript’, ‘Ruby’, ‘PHP’, ‘Python’]. Perform this operation on them **/

 let languages = ["C#", "JavaScript", "Ruby", "PHP", "Python"];
 console.log(languages);

 //1. Add ‘Kotlin’ to the end of the array 
 languages.push("Kotlin");
 console.log(languages);

 //2. Add ‘Java’ after ‘Ruby’ 
 languages.splice(3, 0, "Java");
 console.log(languages);

 //3. Remove the first item in the array 
 languages.splice(0, 1);
 console.log(languages);

 //4. Add ’Scala’ and ‘Swift’ to the beginning of the array 
 languages.splice(0, 0, "Scala", "Swift");
 console.log(languages);

 //5. Replace ‘PHP’ with ‘Go’ and ‘Rust’
 console.log(languages.indexOf("PHP"));
 languages.splice(5, 1, "Go", "Rust");
 console.log(languages);



 //3. What will be the value of fruit after calling the function changeFruit? 
 let fruit = ['apple', 'mango', 'banana']; 
 function changeFruit( fruit ) { 
  fruit[2] = "orange"; 
  return fruit; 
}
console.log(fruit)

/*
4. Write a function that accepts an array of numbers as an argument. Return the maximum value in the array. e.g., max([4, 5, 10, -2]) // maximum value is 10 
 */

const numbers = [4, 5, 10, -2];
const max = numbers.filter(function(value){
 return value >= 10;
});
console.log("The maximum number in the array is " + max );

/*
5. Write a function called valTimesIndex which accepts an array of numbers and returns a new array with each value multiplied by the index it is at in the array: e.g., valTimesIndex([1,2,3]) // [0,2,6] valTimesIndex([5,10,15]) // [0,10,30]
 */
function valTimesIndex(arrayOfnumbers) {
  return arrayOfnumbers.map(function(value, index) {
    return value * index;
  });
}

console.log(valTimesIndex([5,10,15])); 



