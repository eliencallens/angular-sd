import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTodoForm2Title() {
    return element(by.css('app-todo-form2 h3')).getText();
  }

  getTodoListTitle() {
    return element(by.css('app-todo-list h1')).getText();
  }
}
