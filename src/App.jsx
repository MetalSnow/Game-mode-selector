import './styles/App.css';
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <h1>Welcome To Valorant</h1>
      <p>5 vs 5 Shooter Game</p>
      <nav>
        <Link to="lobby">Start Game</Link>
      </nav>
    </div>
  );
};

export default App;
