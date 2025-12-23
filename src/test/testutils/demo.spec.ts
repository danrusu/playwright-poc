import { expect } from '@playwright/test';
import test from 'src/fixtures/testutils/testutils-test.js';

import { repeat } from 'src/utils/arrayUtil.js';
import env, { ENV_VAR_NOT_SET } from '../../base/env.js';

// correct JSON import
import packageJson from '../../../package.json' with { type: 'json' };

const REPEAT_COUNT = 1;

test.describe('Demo test suite 1', () => {
  test('env demo test', async () => {
    console.log(env);
    expect(env.NAME).toBe('TEST_ENVIRONMENT');
    expect(env.URL).toBe(ENV_VAR_NOT_SET);

    console.log(`package.json name: ${packageJson.name}`);
  });

  repeat(REPEAT_COUNT, index => {
    test(`demo test ${index}`, async ({ homePage }) => {
      await test.step('home page navigation', async () => {
        homePage.navigate();
        await homePage.waitForDomContentLoaded();
        homePage.page.waitForURL(homePage.URL);
      });
    });
  });
});
