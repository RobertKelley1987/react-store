import { useState, useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import albumReducer from './state/albumReducer';
import apparelReducer from './state/apparelReducer';
import SiteHeader from './components/SiteHeader';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import AlbumShowPage from './pages/ShowPage/AlbumShowPage';
import ApparelShowPage from './pages/ShowPage/ApparelShowPage';
import NewMusicPage from './pages/NewMusicPage';
import ErrorMessage from './components/ErrorMessage';
import { ErrorMessageContext } from './context/ErrorMessageContext';
import './App.css';

const App = () => {
  const [albumState, albumDispatch] = useReducer(albumReducer, []);
  const [apparelState, apparelDispatch] = useReducer(apparelReducer, []);
  const [errorMessage, setErrorMessage] = useState('');

  const cart = [...albumState, ...apparelState];
  console.log(cart);

  return (
    <div className="app">
      <ErrorMessageContext.Provider value={{ errorMessage, setErrorMessage }}>
        <SiteHeader />
        <ErrorMessage errorMessage={errorMessage} setErrorMessage={setErrorMessage} />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/music/new' element={<NewMusicPage />} />
          <Route path='/music/:albumId' element={<AlbumShowPage dispatch={albumDispatch}/>} />
          <Route path='/apparel/:apparelId' element={<ApparelShowPage dispatch={apparelDispatch}/>} />
        </Routes>
      </ErrorMessageContext.Provider>
    </div>
  );
}

export default App;
