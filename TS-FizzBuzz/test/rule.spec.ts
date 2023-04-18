// import { expect } from "chai";
import { assert } from "chai";
import { DivisionRule } from "../kata-oop/rule.js";

describe('DivisionRule class', () => {
    describe('validate(input)', () => {
        let divisor: number;
        before(() => { divisor = 3 });
        it('should return true if the input is divisible by 3 and the return value should be "Fizz"', function () {
            const inputs = [3, 6, 9, 15, 99];
            const expectedReplacementString = "Fizz";
            const rule = new DivisionRule(divisor, expectedReplacementString);

            inputs.forEach(input => {
                assert.isTrue(rule.validate(input));
                assert.equal(rule.replacementString, expectedReplacementString);
            });
        });
        it('should return false if the input is not divisible by 3', function () {
            const inputs = [2, 4, 8, 88, 100];
            const rule = new DivisionRule(divisor, "Fizz");

            inputs.forEach(input => {
                assert.isFalse(rule.validate(input));
            });
        });
    });
});

