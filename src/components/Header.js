import {useEffect} from 'react'
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {setUserData} from '../utils/UserSlice';
import { onAuthStateChanged } from "firebase/auth";
import { toggleGpt } from '../utils/GptSlice';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userDetails = useSelector((store) => store.user.currentUser);
  const gptSearchEnabled = useSelector((store) => store.gptSearch.gptSearch);

  const signOutUser = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate('/');
    }).catch((error) => {
      // An error happened.
      navigate('/error');
    });
  }

  const searchGPT = () => {
    if (!gptSearchEnabled) {
      navigate('/gpt-search');
    } else {
      navigate('/browse');
    }

    dispatch(toggleGpt());
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUserData({uid: user.uid, displayName: user.displayName, email: user.email}));
        if (gptSearchEnabled) {
          navigate('/gpt-search');
        } else {
          navigate('/browse');
        }
        // ...
      } else {
        // User is signed out
        dispatch(setUserData(null));
        navigate('/');
      }
    });
  }, []);

  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between'>
      <img
        className="w-44 h-20"
        alt='logo'
        src='https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-12-03/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
      />
      {!!userDetails && (<div className="flex justify-center items-center gap-2">
        <button
          className="text-white bg-purple-700 p-1 rounded-md h-9 pl-4 pr-4"
          onClick={() => searchGPT()}
        >
          {!gptSearchEnabled ? 'GPT Search' : 'Homepage'}
        </button>
        <img
          className="w-10 h-10 my-5"
          alt="profile"
          src='https://occ-0-2611-3663.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABQU6Ps9xMtMWyiVkzOxcPrWsZYOphQ2NrBy7DhOfUuTSFbEA4lCfZJSoa6wZGsQ6GjRiD45ZzZ4HluANB2JM-KsToWKtNIw.png?r=5a9'
        />
        <button className="text-white" onClick={() => signOutUser()}>(Sign out)</button>
      </div>)}
    </div>
  )
}

export default Header;
