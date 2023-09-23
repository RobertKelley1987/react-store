import { useState, useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import { apparel } from './data/apparel';
import { albums } from './data/albums';
import { accessories } from './data/accessories';
import { ScreenIsBigContextProvider } from './context/ScreenIsBigContext';
import { cartTotal } from './utils/cart';
import cartReducer from './state/cartReducer';
import SiteHeader from './components/SiteHeader';
import HomePage from './pages/HomePage/index';
import CartPage from './pages/CartPage';
import ApparelShowPage from './pages/ApparelShowPage';
import MusicShowPage from './pages/MusicShowPage';
import AccessoryShowPage from './pages/AccessoryShowPage';
import ArtistPage from './pages/ArtistPage';
import ProductFilterPage from './pages/ProductFilterPage';
import CollectionPage from './pages/CollectionPage';
import CheckoutPage from './pages/CheckoutPage';
import FAQPage from './pages/FAQPage';
import TermsAndConditionsPage from './pages/TermsAndConditionsPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import PaymentPage from './pages/PaymentPage';
import ContactPage from './pages/ContactPage';
import ShippingAddressForm from './pages/CheckoutPage/ShippingAddressForm';
import ShippingMethodForm from './pages/CheckoutPage/ShippingMethodForm';
import PaymentFormWrapper from './pages/CheckoutPage/PaymentFormWrapper';
import SiteFooter from './components/SiteFooter';
import { SHIPPING_METHODS, DEFAULT_MAILING_ADDRESS, EMPTY_TEXT_INPUT } from './constants';
import { 
  Apparel, 
  ApparelProduct, 
  Album, 
  MusicProduct, 
  Accessory, 
  AccessoryProduct, 
  Category,
  ShippingMethod,
  MailingAddress,
  MailingAddressInput
} from './types';
import './App.css';

const VINYL_TYPES: MusicProduct[] = ['LP', '2XLP', '12"'];
const CD_TYPES: MusicProduct[] = ['CD', '2XCD'];
const MUSIC_TYPES: MusicProduct[] = [...VINYL_TYPES, ...CD_TYPES, 'Tape'];
const APPAREL_TYPES: ApparelProduct[] = ['T-Shirt', 'Longsleeve', 'Hoodie'];
const ACCESSORY_TYPES: AccessoryProduct[] = ['Cap', 'Beanie', 'Enamel Pin', 'Patch', 'Tote Bag'];

const App = () => {
  const [state, dispatch] = useReducer(cartReducer, []);
  const [selectedApparelTypes, setSelectedApparelTypes] = useState<ApparelProduct[]>([]);
  const [selectedMusicTypes, setSelectedMusicTypes] = useState<MusicProduct[]>([]);
  const [selectedAccessoryTypes, setSelectedAccessoryTypes] = useState<AccessoryProduct[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);
  const [viewingCartPage, setViewingCartPage] = useState(false);
  const [cartIsVisible, setCartIsVisible] = useState(false);
  const [checkingOut, setCheckingOut] = useState(false);
  const [shippingMethod, setShippingMethod] = useState<ShippingMethod>(SHIPPING_METHODS[0]);
  const [email, setEmail] = useState<MailingAddressInput<string>>(EMPTY_TEXT_INPUT);
  const [phone, setPhone] = useState<MailingAddressInput<string>>(EMPTY_TEXT_INPUT);
  const [mailingAddress, setMailingAddress] = useState<MailingAddress>(DEFAULT_MAILING_ADDRESS);

  const clearFilter = () => {
    setSelectedAccessoryTypes([]);
    setSelectedApparelTypes([]);
    setSelectedMusicTypes([]);
    setSelectedCategories([]);
  }

  const featuredApparel = apparel.filter(item => item.featured);
  const apparelFilter = APPAREL_TYPES.filter(productType => featuredApparel.find(item => item.productType === productType));
  const featuredMusic = albums.filter(item => item.featured);
  const musicFilter = MUSIC_TYPES.filter(productType => featuredMusic.find(item => item.productType === productType));

  const cartValue = cartTotal(state);
  const orderTotal = cartValue + shippingMethod.cost;

  return (
    <ScreenIsBigContextProvider>
      <div className="app">
          {!checkingOut && <SiteHeader 
            clearFilter={clearFilter} 
            cart={state} 
            dispatch={dispatch} 
            viewingCartPage={viewingCartPage}
            cartIsVisible={cartIsVisible}
            setCartIsVisible={setCartIsVisible}
          />}
        <div className="app-content">       
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/checkout' element={
              <CheckoutPage cart={state} setCheckingOut={setCheckingOut} shippingCost={shippingMethod.cost}/>}
            >
              <Route path='info' element={
                <ShippingAddressForm 
                  email={email}
                  setEmail={setEmail}
                  phone={phone}
                  setPhone={setPhone}
                  mailingAddress={mailingAddress}
                  setMailingAddress={setMailingAddress}
                />
              } />
              <Route path='shipping' element={
                <ShippingMethodForm shippingMethod={shippingMethod} setShippingMethod={setShippingMethod} />
              } />
              <Route path='payment' element={
                <PaymentFormWrapper cart={state}/>
              } />
            </Route>
            <Route path='/order-success' element={<div>ORDER COMPLETE!</div>} />
            <Route path='/cart' element={
              <CartPage cart={state} dispatch={dispatch} setViewingCartPage={setViewingCartPage}/>
            } />
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
                allTypes={musicFilter}
                selectedTypes={selectedMusicTypes}
                setSelectedTypes={setSelectedMusicTypes}
                collection="Featured Music"
                defaultValue='LP'
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
            <Route path='/music/:collectionName/products/:itemId' element={
              <MusicShowPage dispatch={dispatch} setCartIsVisible={setCartIsVisible} />
            } />
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
                items={featuredApparel} 
                allTypes={apparelFilter}
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
                collection="Longsleeves"
              />
            } />
            <Route path='/apparel/hoodies' element={
              <CollectionPage<Apparel, ApparelProduct> 
                items={apparel.filter(item => item.productType === 'Hoodie')} 
                collection="Hoodies"
              />
            } />
            <Route path='/apparel/:collectionName/products/:itemId' element={
              <ApparelShowPage dispatch={dispatch} setCartIsVisible={setCartIsVisible} />
            } />
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
            <Route path='/accessories/:collectionName/products/:itemId' element={
              <AccessoryShowPage dispatch={dispatch} setCartIsVisible={setCartIsVisible}/>
            } />
            <Route path='/artists/:artistName' element={
              <ArtistPage selectedCategories={selectedCategories} setSelectedCategories={setSelectedCategories} />} 
            />
            <Route path='/artists/:collectionName/apparel/:itemId' element={
              <ApparelShowPage dispatch={dispatch} setCartIsVisible={setCartIsVisible} />
            } />
            <Route path='/artists/:collectionName/music/:itemId' element={
              <MusicShowPage dispatch={dispatch} setCartIsVisible={setCartIsVisible} />
            } />
            <Route path='/artists/:collectionName/accessories/:itemId' element={
              <AccessoryShowPage dispatch={dispatch} setCartIsVisible={setCartIsVisible} />
            } />
            <Route path='/faqs' element={<FAQPage />} />
            <Route path='/terms-and-conditions' element={<TermsAndConditionsPage />} />
            <Route path='/privacy-policy' element={<PrivacyPolicyPage />} />
            <Route path='/payment' element={<PaymentPage />} />
            <Route path='/contact' element={<ContactPage />} />
          </Routes>
        </div>
          {!checkingOut && <SiteFooter />}
      </div>
    </ScreenIsBigContextProvider>
  );
}

export default App;
