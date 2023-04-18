export interface IRule {
    validate(n: number): boolean;
    get replacementString(): string;
}

export class DivisionRule implements IRule {
    divisor: number;
    word: string;

    constructor(divisor: number, word: string) {
        this.divisor = divisor;
        this.word = word;
    }

    public validate(dividend: number): boolean {
        return this.isDivisible(dividend);
    }

    public get replacementString(): string {
        return this.word;
    }

    private isDivisible(dividend: number): boolean {
        return dividend % this.divisor == 0;
    }
}
