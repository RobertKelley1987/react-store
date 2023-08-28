import { useState, useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import cartReducer from './state/cartReducer';
import SiteHeader from './components/SiteHeader';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import ShowPage from './pages/ShowPage';
import ApparelShowPage from './pages/ShowPage/ApparelShowPage';
import MusicShowPage from './pages/ShowPage/MusicShowPage';
import AccessoryShowPage from './pages/ShowPage/AccessoryShowPage';
import ArtistPage from './pages/ArtistPage';
import ErrorMessage from './components/ErrorMessage';
import { ErrorMessageContext } from './context/ErrorMessageContext';
import { ScreenIsBigContextProvider } from './context/ScreenIsBigContext';
import { apparel } from './data/apparel';
import { albums } from './data/albums';
import { accessories } from './data/accessories';
import ProductFilterPage from './pages/ProductFilterPage';
import CollectionPage from './pages/CollectionPage';
import { Apparel, ApparelProduct, Album, MusicProduct, Accessory, AccessoryProduct, Category } from './types';
import './App.css';

const VINYL_TYPES: MusicProduct[] = ['LP', '2XLP', '12"'];
const CD_TYPES: MusicProduct[] = ['CD', '2XCD'];
const MUSIC_TYPES: MusicProduct[] = [...VINYL_TYPES, ...CD_TYPES, 'Tape'];
const APPAREL_TYPES: ApparelProduct[] = ['T-Shirt', 'Longsleeve', 'Hoodie'];
const ACCESSORY_TYPES: AccessoryProduct[] = ['Cap', 'Beanie', 'Enamel Pin', 'Patch', 'Tote Bag'];

const App = () => {
  const [state, dispatch] = useReducer(cartReducer, []);
  const [errorMessage, setErrorMessage] = useState('');
  const [selectedApparelTypes, setSelectedApparelTypes] = useState<ApparelProduct[]>([]);
  const [selectedMusicTypes, setSelectedMusicTypes] = useState<MusicProduct[]>([]);
  const [selectedAccessoryTypes, setSelectedAccessoryTypes] = useState<AccessoryProduct[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);

  const cart = [...state];
  console.log(cart);

  const clearFilter = () => {
    setSelectedAccessoryTypes([]);
    setSelectedApparelTypes([]);
    setSelectedMusicTypes([]);
    setSelectedCategories([]);
  }

  return (
    <div className="app">
      <ErrorMessageContext.Provider value={{ errorMessage, setErrorMessage }}>
        <ScreenIsBigContextProvider>
          <SiteHeader clearFilter={clearFilter}/>
        </ScreenIsBigContextProvider>        
        <ErrorMessage errorMessage={errorMessage} setErrorMessage={setErrorMessage} />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/cart' element={<CartPage cart={state} dispatch={dispatch} />} />
          <Route path='/music/new-music' element={
            <ProductFilterPage<Album, MusicProduct> 
              items={albums}
              allTypes={MUSIC_TYPES}
              selectedTypes={selectedMusicTypes}
              setSelectedTypes={setSelectedMusicTypes}
              defaultValue='LP'
              collection="New Music"
            />
          } />
          <Route path='/music/featured-music' element={
            <ProductFilterPage<Album, MusicProduct> 
              items={albums.filter(item => item.featured)} 
              allTypes={MUSIC_TYPES}
              selectedTypes={selectedMusicTypes}
              setSelectedTypes={setSelectedMusicTypes}
              collection="Featured Music"
            />
          } />
          <Route path='/music/vinyl' element={
            <ProductFilterPage<Album, MusicProduct> 
              items={albums.filter(album => VINYL_TYPES.includes(album.productType))}
              allTypes={VINYL_TYPES}
              selectedTypes={selectedMusicTypes}
              setSelectedTypes={setSelectedMusicTypes}
              collection="Vinyl"
            />
          } />
          <Route path='/music/cd' element={
            <ProductFilterPage<Album, MusicProduct> 
              items={albums.filter(album => CD_TYPES.includes(album.productType))}
              allTypes={CD_TYPES}
              selectedTypes={selectedMusicTypes}
              setSelectedTypes={setSelectedMusicTypes}
              collection="CD"
            />
          } />
          <Route path='/music/tape' element={
            <CollectionPage<Album, MusicProduct> 
              items={albums.filter(album => album.productType === 'Tape')}
              collection="Tape"
            />
          } />
          <Route path='/music/:collectionName/products/:itemId' element={<MusicShowPage dispatch={dispatch}/>} />
          <Route path='/apparel/new-apparel' element={
            <ProductFilterPage<Apparel, ApparelProduct> 
              items={apparel} 
              allTypes={APPAREL_TYPES}
              selectedTypes={selectedApparelTypes}
              setSelectedTypes={setSelectedApparelTypes}
              collection="New Apparel"
            />
          } />
          <Route path='/apparel/featured-apparel' element={
            <ProductFilterPage<Apparel, ApparelProduct> 
              items={apparel.filter(item => item.featured)} 
              allTypes={APPAREL_TYPES}
              selectedTypes={selectedApparelTypes}
              setSelectedTypes={setSelectedApparelTypes}
              collection="Featured Apparel"
            />
          } />
          <Route path='/apparel/t-shirts' element={
            <CollectionPage<Apparel, ApparelProduct> 
              items={apparel.filter(item => item.productType === 'T-Shirt')} 
              collection="T-Shirts"
            />
          } />
          <Route path='/apparel/longsleeves' element={
            <CollectionPage<Apparel, ApparelProduct> 
              items={apparel.filter(item => item.productType === 'Longsleeve')} 
              collection="Longsleeve"
            />
          } />
          <Route path='/apparel/hoodies' element={
            <CollectionPage<Apparel, ApparelProduct> 
              items={apparel.filter(item => item.productType === 'Hoodie')} 
              collection="Hoodies"
            />
          } />
          <Route path='/apparel/:collectionName/products/:itemId' element={<ApparelShowPage dispatch={dispatch}/>} />
          <Route path='/accessories/new-accessories' element={
            <ProductFilterPage<Accessory, AccessoryProduct> 
              items={accessories} 
              allTypes={ACCESSORY_TYPES}
              selectedTypes={selectedAccessoryTypes}
              setSelectedTypes={setSelectedAccessoryTypes}
              collection="New Accessories"
            />
          } />
          <Route path='/accessories/hats' element={
            <ProductFilterPage<Accessory, AccessoryProduct> 
              items={accessories.filter(item => item.productType === 'Cap' || item.productType === 'Beanie')} 
              collection="Hats"
              allTypes={['Cap', 'Beanie']}
              selectedTypes={selectedAccessoryTypes}
              setSelectedTypes={setSelectedAccessoryTypes}
            />
          } />
          <Route path='/accessories/patches' element={
            <CollectionPage<Accessory, AccessoryProduct> 
              items={accessories.filter(item => item.productType === 'Patch')} 
              collection="Patches"
            />
          } />
          <Route path='/accessories/pins' element={
            <CollectionPage<Accessory, AccessoryProduct> 
              items={accessories.filter(item => item.productType === 'Enamel Pin')} 
              collection="Pins"
            />
          } />
          <Route path='/accessories/bags' element={
            <CollectionPage<Accessory, AccessoryProduct> 
              items={accessories.filter(item => item.productType === 'Tote Bag')} 
              collection="Bags"
            />
          } />
          <Route path='/accessories/:collectionName/products/:itemId' element={<AccessoryShowPage dispatch={dispatch}/>} />
          <Route path='/artists/:artistName' element={
            <ArtistPage selectedCategories={selectedCategories} setSelectedCategories={setSelectedCategories} />} />
          <Route path='/artists/:collectionName/apparel/:itemId' element={<ApparelShowPage dispatch={dispatch}/>} />
          <Route path='/artists/:collectionName/music/:itemId' element={<MusicShowPage dispatch={dispatch}/>} />
          <Route path='/artists/:collectionName/accessories/:itemId' element={<AccessoryShowPage dispatch={dispatch}/>} />
        </Routes>
      </ErrorMessageContext.Provider>
    </div>
  );
}

export default App;
