import _ from 'lodash' 

export default class NumberSchema {
    isValid(data) {
        return _.isNumber(data);
    }

}

