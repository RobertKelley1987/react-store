import { useState } from 'react';
import TextInput from './TextInput';

const CheckoutForm = () => {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [firstNameError, setFirstNameError] = useState('');
    const [lastName, setLastName] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [streetLine1, setStreetLine1] = useState('');
    const [streetLine1Error, setStreetLine1Error] = useState('');
    const [streetLine2, setStreetLine2] = useState('');
    const [city, setCity] = useState('');
    const [cityError, setCityError] = useState('');
    const [state, setState] = useState('');
    const [stateError, setStateError] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
    }

    return (
        <form onSubmit={e => handleSubmit}>
            <TextInput placeholder="First Name" value={firstName} setValue={setFirstName} error={firstNameError} />
            <TextInput placeholder="Last Name" value={lastName} setValue={setLastName} error={lastNameError} />
            <TextInput 
                placeholder="Street Address - Line 1" 
                value={lastName} 
                setValue={setLastName} 
                error={lastNameError} 
            />
        </form>
    )
}

export default CheckoutForm;