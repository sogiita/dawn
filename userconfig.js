const CONFIG = new Config({
  crypto: {
    coin: 'ETH',
    currency: 'USD',
    refreshIn: 10
  },
  temperature: {
    location: 'Brent, London',
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
});
  tabs: [
    {
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
            name: '/v/',
            url: 'https://4chan.org/v/',
            icon: 'device-gamepad',
            icon_color: '#8b647b'
          },
          {
            name: 'nix',
            url: 'https://www.reddit.com/r/unixporn/',
          },
          {
             name: '/w/',
            url: 'https://boards.4channel.org/w/catalog'
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
            name: 'nyaa',
            url: 'https://nyaa.si/',
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
      ]
    },
    {
      background_url: 'src/img/banners/bg-1.png',
      categories: [
        {
          name: 'music & video',
          links: [
            {
              url: 'https://soundcloud.com/',
              icon: 'brand-soundcloud',
              icon_color: '#c57750'
            },
            {
              url: 'https://www.youtube.com/feed/subscriptions',
              icon: 'brand-youtube',
              icon_color: '#996767'
            },
            {
              url: 'https://r-a-d.io/',
              icon: 'radio'
            },
          ]
        },
        {
          name: 'socials',
          links: [
            {
              url: 'https://www.instagram.com/',
              icon: 'brand-instagram',
              icon_color: 'A8D9EF'
            },
            {
             url: 'https://www.instagram.com/lollysdogwalking/',
              icon: 'dog-bowl',
              icon_color: 'A8D9EF'
            }
          ]
        }
      ]
    },
    {
      background_url: 'src/img/banners/bg-1.png',
      categories: [
        {
          name: 'misc',
          links: [
            {
              name: 'startpages',
              url: 'https://www.reddit.com/r/startpages/'
            },
            {
              name: 'rainmeter',
              url: 'https://www.reddit.com/r/Rainmeter/'
            },
            {
              name: 'deviantart',
              url: 'https://www.deviantart.com/',
            }
          ]
        },
        {
          name: 'eorzea',
          links: [
            {
              name: 'eorzeacollection',
              url: 'https://ffxiv.eorzeacollection.com/glamours',
            }
          ]
        },
        {
          name: 'collections',
          links: [
            {
              name: 'mfc',
              url: 'https://myfigurecollection.net/',
            },
            {
              name: 'mal',
              url: 'https://myanimelist.net/',
            }
          ]
        }
      ]
    }]
});
