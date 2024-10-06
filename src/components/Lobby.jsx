import { useNavigate, useParams } from 'react-router-dom';
import Unrated from './Unrated';
import Competetive from './Competetive';
import StartGame from './StartGame';
import { useState } from 'react';
import ErrorPage from './ErrorPage';

const Lobby = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const [modeName, setModeName] = useState(name);

  const componentsMap = {
    startgame: <StartGame mode={modeName} />,
    unrated: <Unrated />,
    competetive: <Competetive />,
    deathmatch: <StartGame mode={modeName} />,
  };

  const handleNavigate = (newName) => {
    navigate(`/lobby/${newName}`);

    const Capitalized = newName.charAt(0).toUpperCase() + newName.slice(1);
    setModeName(Capitalized);
  };

  return (
    <div>
      {name === 'mode' ? (
        <>
          <h2>Choose Game Mode</h2>

          <button onClick={() => handleNavigate('unrated')}>Unrated</button>
          <button onClick={() => handleNavigate('competetive')}>
            Competetive
          </button>
          <button onClick={() => handleNavigate('deathmatch')}>
            Death Match
          </button>
        </>
      ) : componentsMap[name] ? (
        componentsMap[name]
      ) : (
        <ErrorPage />
      )}
    </div>
  );
};

export default Lobby;
