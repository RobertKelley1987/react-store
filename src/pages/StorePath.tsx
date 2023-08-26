import { Link } from 'react-router-dom';
import { ApparelProduct } from '../types';
import './StorePath.css';

type StorePathProps<T> = {
    currentStorePath: string,
    currentStoreName: string,
    currentPageNum: number,
    pageNumTotal: number,
    setProductTypes?: React.Dispatch<React.SetStateAction<T[]>>
}

const StorePath = ({ currentStorePath, currentStoreName, currentPageNum, pageNumTotal, setProductTypes }: StorePathProps<ApparelProduct>) => {
    return (
        <div className="store-path">
            <Link className="store-path-item" to='/' 
            // onClick={() => setProductTypes([])}
            >
                Home
            </Link>
            <span> / </span>
            <Link 
                className="store-path-item" 
                to={`${currentStorePath}`}
                // onClick={() => setProductTypes([])}
            >
                {`${currentStoreName}`}
            </Link>
            <span> / </span>
            <span className="store-path-item">{`Page ${currentPageNum} of ${pageNumTotal}`}</span>
        </div>
    )
}

export default StorePath;