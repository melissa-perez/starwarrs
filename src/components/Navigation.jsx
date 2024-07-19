import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav className={"nav"}>
      <ul>
        <li>
          <NavLink to="/">Films</NavLink>
        </li>
        <li>
          <NavLink to="/characters">Characters</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
