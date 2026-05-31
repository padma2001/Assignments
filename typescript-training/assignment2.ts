function customerdetails(
    customername: "radha",
    creditscore:670,
    income:55000,
    isemployed:Boolean,
    debittoincomeratio:40
): void{
    console.log("Loan approved  for customer:" + customername);
    if(creditscore>750) {
        console.log("Loan is approved for customer.");
    }else if (creditscore > 650) {
        if(income>=50000)
            if(isemployed){
                if(debittoincomeratio<40.0){
                    console.log("loan approved for the customer");
                }else{
                        console.log("Loan denied due to high in the debitinraio high");
                    }
                    }else{
                        console.log("Loan Dnied due to unemployed");

                    }else{
                        console.log("loan denied due to less credit score");
                    }
                }
            }
    
