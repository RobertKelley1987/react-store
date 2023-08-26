import { useLocation, useNavigate } from 'react-router-dom'
import { ApparelProduct } from "../types"
import './ListFilter.css';

type ListFilterProps<T> = {
    selections: T[],
    productTypes: T[]
    setProductTypes: (value: React.SetStateAction<T[]>) => void
}

const ListFilter = ({ selections, productTypes, setProductTypes }: ListFilterProps<ApparelProduct>) => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleClick = (clickedType: ApparelProduct) => {
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
                    <label className="list-filter-checkbox-label" htmlFor={selection}>
                        <input 
                            className="list-filter-checkbox" 
                            onClick={() => handleClick(selection)} 
                            id={selection} 
                            type="checkbox"
                            checked={productTypes.includes(selection)} 
                        />
                        <span>{selection}s</span>
                    </label>
                )
            })}
        </div>
    )
}

export default ListFilter;