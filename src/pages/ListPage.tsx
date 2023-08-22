import { Link, useLocation } from 'react-router-dom';
import useQuery from '../hooks/useQuery';
import Grid from '../components/Grid';
import ItemList from '../components/ItemList';
import { ProductList } from '../types';

type ListPageProps = {
    pages: ProductList[],
    pageName: string
}

function ListPage({ pages, pageName }: ListPageProps) {
    const query = useQuery();
    const location = useLocation();
    const pageNumQuery = query.get('page') || '1';
    const pageNum = parseInt(pageNumQuery);

    return (
        <main className="container">
            <div className="list-page">
                <Link to='/'>Home</Link> /
                <Link to={`${location.pathname}`}>{` ${pageName}`}</Link> /
                {` Page ${pageNum} of ${pages.length}`}
            </div>

            <Grid>
                <ItemList items={pages[pageNum - 1]} />
            </Grid>

            {/* SHOW PAGE SELECTOR IF THERE IS MORE THAN 1 PAGE OF DATA */}
            {pages.length > 1 && pages.map((page, index) => {
                const pageNum = index + 1;
                return <Link key={pageNum} to={`${location.pathname}?page=${pageNum}`}>{pageNum}</Link>
            })}
        </main>
    );
}

export default ListPage;