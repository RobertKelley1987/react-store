import { Link, useLocation, useParams } from 'react-router-dom';
import { decodeHttpSlug } from '../utils';
import './StorePath.css';

type StorePathProps = {
    tail: React.ReactNode,
    collection?: string
}

function StorePath(props: StorePathProps) {
    const { tail, collection } = props;
    const location = useLocation();
    const { collectionName } = useParams();

    const calcTrimIndex = () => {
        if(collectionName) {
            return location.pathname.indexOf(collectionName) + collectionName.length;
        }
    }

    const backPath = location.pathname.substring(0, calcTrimIndex());

    return (
        <div className="store-path">
            <Link className="store-path-item" to='/'>
                Home
            </Link>
            <span> / </span>
            <Link className="store-path-item" to={backPath}>
                {collection || decodeHttpSlug(collectionName)}
            </Link>
            <span> / </span>
            {tail}
        </div>
    )
}

export default StorePath;