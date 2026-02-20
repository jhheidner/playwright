const { test } = require ('@playwright/test')
const { ClassAttributePage } = require ('../models/class-attribute.model')

test ('Clicking Blue Button', async ({ page }) =>{
    // await page.pause()
    //add a listener before the test
    // Whenever a dialog box pops up this will grab that dialog message and then dismiss
    page.on('dialog', async dialog =>{
        console.log(dialog.message());
        await dialog.dismiss()
    })


    const classAttributepage = new ClassAttributePage (page)
    await classAttributepage.navigateToclassAttributePage()
    await classAttributepage.clickBlueButton()
})