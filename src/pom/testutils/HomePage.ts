import BaseWebPage from 'src/base/BaseWebPage.js';

export default class HomePage extends BaseWebPage {
  public readonly URL = 'https://testutils.com';

  public navigate() {
    this.page.goto(this.URL);
  }
}
