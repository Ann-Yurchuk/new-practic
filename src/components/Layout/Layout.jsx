import MainNav from 'components/MainNav/MainNav';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <header>
        <MainNav />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
