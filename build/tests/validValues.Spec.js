"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var validValues_1 = require("./../utilities/validValues");
describe('suite for the postiveNumber function', function () {
    it('describes the postiveNumber if number was postive', function () {
        expect((0, validValues_1.postiveNumber)(5)).toEqual(true);
    });
    it('describes the postiveNumber if number was not postive', function () {
        expect((0, validValues_1.postiveNumber)(-5)).toEqual(false);
    });
});
