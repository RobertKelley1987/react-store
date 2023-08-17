import { Routes, Route } from 'react-router-dom';
import SiteHeader from './components/SiteHeader';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import ShowPage from './pages/ShowPage';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <SiteHeader />
        <div className="app-container">
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/cart' element={<CartPage />} />
            <Route path='/collections/:collection/products/:productId' element={<ShowPage />} />
          </Routes>
        </div>
    </div>
  );
}

export default App;
