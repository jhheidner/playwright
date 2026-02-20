const { expect } = require ('@playwright/test');

class TextInputPage {
    constructor (page){
        this.page = page;
        this.url = page.goto('/textinput')

        this.newButtonTextField = page.locator('#newButtonName')
        this.buttonToChange = page.getByRole('button', { name: 'Button That Should Change it\'' })
        this.updatedButton = page.locator('#updatingButton');

    }

    async navigateToTextInputPage(){
        await this.url
        
    }

    async clickNewButtonTextField (){
        await this.newButtonTextField.click();
    }

    async fillNewButtonTextField(buttontext) {
        await this.newButtonTextField.fill(buttontext)
    }

    async clickNewButton(){
        await this.buttonToChange.click();
    }

    async expectButtonChange (changedtext){
        await expect (this.updatedButton).toHaveText(changedtext);
    }
}

module.exports = {TextInputPage};