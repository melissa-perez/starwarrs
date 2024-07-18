import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">a</Link>
        </li>
        <li>
          <Link to="/characters">b</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
