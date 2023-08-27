import { useState, useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import cartReducer from './state/cartReducer';
import SiteHeader from './components/SiteHeader';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import ShowPage from './pages/ShowPage';
import ArtistPage from './pages/ArtistPage';
import ErrorMessage from './components/ErrorMessage';
import { ErrorMessageContext } from './context/ErrorMessageContext';
import { ScreenIsBigContextProvider } from './context/ScreenIsBigContext';
import { newApparel, apparelCategories } from './data/apparel';
import { newAlbums } from './data/albums';
import CategoryPage from './pages/CategoryPage';
import ProductTypePage from './pages/ProductTypePage';
import { Apparel, ApparelProduct, Album, MusicProduct, Accessory, AccessoryProduct, Category } from './types';
import './App.css';

const MUSIC_TYPES: MusicProduct[] = ['LP', '2XLP', '12"', 'CD', '2XCD', 'Tape'];
const APPAREL_TYPES: ApparelProduct[] = ['T-Shirt', 'Longsleeve', 'Hoodie'];

const App = () => {
  const [state, dispatch] = useReducer(cartReducer, []);
  const [errorMessage, setErrorMessage] = useState('');
  const [categoryTypes, setCategoryTypes] = useState<Category[] | []>([]);
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
          <Route path='/collections/new-music' element={
            <CategoryPage<Album, MusicProduct> 
              items={newAlbums}
              allTypes={MUSIC_TYPES}
              selectedTypes={musicTypes}
              setSelectedTypes={setMusicTypes}
              defaultValue='LP'
              collection="New Music"
            />
          } />
          <Route path='/collections/new-apparel' element={
            <CategoryPage<Apparel, ApparelProduct> 
              items={newApparel} 
              allTypes={APPAREL_TYPES}
              selectedTypes={apparelTypes} 
              setSelectedTypes={setApparelTypes}
              collection="New Apparel"
            />
          } />
          <Route path='/collections/:collectionName' element={<ProductTypePage items={apparelCategories} />} />
          <Route path='/collections/:collectionName/products/:itemId' element={<ShowPage dispatch={dispatch}/>} />
          <Route path='/artists/:collectionName' element={
            <ArtistPage
              selectedTypes={categoryTypes}
              setSelectedTypes={setCategoryTypes}
            />
          } />
          <Route path='/artists/:collectionName/products/:itemId' element={<ShowPage dispatch={dispatch}/>} />
        </Routes>
      </ErrorMessageContext.Provider>
    </div>
  );
}

export default App;
