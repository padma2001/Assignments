function customerdetails(
    customername: string,
    creditscore: number,
    income: number,
    isemployed: boolean,
    debittoincomeratio: number
): void {
    console.log("Loan application for customer: " + customername);

    if (creditscore > 750) {
        console.log("Loan is approved for customer.");
    } else if (creditscore > 650) {
        if (income >= 50000) {
            if (isemployed) {
                if (debittoincomeratio < 40.0) {
                    console.log("Loan approved for the customer");
                } else {
                    console.log("Loan denied due to high debt-to-income ratio");
                }
            } else {
                console.log("Loan denied due to unemployment");
            }
        } else {
            console.log("Loan denied due to low income");
        }
    } else {
        console.log("Loan denied due to low credit score");
    }
}
customerdetails(
    "Radha",   // customerName
    690,          // creditScore
    55000.0,      // income
    true,         // isEmployed
    30.0          // debtToIncomeRatio
);
