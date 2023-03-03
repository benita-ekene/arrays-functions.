# arrays-functions.
<h2>Question 1 </h2>  <h2>The differences between mutating array methods and non-mutation array methods in JavaScrip</h2>
Mutating array methods change the original array by adding, removing, or modifying elements in-place, while non-mutating array methods return a new array without modifying the original one. <br>

<Table>
      <h2>Mutating Array Methods</h2> 
    <tr>
      <td><h3>1.</h3>  push() - adds one or more elements to the end of an array</td>
      <td><h3>2.</h3>  pop() - removes the last element from an array</td>
      <td><h3>3.</h3>  splice() - adds or removes elements from an array at a specific index</td>
      <td><h3>4.</h3>  sort() - sorts the elements of an array in place</td>
      <td><h3>5.</h3>  reverse() - reverses the order of elements in an array in place</td>
    </tr>
  </Table>

  <Table>
      <h2>Non-mutating Array Methods</h2>
    </tr>
    <tr>
      <td><h3>1.</h3>  concat() - returns a new array that combines two or more arrays</td>
      <td><h3>2.</h3>  slice() - returns a new array that contains a portion of an existing array</td>
      <td><h3>3.</h3>  map() - returns a new array by applying a function to each element of an existing array</td>
      <td><h3>4.</h3>   filter() - returns a new array containing elements that pass a test function</td>
      <td><h3>5.</h3>   reduce() - returns a single value by applying a function to each element of an existing array and accumulating the results.</td>
    </tr>
  </Table>

<h2>Question 2</h2> Check index.js<br>

<h2>Question 3</h2> <h2>  What will be the value of fruit after calling the function changeFruit?</h2> 
 let fruit = ['apple', 'mango', 'banana'];<br> 
 function changeFruit( fruit ) { <br>
  fruit[2] = "orange"; <br>
  return fruit; <br>
}<br>
console.log(fruit)<br>
Also check index.js<br>
<h3>Output:</h3>
'apple', 'mango', 'banana'<br>

<h2>Question 4</h2>   Check index.js<br>
<h2>Question 5</h2>   Check index.js<br>