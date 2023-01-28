import { Routes, Route } from 'react-router-dom';
import { AddContactPages } from '../pages/AddContactPages';
import { Layout } from './Layout/Layout';
import { HomePage } from '../pages/HomePage';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/add" element={<AddContactPages />}/>
        </Route>
      </Routes>
    </>
  );
};
