import { US_STATES } from "../../constants";
import './StateSelector.css';

type StateSelectorProps = {
    placeholder: string,
    value: string,
    setValue: React.Dispatch<React.SetStateAction<string>>,
    error?: string
}

const StateSelector = ({ placeholder, value, setValue, error }: StateSelectorProps) => {
    const classNames = value ? 'state-selector' : 'state-selector state-selector-disabled';

    return (
        <div className="state-selector-wrapper">
            <select 
                className={classNames}
                value={value} 
                onChange={e => setValue(e.target.value)}
            >
                <option className="select-placeholder" value='' disabled selected hidden>{placeholder}</option>
                {US_STATES.map(state => <option value={state}>{state}</option>)}
            </select>
            {error && <p className="form-error">{error}</p>}
        </div>
    )
}

export default StateSelector;