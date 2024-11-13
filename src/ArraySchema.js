export default class ArrayValidator {
    array() {
        return new ArrayValidator();
    }
    isValid(data) {
        return Array.isArray(data);
    }
    allIntegers(array) {
        const result = array.map((num) => num % 1 === 0);
        return result;
    }
}
const v = new ArrayValidator();

const schema1 = v.array();
schema1.isValid([]); // true;
schema1.isValid([1,2]); // true;
schema1.isValid(12); // false;
schema1.isValid({}); // false;

const schema2 = v.array().allIntegers();
console.log(schema2.isValid([])); // true;
schema1.isValid([1,2]); // true;
schema1.isValid([12, 'b']); // false;
schema1.isValid({}); // false;
schema1.isValid([1.2, 1, 2]); // false;
console.log(schema2.isValid([122n, 0])); // true;
