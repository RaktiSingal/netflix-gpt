import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useNowPlayingMovies from '../hooks/useNowPlaying';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import { useSelector } from 'react-redux';
import GPTSearch from './GPTSearch';

const Browse = () => {
  const gptSearchEnabled = useSelector((store) => store.gptSearch.gptSearch);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header/>
      {!!gptSearchEnabled && <GPTSearch />}
      {!gptSearchEnabled && (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  )
}

export default Browse;