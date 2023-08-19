import Grid from '../components/Grid';
import ItemList from '../components/ItemList';
import { albums } from '../data/albums';
import { sortByDateAdded } from '../utils';

const sortedAlbums = albums.sort(sortByDateAdded);

const NewMusicPage = () => {
    return (
        <main className="container">
            <Grid>
                <ItemList items={sortedAlbums} />
            </Grid>
        </main>
    )
}

export default NewMusicPage;