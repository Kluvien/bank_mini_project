export class LoginController {
    constructor(corbaService) {
        this.corbaService = corbaService;
        this.username = '';
        this.password = '';
    }

    setUsername(username) {
        this.username = username;
    }

    setPassword(password) {
        this.password = password;
    }

    async login() {
        try {
            const response = await this.corbaService.authenticate(this.username, this.password);
            if (response.success) {
                // Handle successful login (e.g., redirect to account page)
                window.location.href = 'views/account.html';
            } else {
                // Handle login failure (e.g., show error message)
                alert('Login failed: ' + response.message);
            }
        } catch (error) {
            console.error('Login error:', error);
            alert('An error occurred during login. Please try again.');
        }
    }
}