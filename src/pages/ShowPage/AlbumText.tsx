import AlbumDescription from './AlbumDescription';
import Tracklist from './Tracklist';
import { Album, Product } from '../../types';

type AlbumTextProps = {
    album: Album | null
}

const AlbumText = ({ album }: AlbumTextProps) => {
    const renderAlbumText = (album: Album) => {
        return album && (
            <div>
                <AlbumDescription desc={album.albumDesc} />
                <Tracklist tracklist={album.tracklist} />
            </div>
        )
    }
    
    return !album ? null : renderAlbumText(album); 
}

export default AlbumText;