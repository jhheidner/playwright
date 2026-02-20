const { expect } = require('@playwright/test');

class VisibilityPage {
  constructor(page) {
    this.page = page;

    this.visHeader = page.getByRole('heading', { name: 'Visibility' });
    this.visPageDescription = page.getByText('Checking if element is');
    this.textLine = page.getByText('An element may be removed');
    this.scenarioHeader = page.getByRole('heading', { name: 'Scenario' });
    this.playgroundHeader = page.getByRole('heading', { name: 'Playground' });
    this.hideButton = page.locator('#hideButton');
    this.removedButton = page.locator('#removedButton');
    this.zeroWidthButton = page.locator('#zeroWidthButton');
    this.overlappedButton = page.locator('#overlappedButton');
    this.opacityButton = page.locator('#transparentButton');
    this.visibilityHiddenButton = page.locator('#invisibleButton');
    this.displayNoneButton = page.locator('#notdisplayedButton');
    this.offscreenButton = page.locator('#offscreenButton');


  }

  async navigateToVisibilityPage() {
    await this.page.goto('http://uitestingplayground.com/visibility');
  }

  async expectVisibilityHeaderVisible() {
    await expect(this.visHeader).toBeVisible();
  }

  async expectVisibilityLineText() {
    await expect(this.textLine).toBeVisible();

  }

  async expectScenarioHeaderVisible() {
    await expect(this.scenarioHeader).toBeVisible();
  }

  async expectPlaygroundHeaderVisible() {
    await expect(this.playgroundHeader).toBeVisible();
  }

  async clickHideButton() {
    await this.hideButton.click();
  }

  async expectButtonsHidden(){
    await expect (this.removedButton).toHaveCount(0);
    await expect (this.visibilityHiddenButton).toBeHidden();
    await expect (this.displayNoneButton).toBeHidden();
    await expect (this.opacityButton).toHaveCSS ('opacity', '0');

    // Assert the button exists and is visible
    // await expect (this.overlappedButton).toBeVisible();

    // Attempt click and assert it throws because it's overlapped
//     await expect(
//   this.overlappedButton.click({ trial: true })
// ).rejects.toThrow(/element is obscured/);

//     await expect (this.zeroWidthButton).toBeHidden();

    // Special Case

    // await expect(this.offscreenButton).toBeInViewport({ ratio: 0 });

  }

}

module.exports = { VisibilityPage };
