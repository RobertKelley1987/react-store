import { ProductList } from "../types";
import Grid from "../components/Grid";
import ItemList from '../components/ItemList';
import './HomePageSection.css';

type HomePageProps = {
    heading: string,
    items: ProductList
}

const HomePageSection = ({ heading, items }: HomePageProps) => {
    return (
        <section className="home-page-section">
            <h2 className="home-page-section-heading">{heading}</h2>
            <Grid>
                <ItemList items={items} />
            </Grid>
        </section>
    )
}

export default HomePageSection;