class ClassAttributePage{
    constructor (page){
        this.page = page
        this.ClassAttributePageUrl = page.goto("/classattr")
        this.blueButton = page.locator(".btn-primary")
    }

    async navigateToclassAttributePage (){
        await this.ClassAttributePageUrl
    }

    async clickBlueButton (){
        await this.blueButton.click()
    }

}

module.exports = {ClassAttributePage}