import { test } from '@playwright/test';
import HomePage from 'src/pom/testutils/HomePage.js';

type TestUtilsPages = {
  homePage: HomePage;
};

const demoTest = test.extend<TestUtilsPages>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
});

export default demoTest;
