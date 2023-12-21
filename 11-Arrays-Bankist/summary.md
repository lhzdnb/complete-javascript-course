### 1. `.slice()`

- **Description**: Returns a shallow copy of a portion of an array into a new array object without modifying the
  original array.
- **Returns**: New array.
- **Example**:
  ```javascript
  let arr = ['a', 'b', 'c', 'd', 'e'];
  console.log(arr.slice(2)); // ['c', 'd', 'e']
  ```

### 2. `.splice()`

- **Description**: Changes the contents of an array by removing or replacing existing elements and/or adding new
  elements. This method mutates the original array.
- **Mutates Original Array**: Yes.
- **Example**:
  ```javascript
  let arr = ['a', 'b', 'c', 'd', 'e'];
  arr.splice(2, 2, 'x', 'y'); // removes 'c', 'd' and adds 'x', 'y'
  console.log(arr); // ['a', 'b', 'x', 'y', 'e']
  ```

### 3. `.reverse()`

- **Description**: Reverses an array in place. This method mutates the original array.
- **Mutates Original Array**: Yes.
- **Example**:
  ```javascript
  let arr = ['a', 'b', 'c', 'd', 'e'];
  arr.reverse();
  console.log(arr); // ['e', 'd', 'c', 'b', 'a']
  ```

### 4. `.concat()`

- **Description**: Merges two or more arrays into a new array without modifying the original arrays.
- **Returns**: New array.
- **Example**:
  ```javascript
  let arr1 = ['a', 'b'];
  let arr2 = ['c', 'd'];
  let merged = arr1.concat(arr2);
  console.log(merged); // ['a', 'b', 'c', 'd']
  ```

### 5. `.join()`

- **Description**: Joins all elements of an array into a string.
- **Returns**: String.
- **Example**:
  ```javascript
  let arr = ['a', 'b', 'c'];
  console.log(arr.join('-')); // 'a-b-c'
  ```

### 6. `forEach()`

- **Description**: Executes a provided function once for each array element, without modifying the array.
- **Mutates Original Array**: No (but the callback function can modify the original array).
- **Example**:
  ```javascript
  let arr = [1, 2, 3];
  arr.forEach((element, index) => {
    console.log(`Element at index ${index} is ${element}`);
  });
  ```

### 7. `.map()`

- **Description**: Creates a new array with the results of calling a provided function on every element in the calling
  array.
- **Returns**: New array.
- **Example**:
  ```javascript
  let arr = [1, 2, 3];
  let doubled = arr.map(element => element * 2);
  console.log(doubled); // [2, 4, 6]
  ```

### 8. `.filter()`

- **Description**: Creates a new array with all elements that pass the test implemented by the provided function.
- **Returns**: New array.
- **Example**:
  ```javascript
  let arr = [1, 2, 3, 4, 5];
  let even = arr.filter(element => element % 2 === 0);
  console.log(even); // [2, 4]
  ```

### 9. `.reduce()`

- **Description**: Executes a reducer function on each element of the array, resulting in a single output value.
- **Returns**: Single value.
- **Example**:
  ```javascript
  let arr = [1, 2, 3, 4];
  let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  console.log(sum); // 10
  ```

### 10. `.find()`

- **Description**: Returns the value of the first element in the provided array that satisfies the provided testing
  function.
- **Returns**: Single value (element of the array).
- **Example**:
  ```javascript
  let arr = [5, 12, 8, 130, 44];
  let found = arr.find(element => element > 10);
  console.log(found); // 12
  ```

### 11. `.some()` and `.every()`

- **`.some()` Description**: Tests whether at least one element in the array passes the test implemented by the provided
  function.
- **`.every()`

Description**: Tests whether all elements in the array pass the test implemented by the provided function.

- **Returns**: Boolean.
- **Example**:
  ```javascript
  let arr = [1, 2, 3, 4, 5];
  console.log(arr.some(element => element > 3)); // true
  console.log(arr.every(element => element > 0)); // true
  ```

### 12. `.flat()` and `.flatMap()`

- **`.flat()` Description**: Creates a new array with all sub-array elements concatenated into it recursively up to the
  specified depth.
- **`.flatMap()` Description**: Combines `map` and `flat` into one method.
- **Returns**: New array.
- **Example**:
  ```javascript
  let arr = [1, 2, [3, 4], [5, [6, 7]]];
  console.log(arr.flat(2)); // [1, 2, 3, 4, 5, 6, 7]
  ```

### 13. `.sort()`

- **Description**: Sorts the elements of an array in place and returns the sorted array.
- **Mutates Original Array**: Yes.
- **Example**:
  ```javascript
  let arr = [3, 1, 4, 1, 5];
  arr.sort((a, b) => a - b);
  console.log(arr); // [1, 1, 3, 4, 5]
  ```

### 14. `Array.from()`

- **Description**: Creates a new, shallow-copied Array instance from an array-like or iterable object.
- **Returns**: New array.
- **Example**:
  ```javascript
  let arr = Array.from({ length: 3 }, (_, index) => index + 1);
  console.log(arr); // [1, 2, 3]
  ```

### 15. `.fill()`

- **Description**: Fills all the elements of an array from a start index to an end index with a static value. This
  method mutates the original array.
- **Mutates Original Array**: Yes.
- **Example**:
  ```javascript
  let arr = new Array(5);
  arr.fill(0);
  console.log(arr); // [0, 0, 0, 0, 0]
  ```

These methods provide a comprehensive toolkit for manipulating and iterating over arrays in JavaScript, each with their
specific purpose and behavior.

![](C:\Learning\HTML\complete-javascript-course-master\11-Arrays-Bankist\summary.png)