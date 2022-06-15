const { chromium, firefox, webkit } = require('playwright');

(async () => {
  const tests = [chromium, firefox, webkit].reduce(newTest, []);
  await Promise.allSettled(tests);
  console.log('Browsers tests finished!');
})();

function newTest(acc, driver) {
  acc.push(logPageTitle(driver));
  return acc;
}

async function logPageTitle(driver) {
  const browser = await driver.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('http://qatools.ro');

  const titleElement = await page.$('h1');
  const titleText = await titleElement.textContent();
  console.log(`${driver.name()}: Page title: ${titleText}`);

  await browser.close();
}
