const Page = require('./page.js');

class LoginPage extends Page {
    get txtUsername() {
        return $('//input[@id="user-name"]')
    }
    
    get txtPassword() {
        return $('//input[@id="password"]')
    }

    get btnLogin() {
        return $('//input[@id="login-button"]')
    }
    
    get errorMessage() {
        return $('//div[@class="error-message-container error"]')
    }

    async login(username, password) {
        await this.txtUsername.setValue(username);
        await this.txtPassword.setValue(password);
        await this.btnLogin.click();
    }

    // async assertErrorMessage(expectedErrorMessage) {
    //     await expect(this.errorMsg).toHaveTextContaining(expectedErrorMessage);
    // }
    
    // async getErrorMessage() {
    //     return this.errorMsg.getText();
    // }

    open () {
        return super.open('/')
    }
}

module.exports = new LoginPage();
