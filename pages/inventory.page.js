const Page = require('./page.js')

class InventoryPage extends Page {
    get btnAddToCart() {
        return $('//button[@id="add-to-cart-sauce-labs-backpack"]')
    }

    get btnCart() {
        return $('//a[@class="shopping_cart_link"]')
    }

    open () {
        return super.open('');
    }
}


module.exports = new InventoryPage();