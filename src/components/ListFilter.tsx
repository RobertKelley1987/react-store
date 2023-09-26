import { useState, useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'
import { ScreenIsBigContext } from '../context/ScreenIsBigContext';
import './ListFilter.css';
import MenuChevron from '../components/MenuChevron';

type ListFilterProps<T> = {
    selections: T[],
    productTypes: T[]
    setProductTypes: React.Dispatch<React.SetStateAction<T[]>> 
}

function ListFilter<T extends string> ({ selections, productTypes, setProductTypes }: ListFilterProps<T>) {
    const [isOpen, setIsOpen] = useState(true);
    const location = useLocation();
    const navigate = useNavigate();
    const screenIsBigContext = useContext(ScreenIsBigContext);
    const screenIsBig = screenIsBigContext?.screenIsBig;

    useEffect(() => {
        if(screenIsBig) {
            setIsOpen(true);
        } else {
            setIsOpen(false);
        }
    }, [screenIsBig])

    const handleChange = (clickedType: T) => {
        if(productTypes.includes(clickedType)) {
            setProductTypes(prevTypes => prevTypes.filter(prevType => prevType !== clickedType));
        } else {
            setProductTypes(prevTypes => [...prevTypes, clickedType]);
        }
        navigate(`${location.pathname}?page=1`);
    }

    const toggleFilterIsOpen = () => !screenIsBig && setIsOpen(prev => !prev);

    const renderSelections = () => selections.map(selection => {
        return (
            <label key={selection} className="checkbox-label" htmlFor={selection}>
                <input 
                    className="checkbox"  
                    id={selection} 
                    type="checkbox"
                    onChange={() => handleChange(selection)}
                    onKeyDown={e => e.key === 'Enter' && handleChange(selection)}
                    checked={productTypes.includes(selection)} 
                />
                <span>{selection}</span>
            </label>
        )
    });
    
    return (
        <div className="list-filter">
            <div 
                tabIndex={!screenIsBig ? 0 : undefined}
                className="list-filter-heading-wrapper"
                onKeyDown={e => e.key === 'Enter' && toggleFilterIsOpen()} 
                onClick={toggleFilterIsOpen}
            >
                <h2 className="list-filter-heading">Product Type</h2>
                {!screenIsBig && <MenuChevron flipped={isOpen}/>}
            </div>
            {isOpen && renderSelections()}            
        </div>
    );
}

export default ListFilter;