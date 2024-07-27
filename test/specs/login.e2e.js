const CartPages = require('../../pages/cart.pages.js');
const CheckoutStepOnePage = require('../../pages/checkout-step-one.page.js');
const CheckoutStepTwoPage = require('../../pages/checkout-step-two.page.js');
const InventoryPage = require('../../pages/inventory.page.js');
const LoginPage = require('../../pages/login.page.js');
const SecurePage = require('../../pages/secure.page.js');
const { expect } = require('@wdio/globals')

describe('Login Test Case', () => { 
    it('should login with valid credential', async () => {
        await LoginPage.open()

        await LoginPage.login('standard_user','secret_sauce')
        await expect(SecurePage.logo).toBeExisting()
    })

    it('should login with invalid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('standard_user', 'worngpassword')
        await expect(SecurePage.wrongPassword).toHaveText('Epic sadface: Username and password do not match any user in this service')
    })
})


describe('Add to Cart Test Case', () => { 
    it('should add to cart', async () => {
        await LoginPage.open()

        await LoginPage.login('standard_user','secret_sauce')
        await expect(SecurePage.logo).toBeExisting()

        await InventoryPage.btnAddToCart.click()
        await InventoryPage.btnCart.click()

        await CartPages.btnCheckout.click()

        await CheckoutStepOnePage.checkoutData('Marcelinus','Sigid', '55584')
        
        await CheckoutStepTwoPage.btnFinish.click()

        await expect(SecurePage.iconChecklist).toBeDisplayed()
        await expect(SecurePage.completeOrder).toHaveText('Thank you for your order!')



    })
})