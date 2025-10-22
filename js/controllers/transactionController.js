class TransactionController {
    constructor(corbaService) {
        this.corbaService = corbaService;
        this.transactions = [];
    }

    async fetchTransactions(userId) {
        try {
            this.transactions = await this.corbaService.getTransactions(userId);
            this.displayTransactions();
        } catch (error) {
            console.error("Error fetching transactions:", error);
        }
    }

    displayTransactions() {
        const transactionList = document.getElementById('transaction-list');
        transactionList.innerHTML = '';

        this.transactions.forEach(transaction => {
            const listItem = document.createElement('li');
            listItem.textContent = `${transaction.date}: ${transaction.amount} - ${transaction.description}`;
            transactionList.appendChild(listItem);
        });
    }

    async processTransaction(transactionData) {
        try {
            const response = await this.corbaService.processTransaction(transactionData);
            if (response.success) {
                alert('Transaction processed successfully!');
                this.fetchTransactions(transactionData.userId);
            } else {
                alert('Transaction failed: ' + response.message);
            }
        } catch (error) {
            console.error("Error processing transaction:", error);
        }
    }
}

export default TransactionController;