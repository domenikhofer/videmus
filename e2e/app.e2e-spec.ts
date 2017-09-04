import { VidemusPage } from './app.po';

describe('videmus App', () => {
  let page: VidemusPage;

  beforeEach(() => {
    page = new VidemusPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
