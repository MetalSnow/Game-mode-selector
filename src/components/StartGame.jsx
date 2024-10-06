import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const url =
  'https://api.giphy.com/v1/gifs/translate?api_key=vUx19Tz5ty6fixtvbm6FQyWpDiWACsTU&s=VALORANT';

const StartGame = ({ mode }) => {
  const [counter, setCounter] = useState(3);
  const [gifUrl, setGifUrl] = useState('');

  useEffect(() => {
    const key = setInterval(() => {
      setCounter((counter) => counter - 1);
      console.log(counter);
    }, 1000);

    if (counter == 0) clearInterval(key);

    return () => {
      clearInterval(key);
    };
  }, [counter]);

  useEffect(() => {
    fetch(url, { mode: 'cors' })
      .then((res) => res.json())
      .then((res) => {
        setGifUrl(res.data.images.original.url);
      });
  }, []);

  return (
    <div className="game-started">
      {counter === 0 ? (
        <>
          <h1>Game Started!</h1>
          {!gifUrl ? (
            <p>Loading...</p>
          ) : (
            <img src={gifUrl} alt="valorant-gif" />
          )}
        </>
      ) : (
        <>
          <h1>
            {mode} Will Start In {counter}
          </h1>
          <p>Loading...</p>
        </>
      )}
      <Link to="/">{counter == 0 ? 'Go Back' : 'Cancel'}</Link>
    </div>
  );
};

StartGame.propTypes = {
  mode: PropTypes.string.isRequired,
};

export default StartGame;
