import * as assert from "assert";
import { alwaysReturnTrue } from "../kata/kata.js";

describe('Dummy test to check if the setup is correct', () => {
    it('should check if alwaysReturnTrue() returns true', done => {
        assert.strictEqual(alwaysReturnTrue(), true);
        done();
    });
});