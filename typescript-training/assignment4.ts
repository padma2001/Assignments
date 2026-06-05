        
        const transactions: number[] = [50000, -2000, 3000, -15000, -200, -300, 4000, -3000];

      
        let totalCredits: number = 0;
        let totalDebits: number = 0;
        let totalCreditAmount: number = 0;
        let totalDebitAmount: number = 0;
        let suspiciousTransactions: number = 0;

        for (const amount of transactions) {

            if (amount > 0) {
                
                totalCredits++;
                totalCreditAmount += amount;

               
                if (amount > 10000) {
                    console.log(`Suspicious credit transaction with Amount: ${amount}`);
                    suspiciousTransactions++;
                }

            } else {
                
                totalDebits++;
                totalDebitAmount -= amount; // convert to positive

               
                if (amount < -10000) {
                    console.log(`Suspicious debit transaction with Amount: ${amount}`);
                    suspiciousTransactions++;
                }
            }
        }

        
        const finalBalance: number = totalCreditAmount - totalDebitAmount;
        

        
      
  