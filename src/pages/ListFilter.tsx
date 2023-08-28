import { useLocation, useNavigate } from 'react-router-dom'
import './ListFilter.css';

type ListFilterProps<T> = {
    selections: T[],
    productTypes: T[]
    setProductTypes: React.Dispatch<React.SetStateAction<T[]>> 
}

function ListFilter<T extends string> ({ selections, productTypes, setProductTypes }: ListFilterProps<T>) {
    const location = useLocation();
    const navigate = useNavigate();

    const handleChange = (clickedType: T) => {
        if(productTypes.includes(clickedType)) {
            setProductTypes(prevTypes => prevTypes.filter(prevType => prevType !== clickedType));
        } else {
            setProductTypes(prevTypes => [...prevTypes, clickedType]);
        }
        navigate(`${location.pathname}?page=1`);
    }

    return (
        <div className="list-filter">
            <h2 className="list-filter-heading">Product Type</h2>
            {selections.map(selection => {
                return (
                    <label key={selection} className="list-filter-checkbox-label" htmlFor={selection}>
                        <input 
                            className="list-filter-checkbox"  
                            id={selection} 
                            type="checkbox"
                            onChange={() => handleChange(selection)}
                            checked={productTypes.includes(selection)} 
                        />
                        <span>{selection}</span>
                    </label>
                )
            })}
        </div>
    );
}

export default ListFilter;