const Page = require('./page.js')

class CheckoutCompletePage extends Page {
    
    
    get btnBackToHome() {
        return $('//button[@id="back-to-products"]')
    }

    open () {
        return super.open('');
    }
}


module.exports = new CheckoutCompletePage();