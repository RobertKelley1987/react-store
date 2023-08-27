import { Link } from 'react-router-dom';
import { ApparelProduct, MusicProduct } from '../types';
import './StorePath.css';

type StorePathProps = {
    currentStorePath: string,
    currentStoreName: string,
    tail: React.ReactNode
}

const StorePath = ({ currentStorePath, currentStoreName, tail }: StorePathProps) => {
    return (
        <div className="store-path">
            <Link className="store-path-item" to='/' 
            >
                Home
            </Link>
            <span> / </span>
            <Link 
                className="store-path-item" 
                to={`${currentStorePath}`}
            >
                {`${currentStoreName}`}
            </Link>
            <span> / </span>
            {tail}
        </div>
    )
}

export default StorePath;