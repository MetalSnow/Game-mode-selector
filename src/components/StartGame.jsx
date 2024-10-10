import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import useGifUrl from '../hooks/useGifUrl';

const StartGame = ({ mode }) => {
  const { gifUrl, counter, error } = useGifUrl();

  if (error && counter === 0) return <p>A network error was encountered</p>;

  return (
    <div className="game-started">
      {counter === 0 ? (
        <>
          <h1>Game Started!</h1>
          <img src={gifUrl} alt="valorant-gif" />
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
