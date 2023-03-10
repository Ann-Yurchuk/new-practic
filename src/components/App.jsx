import { Routes, Route } from 'react-router-dom';
import  Layout  from './Layout/Layout';
import { HomePage } from 'pages/HomePage';
import  UsersPage  from 'pages/UserPage';
import { AddPage } from 'pages/AddPage';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/add" element={<AddPage />} />
        </Route>
      </Routes>
    </>
  );
};
