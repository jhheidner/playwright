const { test } = require ('@playwright/test');
const { TextInputPage } = require ('../models/textInput.model');

test ('Verify Text Changed on button', async ({ page }) => {
    const textInputPage = new TextInputPage (page);

    await textInputPage.navigateToTextInputPage();
    await textInputPage.clickNewButtonTextField ();
    await textInputPage.fillNewButtonTextField ('TestButtonChange');
    await textInputPage.clickNewButton();
    await textInputPage.expectButtonChange ("TestButtonChange");
});
