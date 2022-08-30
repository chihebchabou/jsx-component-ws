import './App.css';
import { Fragment } from 'react';
import Navbar from './components/layout/Navbar';
import CategoryList from './components/categories/CategoryList';

function App() {
  return (
    <Fragment>
      <Navbar />
      <CategoryList />
    </Fragment>
  );
}

export default App;
