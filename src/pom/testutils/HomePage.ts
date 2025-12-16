import WebPage from 'src/base/BaseWebPage.js';

export default class HomePage extends WebPage {
  public readonly URL = 'https://testutils.com';

  public navigate() {
    this.page.goto(this.URL);
  }
}
