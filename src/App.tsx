import SiteHeader from './components/SiteHeader';
import ItemList from './components/ItemList';
import Grid from './components/Grid';
import { data } from './data';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <SiteHeader />
        <main className="app-container">
          <h1 className="page-title">All Products</h1>
          <Grid>
            <ItemList products={data}/>
          </Grid>
        </main>
    </div>
  );
}

export default App;
