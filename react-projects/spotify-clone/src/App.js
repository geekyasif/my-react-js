import { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './Spotify';
import SpotifyWebApi from 'spotify-web-api-js'
import Player from './Player';

const spotify = new SpotifyWebApi()

function App() {

  const [token, setToken] = useState(null)

  useEffect(() => {
      const hash = getTokenFromUrl();
      window.location.hash = "";
      const _token = hash.access_token
      
      if(_token){
        setToken(_token)
        spotify.setAccessToken(_token)
        spotify.getMe().then( user => {
          console.log(user)
        })
      }
      console.log(_token)
  }, [])


  return (
    <div className="App">
      {
        token ? (
         
          <Player />

          // <h1>I'm Logged in</h1>

        ) : (

          <Login/>

        )
      }
    </div>
  );
}

export default App;
