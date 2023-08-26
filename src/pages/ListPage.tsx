import Grid from '../components/Grid';
import ItemList from '../components/ItemList';
import PageNumbers from './PageNumbers';
import { ProductList } from '../types';
import './ListPage.css';

type ListPageProps = {
    pages: ProductList[],
    pageNum: number,
    currentPath: string
}

function ListPage({ pages, pageNum, currentPath }: ListPageProps) {
    return (
        <div className="list-page">
            <Grid>
                <ItemList items={pages[pageNum - 1]} />
            </Grid>

            <PageNumbers pages={pages} currentPage={pageNum} currentPath={currentPath}/>            
        </div>
    );
}

export default ListPage;