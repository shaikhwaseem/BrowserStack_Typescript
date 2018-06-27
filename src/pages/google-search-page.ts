import * as webdriverio from 'webdriverio';

const options: any = {
  host: 'hub-cloud.browserstack.com',
  port: 80,
  path: '/wd/hub',
  desiredCapabilities: {
    'browserstack.user': 'your browserstack api username',
    'browserstack.key': 'your browserstack api password',
    'browserstack.debug': true,
    'browserstack.video': true,
    'deprecationWarnings': false,
    resolution: '1920x1080',
    misMatchTolerance: 50,
    timeout: 2000000000,
    browserName: 'Chrome',
    folder: 'chrome',
    os: 'Windows',
    os_version: '10'
  },
  debug: true
};
const browser = webdriverio.remote(options);

class GoogleSearchPage {
  public async open() {
    await browser
        .init()
        .url('https://www.google.com/search?q=webdriver');
  }

  public async search(query: string) {
    await browser.waitForVisible('input[name=q]');
    browser.setValue('input[name=q]', query);
  }

  public async getAllLinksText() {
    await browser.waitForVisible('h3 > a', 10000);
    return await browser.getText('h3 > a');
  }

  public async close() {
    await browser.end();
  }
}

const googleSearchPage = new GoogleSearchPage();
export default googleSearchPage
