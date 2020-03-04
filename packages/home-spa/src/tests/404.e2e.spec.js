const puppeteerChrome = require('puppeteer');
const path = require('path');

jest.dontMock('fs');

/**
 *  This code could be useful for e2e tests
 */
test('404 e2e', async () => {
  // For Headless
  const browser = await puppeteerChrome.launch();
  // Use the below code if you want to see what is happening in the browser
  // const browser = await puppeteerChrome.launch({
  //   headless: false,
  //   slowMo: 10,
  //   timeout: 10000,
  //   args: ['--window-size=1580,800'],
  // });
  const page = await browser.newPage();
  const app = 'file:///' + path.resolve(__dirname, '../../dist/404.html');
  await page.goto(app);
  await page.click('body > div.banner > a');
  await browser.close();
});