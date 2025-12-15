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
