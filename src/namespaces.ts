namespace studentCalc {
    // interfaces, classes, functions and variables

    export function annualFee(feeAmount: number, term: number) {
        return feeAmount * term;
    }
}

let totalFee = studentCalc.annualFee(12, 12);


// external module

export interface Employee {

}
