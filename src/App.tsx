import { useState, useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import albumReducer from './state/albumReducer';
import apparelReducer from './state/apparelReducer';
import SiteHeader from './components/SiteHeader';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import AlbumShowPage from './pages/ShowPage/AlbumShowPage';
import ApparelShowPage from './pages/ShowPage/ApparelShowPage';
import ListPage from './pages/ListPage';
import ArtistPage from './pages/ArtistPage';
import ErrorMessage from './components/ErrorMessage';
import { ErrorMessageContext } from './context/ErrorMessageContext';
import { ScreenIsBigContextProvider } from './context/ScreenIsBigContext';
import { newApparelPages, tShirtPages, longsleevePages, hoodiePages } from './data/apparel';
import { newAlbumPages } from './data/albums';
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
        <ScreenIsBigContextProvider>
          <SiteHeader />
        </ScreenIsBigContextProvider>        
        <ErrorMessage errorMessage={errorMessage} setErrorMessage={setErrorMessage} />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/music' element={<ListPage pages={newAlbumPages} pageName='All Music' />} />
          <Route path='/music/new' element={<ListPage pages={newAlbumPages} pageName='New Music' />} />
          <Route path='/music/:albumId' element={<AlbumShowPage dispatch={albumDispatch}/>} />
          <Route path='/apparel/new' element={<ListPage pages={newApparelPages} pageName='New Apparel' />} />
          <Route path='/apparel/t-shirts' element={<ListPage pages={tShirtPages} pageName='T-Shirts' />} />
          <Route path='/apparel/longsleeves' element={<ListPage pages={longsleevePages} pageName='Longsleeves' />} />
          <Route path='/apparel/hoodies' element={<ListPage pages={hoodiePages} pageName='Hoodies' />} />
          <Route path='/apparel/:apparelId' element={<ApparelShowPage dispatch={apparelDispatch}/>} />
          <Route path='/artists/:name' element={<ArtistPage />} />
        </Routes>
      </ErrorMessageContext.Provider>
    </div>
  );
}

export default App;
