class AccountController {
    constructor(corbaService) {
        this.corbaService = corbaService;
        this.accountInfo = null;
    }

    async getAccountInfo(userId) {
        try {
            this.accountInfo = await this.corbaService.fetchAccountInfo(userId);
            this.displayAccountInfo();
        } catch (error) {
            console.error("Error fetching account information:", error);
        }
    }

    displayAccountInfo() {
        if (this.accountInfo) {
            // Logic to update the UI with account information
            const accountElement = document.getElementById('account-info');
            accountElement.innerHTML = `
                <h2>Account Details</h2>
                <p>Account ID: ${this.accountInfo.id}</p>
                <p>Account Balance: ${this.accountInfo.balance}</p>
                <p>Account Holder: ${this.accountInfo.holderName}</p>
            `;
        } else {
            console.log("No account information available.");
        }
    }
}

export default AccountController;