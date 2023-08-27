import Description from './Description';
import Tracklist from './Tracklist';
import { Album, Product } from '../../types';

type AlbumDescProps = {
    item: Product
}

function assertIsAlbum(item: Product | null): asserts item is Album {
    if(!item || !("albumDesc" in item)) {
        throw new Error("Item passed to AlbumDesc component is not an album.");
    }
}

const AlbumText = ({ item }: AlbumDescProps) => {
    assertIsAlbum(item);
    
    return (
        <div>
            <Description desc={item.albumDesc} />
            <Tracklist tracklist={item.tracklist} />
        </div>
    );
}

export default AlbumText;