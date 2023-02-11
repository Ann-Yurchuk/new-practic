import { Nav, NavLinkComp } from './MainNav.styled';

const MainNav = () => {
  return (
    <Nav>
      <ul>
        <li>
          <NavLinkComp to="/"> Home</NavLinkComp>
        </li>
        <li>
          <NavLinkComp to="/users"> Users</NavLinkComp>
        </li>
        <li>
          <NavLinkComp to="/add">Add</NavLinkComp>
        </li>
      </ul>
    </Nav>
  );
};

export default MainNav;
