import { ShotClockPage } from './app.po';

describe('shot-clock App', () => {
  let page: ShotClockPage;

  beforeEach(() => {
    page = new ShotClockPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
