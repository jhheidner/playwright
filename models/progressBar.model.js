class ProgressBarPage {
    constructor (page){
        this.page = page;
        this.progressBarUrl = 'http://uitestingplayground.com/progressbar';
        this.startButton = page.locator('#startButton');
        this.stopButton = page.locator('#stopButton');
        this.progressBar = page.locator('#progressBar');

    }

    async navigateToProgressBarPage (){
        await this.page.goto(this.progressBarUrl);
    }

    async clickStartButton(){
        await this.startButton.click()
    }

    async clickStopButton(){
        await this.stopButton.click()
    }

    async progressBarPercent(){
       return await this.progressBar.innerText()
    }
}

// //loop version
//     async startAndStopAt(targetPercent) {
//     const timeoutMs = 15_000;
//     const startTime = Date.now();

//     await this.startButton.click();

//     while (true) {
//       const value = await this.progressBar.getAttribute('aria-valuenow');
//       const current = Number(value);

//       if (current >= targetPercent) break;

//       if (Date.now() - startTime > timeoutMs) {
//         throw new Error(`Did not reach ${targetPercent}%`);
//       }

//       await this.page.waitForTimeout(50);
//     }

//     await this.stopButton.click();
//   }
// }

// whatForFunction version as poll didn't work for this

// async startAndStopAt(targetPercent = 75) {
//   await this.startButton.click();

//   await this.page.waitForFunction(
//     (target) => {
//       const bar = document.querySelector('#progressBar');
//       return Number(bar.getAttribute('aria-valuenow')) >= target;
//     },
//     targetPercent,
//     { timeout: 30_000 }
//   );

//   await this.stopButton.click();
// }

// }

module.exports = { ProgressBarPage };