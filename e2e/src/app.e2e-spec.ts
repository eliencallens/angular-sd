import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display form title', () => {
    page.navigateTo();
    expect(page.getTodoForm2Title()).toEqual('New todo');
  });

  it('should display list title', () => {
    page.navigateTo();
    expect(page.getTodoListTitle()).toEqual('Todos');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
