const Page = require('./page.js')

class CheckoutStepTwoPage extends Page {

    get btnFinish() {
        return $('//button[@id="finish"]')
    }

    open () {
        return super.open('');
    }
}


module.exports = new CheckoutStepTwoPage();