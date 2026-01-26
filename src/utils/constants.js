export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhODE5NmNlMmY3NGU4NThmMjJmYjhmYWEyOTFjYmQxNSIsIm5iZiI6MTc2NTcyMTUyNi40NTUwMDAyLCJzdWIiOiI2OTNlYzViNjY1ZTczYzkzMDNhZWNkMWUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.ObW0r81GqUb12QW5g1bCBpvrsG4uHVHAOqQKNZ_3OoY'
  }
};

export const BACKGROUND_URL = 'https://assets.nflxext.com/ffe/siteui/vlv3/c81956f1-5750-454c-9b3c-7a4d990d3d06/web/IN-en-20251208-TRIFECTA-perspective_d69f5f82-9a35-45d7-a7b6-9af6e0643bf5_large.jpg';

export const NOW_PLAYING_URL = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';

export const POPULAR_URL = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';

export const TOP_RATED_URL = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';

export const UPCOMING_URL = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1';

export const VIDEO_URL = 'https://api.themoviedb.org/3/movie/movie_id/videos?language=en-US';

export const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

export const MovieCategories = [
  {
    title: 'Now playing',
    key: 'nowPlayingMovies'
  },
  {
    title: 'Top rated',
    key: 'topRatedMovies'
  },
  {
    title: 'Popular movies',
    key: 'popularMovies'
  },
  {
    title: 'Upcoming',
    key: 'upcomingMovies'
  }
]


export const AccordionsData = [
  {
    title: 'Accordion item 1',
    description: 'Accordion description 1'
  },
  {
    title: 'Accordion item 2',
    description: 'Accordion description 2'
  },
  {
    title: 'Accordion item 3',
    description: 'Accordion description 3'
  },
  {
    title: 'Accordion item 4',
    description: 'Accordion description 4'
  },
]

export const CommentsData = [
  {
    id: 1,
    title: 'Comment parent 1',
    replies: [
      {
        id: 2,
        title: 'Comment child 1'
      },
      {
        id: 3,
        title: 'Comment child 2',
        replies : [
          {
            id: 4,
            title: 'Comment child child 1'
          },
          {
            id: 4,
            title: 'Comment child child 2'
          }
        ]
      }
    ]
  },
  {
    id: 10,
    title: 'Comment parent 2'
  }
]

export const ImagesData = [
  "https://www.shutterstock.com/shutterstock/photos/2498792093/display_1500/stock-photo-chicken-biryani-in-a-wooden-bowl-on-a-white-background-2498792093.jpg",
  "https://www.shutterstock.com/shutterstock/photos/2234412247/display_1500/stock-photo-minsk-belarus-december-black-background-night-lots-of-hot-wings-or-strips-of-kfc-2234412247.jpg",
  "https://www.shutterstock.com/shutterstock/photos/2138389709/display_1500/stock-photo-ayutthaya-thailand-mar-mcdonald-s-restaurant-in-ayutthaya-thailand-mcdonald-s-is-an-2138389709.jpg",
  "https://www.shutterstock.com/shutterstock/photos/2630922431/display_1500/stock-photo-tasty-pizza-margarita-on-dark-background-2630922431.jpg",
  "https://www.shutterstock.com/shutterstock/photos/2628386007/display_1500/stock-photo-coffee-cup-and-coffee-beans-at-dark-table-top-view-image-with-copy-space-2628386007.jpg",
  "https://www.shutterstock.com/shutterstock/photos/2414223599/display_1500/stock-photo-a-plate-of-arabian-biriyani-2414223599.jpg",
  "https://www.shutterstock.com/shutterstock/photos/1298838106/display_1500/stock-photo-moscow-russia-january-burger-king-logo-on-crown-paper-burger-king-crown-on-wooden-table-1298838106.jpg",
  "https://www.shutterstock.com/shutterstock/photos/1932850382/display_1500/stock-photo-ghee-roast-dosa-south-indian-main-breakfast-item-which-is-beautifully-arranged-like-a-smile-face-1932850382.jpg",
  "https://www.shutterstock.com/shutterstock/photos/2456792081/display_1500/stock-photo-stir-fry-with-soba-noodles-meat-and-vegetables-on-dark-background-with-napkin-asian-fast-and-2456792081.jpg",
  "https://www.shutterstock.com/shutterstock/photos/1734132101/display_1500/stock-photo-singapore-mar-front-entrance-to-subway-restaurant-in-singapore-shopping-mall-1734132101.jpg"
];
