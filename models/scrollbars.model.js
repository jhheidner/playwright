class ScrollbarsPage {
    constructor (page) {
        this.page = page
        this.scrollbarsUrl = page.goto("/scrollbars")
        this.hidingButton = page.locator('#hidingButton')
    }

    async navigateToScrollbars(){
        await this.scrollbarsUrl
    }

    async clickHidingButton(){
        await this.hidingButton.click()
    }
}

module.exports = {ScrollbarsPage}