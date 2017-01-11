import { RappiPage } from './app.po';

describe('rappi App', function() {
  let page: RappiPage;

  beforeEach(() => {
    page = new RappiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
