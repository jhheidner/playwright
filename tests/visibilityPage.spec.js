const { test } = require ('@playwright/test');
const { VisibilityPage } = require ('../models/visibilityPage.model');

test ('Verify User lands on Visibility Page', async ({ page })=>{
    const visibilityPage = new VisibilityPage (page);

    await visibilityPage.navigateToVisibilityPage();
    await visibilityPage.expectVisibilityHeaderVisible();
    await visibilityPage.expectPlaygroundHeaderVisible();
    await visibilityPage.expectScenarioHeaderVisible();
    await visibilityPage.expectVisibilityLineText();
})

test ('Verify Hide button fuctions', async ({ page })=>{
    const visibilityPage = new VisibilityPage (page);

    await visibilityPage.navigateToVisibilityPage();
    await visibilityPage.clickHideButton();
    await visibilityPage.expectButtonsHidden();
})