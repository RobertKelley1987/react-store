import { useState } from 'react';
import TextInput from './TextInput';
import PhoneInput from './PhoneInput';
import StateSelector from './StateSelector';
import './CheckoutForm.css';

const CheckoutForm = () => {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [firstName, setFirstName] = useState('');
    const [firstNameError, setFirstNameError] = useState('');
    const [lastName, setLastName] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [addressLine1, setAddressLine1] = useState('');
    const [addressError, setAddressError] = useState('');
    const [addressLine2, setAddressLine2] = useState('');
    const [city, setCity] = useState('');
    const [cityError, setCityError] = useState('');
    const [state, setState] = useState('');
    const [stateError, setStateError] = useState('');
    const [zip, setZip] = useState('');
    const [zipError, setZipError] = useState('');
    const [phone, setPhone] = useState<string>('');
    const [phoneError, setPhoneError] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
    }

    return (
        <form className="checkout-form" onSubmit={e => handleSubmit}>
            <div className="checkout-form-section">
                <h2 className="checkout-form-heading">Contact</h2>
                <TextInput placeholder="Email" value={email} setValue={setEmail} error={emailError} />
            </div>

            <div className="checkout-form-section">
                <h2 className="checkout-form-heading">Shipping Info</h2>
                <div className="checkout-form-name-wrapper">
                    <TextInput placeholder="First Name" value={firstName} setValue={setFirstName} error={firstNameError} />
                    <TextInput placeholder="Last Name" value={lastName} setValue={setLastName} error={lastNameError} />
                </div>
                <TextInput 
                    placeholder='Address' 
                    value={addressLine1} 
                    setValue={setAddressLine1} 
                    error={addressError} 
                />
                <TextInput placeholder='Apt, suite etc. (optional)' value={addressLine2} setValue={setAddressLine2} />
                <div className="checkout-form-location-wrapper">
                    <TextInput placeholder="City" value={city} setValue={setCity} error={cityError} />
                    <StateSelector placeholder="State" value={state} setValue={setState} error={stateError} />
                    <TextInput placeholder="Zip" value={zip} setValue={setZip} error={zipError} />
                </div>
                <PhoneInput placeholder='Phone' value={phone} setValue={setPhone} error={phoneError} />
            </div>
            <button type="submit" className="button button-black">Continue</button>
        </form>
    )
}

export default CheckoutForm;