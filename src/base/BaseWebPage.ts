import { Locator, Page } from '@playwright/test';
import type { HttpMethod } from './httpMethod.js';

export default class BaseWebPage {
  public readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  public locator(locator: string): Locator {
    return this.page.locator(locator);
  }

  public async waitForDomContentLoaded() {
    await this.page.waitForLoadState('domcontentloaded');
  }

  public async click(locator: string) {
    await this.locator(locator).waitFor(); // wait for {state: 'visible'}
    await this.locator(locator).click();
  }

  public async fill(inputLocator: string, text: string) {
    await this.locator(inputLocator).waitFor();
    await this.locator(inputLocator).fill(text);
  }

  public async waitForResponse({
    url,
    method,
    statusCode,
  }: {
    url: RegExp;
    method: HttpMethod | undefined;
    statusCode: number | undefined;
  }) {
    return await this.page.waitForResponse(response => {
      let result = url.test(response.url());
      if (method) {
        result = result && response.request().method() === method;
      }
      if (statusCode) {
        result = result && response.status() === statusCode;
      }
      return result;
    });
  }

  public async waitFor200StatusCode({
    url,
    method,
  }: {
    url: RegExp;
    method: HttpMethod | undefined;
  }) {
    return await this.waitForResponse({ url, method, statusCode: 200 });
  }
}
