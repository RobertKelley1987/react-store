import { useState, useReducer, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import cartReducer from './state/cartReducer';
import SiteHeader from './components/SiteHeader';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import AlbumShowPage from './pages/ShowPage/AlbumShowPage';
import ApparelShowPage from './pages/ShowPage/ApparelShowPage';
import ArtistPage from './pages/ArtistPage';
import ErrorMessage from './components/ErrorMessage';
import { ErrorMessageContext } from './context/ErrorMessageContext';
import { ScreenIsBigContextProvider } from './context/ScreenIsBigContext';
import { newApparel, apparelCategories } from './data/apparel';
import { newAlbums } from './data/albums';
import CategoryPage from './pages/CategoryPage';
import ProductTypePage from './pages/ProductTypePage';
import { Apparel, ApparelProduct, Album, MusicProduct, Accessory, AccessoryProduct } from './types';
import './App.css';

const MUSIC_TYPES: MusicProduct[] = ['LP', '2XLP', '12"', 'CD', '2XCD', 'Tape'];
const APPAREL_TYPES: ApparelProduct[] = ['T-Shirt', 'Longsleeve', 'Hoodie'];

const App = () => {
  const [state, dispatch] = useReducer(cartReducer, []);
  const [errorMessage, setErrorMessage] = useState('');
  const [apparelTypes, setApparelTypes] = useState<ApparelProduct[] | []>([]);
  const [musicTypes, setMusicTypes] = useState<MusicProduct[] | []>(['LP']);

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
          <Route path='/music' element={
            <CategoryPage 
              items={newAlbums}
              allTypes={MUSIC_TYPES}
              pageName="New Music"
              selectedTypes={musicTypes}
              setSelectedTypes={setMusicTypes}
            />
          } />
          <Route path='/music/new' element={
            <CategoryPage 
              items={newAlbums}
              allTypes={MUSIC_TYPES}
              pageName="New Music"
              selectedTypes={musicTypes}
              setSelectedTypes={setMusicTypes}
            />
          } />
          <Route path='/music/products/:albumId' element={<AlbumShowPage dispatch={dispatch}/>} />
          <Route path='/apparel/new' element={
            <CategoryPage<Apparel, ApparelProduct> 
              items={newApparel} 
              allTypes={APPAREL_TYPES}
              pageName="New Merch" 
              selectedTypes={apparelTypes} 
              setSelectedTypes={setApparelTypes}
            />
          } />
          <Route path='/apparel/:productType' element={<ProductTypePage items={apparelCategories} pageName="T-Shirts" />} />
          <Route path='/apparel/products/:apparelId' element={<ApparelShowPage dispatch={dispatch}/>} />
          <Route path='/artists/:name' element={<ArtistPage />} />
        </Routes>
      </ErrorMessageContext.Provider>
    </div>
  );
}

export default App;
