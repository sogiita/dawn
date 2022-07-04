const CONFIG = new Config({
  crypto: {
    coin: 'ETH',
    currency: 'USD',
    refreshIn: 10
  },
  temperature: {
    location: 'London',
    scale: 'C'
  },
  clock: 'h:i p',
  search: {
    engines: {
      g: ['https://google.com/search?q=', 'Google'],
      i: ['https://ixquick.com/do/search?q=', 'Ixquick'],
      d: ['https://duckduckgo.com/html?q=', 'DuckDuckGo'],
      y: ['https://youtube.com/results?search_query=', 'Youtube'],
      w: ['https://en.wikipedia.org/w/index.php?search=', 'Wikipedia']
    }
  },
  disabled: ['todo-list'] // crypto-rate 
  tabs: [
    {
      name: 'boards',
      background_url: 'src/img/banners/bg-1.png',
      categories: [{
        name: 'links',
        links: [
          {
            url: 'https://account.protonmail.com/',
            name: 'proton'
          },
          {
            name: 'heavens above',
            url: 'https://heavens-above.com/',
          },
          {
            name: 'github',
            url: 'https://github.com/',
          },
          {
            name: 'nix',
            url: 'https://www.reddit.com/r/unixporn/',
          },
          {
            name: '/w/',
            url: 'https://boards.4channel.org/w/catalog',
          }
        ]
      },
      {
        name: 'ffxiv',
        links: [
          {
            name: 'mogstation',
            url: 'https://secure.square-enix.com/oauth/oa/oauthlogin?response_type=code&redirect_uri=https%3A%2F%2Fsecure.square-enix.com%2Faccount%2Fapp%2Fsvc%2Ftop%3Frequest%3Dmogstation&client_id=ffxiv_mog&alar=1&lang=en-us&facflg=1'
          },
          {
            name: 'lodestone',
            url: 'https://na.finalfantasyxiv.com/lodestone/my/'
          }
        ]
      },
      {
        name: '/a/',
        links: [
          {
            name: '/g/',
            url: 'https://4chan.org/g/',
          },
          {
            name: 'mangadex',
            url: 'https://mangadex.org/follows'
          },
          {
            name: 'mangalife',
            url: 'https://manga4life.com/'
          },
          {
            name: 'jump',
            url: 'https://www.viz.com/shonenjump'
          }
        ]
      }