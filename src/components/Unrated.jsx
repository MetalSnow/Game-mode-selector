import { useNavigate } from 'react-router-dom';
import AgentSelecion from './AgentSelection';

const Unrated = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Unrated Mode</h1>
      <p>Choose Your Agent!</p>
      <AgentSelecion />
      <button onClick={() => navigate('/lobby/startgame')}>Start!</button>
    </div>
  );
};

export default Unrated;
