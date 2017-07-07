import { VSProjectPage } from './app.po';

describe('vsproject App', () => {
  let page: VSProjectPage;

  beforeEach(() => {
    page = new VSProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
