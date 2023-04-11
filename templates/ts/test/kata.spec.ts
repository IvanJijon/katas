import * as assert from "assert";
import { alwaysReturnTrue } from "../kata/kata.js";

describe('Dummy test to check if the setup is correct', () => {
    it('alwaysReturnTrue() should return true', done => {
        assert.strictEqual(alwaysReturnTrue(), true);
        done();
    });
});