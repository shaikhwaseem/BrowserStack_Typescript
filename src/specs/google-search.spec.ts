import { expect } from 'chai'
import googleSearchPage from '../pages/google-search-page'

describe('Google search feature', function() {
  this.timeout(20000);

  it('Search for WebdriverIO', async function() {
    await googleSearchPage.open();
    await googleSearchPage.search('WebdriverIO');
    expect(await googleSearchPage.getAllLinksText())
        .includes('Selenium WebDriver', 'Failed to search WebdriverIO');
    await googleSearchPage.close();
  })
});
