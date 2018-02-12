import { ButtonClickPage } from './app.po';

describe('button-click App', () => {
  let page: ButtonClickPage;

  beforeEach(() => {
    page = new ButtonClickPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
