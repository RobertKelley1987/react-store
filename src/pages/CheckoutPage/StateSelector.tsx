import { US_STATES } from "../../constants";
import './StateSelector.css';

type StateSelectorProps = {
    placeholder: string,
    name: string,
    value: string,
    setValue: (e: React.ChangeEvent<HTMLSelectElement>) => void,
    error?: string
}

const StateSelector = ({ placeholder, name, value, setValue, error }: StateSelectorProps) => {
    const classNames = value ? 'state-selector' : 'state-selector state-selector-disabled';

    return (
        <div className="state-selector-wrapper">
            <select 
                className={classNames}
                name={name}
                value={value} 
                onChange={setValue}
            >
                <option className="select-placeholder" value='' disabled selected hidden>{placeholder}</option>
                {US_STATES.map(state => <option value={state}>{state}</option>)}
            </select>
            {error && <p className="form-error">{error}</p>}
        </div>
    )
}

export default StateSelector;