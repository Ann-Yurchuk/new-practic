import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavHeaderLink = styled(NavLink)`
  &.active {
    color: red;
  }
`;

export const NavBar = () => {
  <nav>
    <ul>
      <li>
        <NavHeaderLink to="/">Home</NavHeaderLink>
      </li>
      <li>
        <NavHeaderLink to="/add">Add contact</NavHeaderLink>
      </li>
    </ul>
  </nav>;
};
