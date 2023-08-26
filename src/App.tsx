import { useState, useReducer, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import cartReducer from './state/cartReducer';
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
import { newApparel, tShirts, longsleeves, hoodies } from './data/apparel';
import { newAlbumPages } from './data/albums';
import ApparelPage from './pages/ApparelPage';
import ProductTypePage from './pages/ProductTypePage';
import { ApparelProduct, MusicProduct, AccessoryProduct } from './types';
import './App.css';

const App = () => {
  const [state, dispatch] = useReducer(cartReducer, []);
  const [errorMessage, setErrorMessage] = useState('');
  const [apparelTypes, setApparelTypes] = useState<ApparelProduct[] | []>([]);

  const cart = [...state];
  console.log(cart);

  return (
    <div className="app">
      <ErrorMessageContext.Provider value={{ errorMessage, setErrorMessage }}>
        <ScreenIsBigContextProvider>
          <SiteHeader />
        </ScreenIsBigContextProvider>        
        <ErrorMessage errorMessage={errorMessage} setErrorMessage={setErrorMessage} />
        <Routes>
          <Route path='/' element={<HomePage setApparelTypes={setApparelTypes} />} />
          <Route path='/cart' element={<CartPage cart={state} dispatch={dispatch} />} />
          {/* <Route path='/music' element={<ListPage pages={newAlbumPages} />} />
          <Route path='/music/new' element={<ListPage pages={newAlbumPages} />} /> */}
          <Route path='/music/:albumId' element={<AlbumShowPage dispatch={dispatch}/>} />
          <Route path='/apparel/new' element={
            <ApparelPage 
              items={newApparel} 
              pageName="New Merch" 
              apparelTypes={apparelTypes} 
              setApparelTypes={setApparelTypes}
            />
          } />
          <Route path='/apparel/t-shirts' element={<ProductTypePage items={tShirts} pageName="T-Shirts" />} />
          <Route path='/apparel/longsleeves' element={<ProductTypePage items={longsleeves} pageName="Longsleeves" />} />
          <Route path='/apparel/hoodies' element={<ProductTypePage items={hoodies} pageName="Hoodies" />} />
          <Route path='/apparel/:apparelId' element={<ApparelShowPage dispatch={dispatch}/>} />
          <Route path='/artists/:name' element={<ArtistPage />} />
        </Routes>
      </ErrorMessageContext.Provider>
    </div>
  );
}

export default App;
