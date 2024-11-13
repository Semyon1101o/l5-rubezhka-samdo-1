import _ from "lodash";
import ArrayValidator from "./ArraySchema.js";

export default class Validator {
  number() {
    return new Validator();
  }
  isValid(data) {
    return _.isNumber(data);
  }
  array() {
    return new ArrayValidator;
  }
}

