
import {postiveNumber} from './../utilities/validValues';

describe('suite for the postiveNumber function', () => {
    it('describes the postiveNumber if number was postive', () => {
        expect(postiveNumber(5)).toEqual(true);
    });
    it('describes the postiveNumber if number was not postive', () => {
        expect(postiveNumber(-5)).toEqual(false);
    });

  
});
