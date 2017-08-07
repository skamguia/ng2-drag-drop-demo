import { Ng2dragdropPage } from './app.po';

describe('ng2dragdrop App', () => {
  let page: Ng2dragdropPage;

  beforeEach(() => {
    page = new Ng2dragdropPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
