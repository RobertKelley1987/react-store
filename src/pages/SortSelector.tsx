import { SortOption } from "../types";

type SortSelectorProps = {
    sortOption: SortOption,
    setSortOption: React.Dispatch<React.SetStateAction<SortOption>>
}

const SORT_OPTIONS: SortOption[] = [
    'Date - Old to New', 
    'Date - New to Old', 
    'Artist Name - A to Z', 
    'Artist Name - Z to A', 
    'Price - High to Low', 
    'Price - Low to High'
];

function assertIsSortOption(option: string): asserts option is SortOption {
    let foundOption = false;
    SORT_OPTIONS.forEach(sortOption => {
        if(sortOption === option) {
            foundOption = true;
        }
    });

    if(!foundOption) {
        throw new Error('Selected option is not of type SortOption');
    }
}

const SortSelector = ({ sortOption, setSortOption }: SortSelectorProps) => {
    function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
        assertIsSortOption(e.target.value);
        setSortOption(e.target.value)
    }

    return (
        <div className="sort-wrapper">
            <select onChange={handleChange} >
                {SORT_OPTIONS.map(option => <option key={option} value={option}>{option}</option>)}
            </select>
        </div>
    )
}

export default SortSelector;