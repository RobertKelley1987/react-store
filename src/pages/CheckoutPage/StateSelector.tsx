import { US_STATES } from "../../constants";
import { MailingAddressInput, State } from "../../types";
import './StateSelector.css';

type StateSelectorProps = {
    state: MailingAddressInput<State>,
    setValue: (e: React.ChangeEvent<HTMLSelectElement>) => void,
}

const StateSelector = ({ state, setValue }: StateSelectorProps) => {
    const classNames = () => {
        let classNames = 'state-selector';

        if(state.error) {
            classNames += " state-selector-error";
        } 
        
        if(!state.value) {
            classNames += " state-selector-disabled";
        }

        return classNames;
    }

    return (
        <select 
            className={classNames()}
            name="state"
            value={state.value} 
            onChange={setValue}
        >
            <option className="select-placeholder" value='' disabled selected hidden>Select State</option>
            {US_STATES.map(state => <option value={state}>{state}</option>)}
        </select>
    )
}

export default StateSelector;