const Page = require('./page.js')

class CheckoutStepOnePage extends Page {
    get txtFirstName() {
        return $('//input[@id="first-name"]')
    }

    get txtLastName() {
        return $('//input[@id="last-name"]')
    }

    get txtPostalCode() {
        return $('//input[@id="postal-code"]')
    }

    get btnContinue() {
        return $('//input[@id="continue"]')
    }

    async checkoutData(firstName, lastName, postalCode) {
        await this.txtFirstName.setValue(firstName);
        await this.txtLastName.setValue(lastName);
        await this.txtPostalCode.setValue(postalCode);
        await this.btnContinue.click();
    }

    open () {
        return super.open('');
    }
}


module.exports = new CheckoutStepOnePage();