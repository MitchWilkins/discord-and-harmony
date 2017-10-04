import { DiscordAndHarmonyPage } from './app.po';

describe('discord-and-harmony App', () => {
  let page: DiscordAndHarmonyPage;

  beforeEach(() => {
    page = new DiscordAndHarmonyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
