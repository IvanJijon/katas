import { IRule, DivisionRule } from "./rule.js";

export const DEFINED_RULES: IRule[] = [
    new DivisionRule(3, "Fizz"),
    new DivisionRule(5, "Buzz"),
]

export class FizzBuzzSolution {
    UPPER_LIMIT: number;
    RULES: IRule[];

    constructor(limit: number, rules: IRule[]) {
        this.UPPER_LIMIT = limit;
        this.RULES = rules;
    }

    public generate(): string[] {
        let result = []
        for (let i = 1; i <= this.UPPER_LIMIT; i++) {
            const elem = this.applyReplacementRules(i);
            result.push(elem);
            console.log(elem);
        }
        return result;
    };

    public applyReplacementRules(i: number): string {
        let result: string = "";

        this.RULES.forEach(rule => {
            if (rule.validate(i)) {
                result = result + rule.replacementString;
            }
        });

        if (this.remainedUnmodified(result)) {
            result = i.toString();
        }

        return result;
    };

    private remainedUnmodified(r: string): Boolean {
        return r.length === 0;
    }
}




