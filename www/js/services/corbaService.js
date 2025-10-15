class CorbaService {
    constructor() {
        this.baseUrl = 'http://your-corba-backend-url'; // Replace with your CORBA backend URL
    }

    async makeRequest(endpoint, method = 'GET', data = null) {
        const options = {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            }
        };

        if (data) {
            options.body = JSON.stringify(data);
        }

        try {
            const response = await fetch(`${this.baseUrl}/${endpoint}`, options);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error('Error making request:', error);
            throw error;
        }
    }

    async login(username, password) {
        return await this.makeRequest('login', 'POST', { username, password });
    }

    async getAccountDetails(accountId) {
        return await this.makeRequest(`accounts/${accountId}`);
    }

    async getTransactionHistory(accountId) {
        return await this.makeRequest(`accounts/${accountId}/transactions`);
    }

    async initiateTransaction(transactionData) {
        return await this.makeRequest('transactions', 'POST', transactionData);
    }
}

export default new CorbaService();