
export default class ArraySchema {
  isValid(data) {
    return Array.isArray(data);
  }

   allIntegers(data) {
    if (new ArraySchema().isValid(data) === false) {
      return false;
    } else {
      return data.filter((el) => !Number.isInteger(el)).length === 0 ? true : false;
    }
  }
}

console.log(new ArraySchema().allIntegers([1, 1.2, 3]))
console.log(new ArraySchema().allIntegers([1, `where is my mind`, 3]))
console.log(new ArraySchema().allIntegers([]))
console.log(new ArraySchema().allIntegers([1, 2, 3]))