import { Link, useLocation, useParams } from 'react-router-dom';
import { decodeHttpSlug } from '../utils';
import './StorePath.css';

type StorePathProps<T> = {
    setSelectedTypes?: React.Dispatch<React.SetStateAction<T[]>>
    defaultValue?: T,
    tail: React.ReactNode,
    collection?: string
}

function StorePath<T extends string>(props: StorePathProps<T>) {
    const { setSelectedTypes, defaultValue, tail, collection } = props;
    const location = useLocation();
    const { collectionName } = useParams();

    const calcTrimIndex = () => {
        if(collectionName) {
            return location.pathname.indexOf(collectionName) + collectionName.length;
        }
    }

    const backPath = location.pathname.substring(0, calcTrimIndex());

    const handleClick = () => {
        if(setSelectedTypes) {
            defaultValue ? setSelectedTypes([defaultValue]) : setSelectedTypes([]);
        }
    }

    return (
        <div className="store-path">
            <Link className="store-path-item" to='/' onClick={handleClick}>
                Home
            </Link>
            <span> / </span>
            <Link className="store-path-item" to={backPath} onClick={handleClick}>
                {collection || decodeHttpSlug(collectionName)}
            </Link>
            <span> / </span>
            {tail}
        </div>
    )
}

export default StorePath;