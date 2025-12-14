export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhODE5NmNlMmY3NGU4NThmMjJmYjhmYWEyOTFjYmQxNSIsIm5iZiI6MTc2NTcyMTUyNi40NTUwMDAyLCJzdWIiOiI2OTNlYzViNjY1ZTczYzkzMDNhZWNkMWUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.ObW0r81GqUb12QW5g1bCBpvrsG4uHVHAOqQKNZ_3OoY'
  }
};

export const BROWSE_URL = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';

export const VIDEO_URL = 'https://api.themoviedb.org/3/movie/movie_id/videos?language=en-US';
