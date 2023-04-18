import { assert } from "chai";
import { DEFINED_RULES, FizzBuzzSolution } from "../kata-oop/solution.js";

describe('FizzBuzz class', () => {
    describe('applyReplacementRules()', () => {
        let fizzBuzzSolution: FizzBuzzSolution;
        before(() => {
            fizzBuzzSolution = new FizzBuzzSolution(16, DEFINED_RULES);
        });

        it('should return the number passed in parameter if it is not divisible by 3 or by 5', function () {
            assert.equal(fizzBuzzSolution.applyReplacementRules(2), "2");
        });
        it('should return "Fizz" if the number passed in parameter is divisible by 3 but not by 5', function () {
            assert.equal(fizzBuzzSolution.applyReplacementRules(3), "Fizz");
            assert.equal(fizzBuzzSolution.applyReplacementRules(6), "Fizz");
        });
        it('should return "Buzz" if the number passed in parameter is divisible by 5 but not by 3', function () {
            assert.equal(fizzBuzzSolution.applyReplacementRules(5), "Buzz");
            assert.equal(fizzBuzzSolution.applyReplacementRules(10), "Buzz");
        });
        it('should return "FizzBuzz" if the number passed in parameter is divisible by 3 and 5', function () {
            assert.equal(fizzBuzzSolution.applyReplacementRules(15), "FizzBuzz");
            assert.equal(fizzBuzzSolution.applyReplacementRules(30), "FizzBuzz");
        });
    });

    describe('generate()', () => {
        it('should print to console numbers from 1 to LIMIT applying the defined rules', function () {
            const LIMIT = 16;
            const fizzBuzzSolution = new FizzBuzzSolution(LIMIT, DEFINED_RULES);
            const expected: string[] = ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz", "16"]
            fizzBuzzSolution.generate()
            assert.deepEqual(fizzBuzzSolution.generate(), expected);
        });
    });
});

