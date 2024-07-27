const Page = require('./page.js')

class CartPage extends Page {
    get btnCheckout() {
        return $('//button[@id="checkout"]')
    }

    open () {
        return super.open('');
    }
}


module.exports = new CartPage();