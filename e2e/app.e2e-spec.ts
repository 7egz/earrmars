import { TryingPage } from './app.po';

describe('trying App', function() {
  let page: TryingPage;

  beforeEach(() => {
    page = new TryingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
