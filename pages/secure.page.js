const Page = require('./page.js')

class SecurePage extends Page {
    get logo() {
        return $('//div[@class="app_logo"]')
    }
    
    get wrongPassword() {
        return $('//div[@class="error-message-container error"]')
    }

    get iconChecklist() {
        return $('//img[@alt="Pony Express"]')
    }
    
    get completeOrder() {
        return $('.complete-header')
    }
}

module.exports = new SecurePage()