import Grid from '../components/Grid';
import ItemList from '../components/ItemList';
import PageNumbers from './PageNumbers';
import { Item } from '../types';
import './ListPage.css';

type ListPageProps<T> = {
    pages: T[][],
    pageNum: number,
    currentPath: string
}

function ListPage<T extends Item<K>, K extends string>({ pages, pageNum, currentPath }: ListPageProps<T>) {
    return (
        <div className="list-page">
            <Grid>
                <ItemList<T, K> items={pages[pageNum - 1]} />
            </Grid>

            <PageNumbers pages={pages} currentPage={pageNum} currentPath={currentPath}/>            
        </div>
    );
}

export default ListPage;