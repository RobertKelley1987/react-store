import { useState } from 'react';
import TextInput from './TextInput';
import PhoneInput from './PhoneInput';
import StateSelector from './StateSelector';
import ZipInput from './ZipInput';
import { MailingAddress } from '../../types';
import './CheckoutForm.css';

const DEFAULT_MAILING_ADDRESS: MailingAddress = {
    firstName: '',
    lastName: '',
    streetLine1: '',
    streetLine2: '',
    city: '',
    state: '',
    zip: ''
}

const CheckoutForm = () => {
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState<string>('');
    const [mailingAddress, setMailingAddress] = useState<MailingAddress>(DEFAULT_MAILING_ADDRESS);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    const setValue = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setMailingAddress(prev => {
            return { ...prev, [e.target.name]: e.target.value }
        });
    }

    return (
        <form className="checkout-form" onSubmit={e => handleSubmit}>
            <div className="checkout-form-section">
                <h2 className="checkout-form-heading">Contact</h2>
                <TextInput 
                    placeholder="Email" 
                    name="email"
                    value={email} 
                    setValue={e => setEmail(e.target.value)}
                />
            </div>

            <div className="checkout-form-section">
                <h2 className="checkout-form-heading">Shipping Info</h2>
                <div className="checkout-form-name-wrapper">
                    <TextInput 
                        placeholder="First Name" 
                        name="firstName" 
                        value={mailingAddress.firstName} 
                        setValue={setValue}
                    />
                    <TextInput 
                        placeholder="Last Name" 
                        name="lastName" 
                        value={mailingAddress.lastName} 
                        setValue={setValue}
                    />
                </div>
                <TextInput 
                    placeholder='Address' 
                    value={mailingAddress.streetLine1} 
                    name="streetLine1"
                    setValue={setValue}
                />
                <TextInput 
                    placeholder='Apt, suite etc. (optional)'
                    name="streetLine2" 
                    value={mailingAddress.streetLine2} 
                    setValue={setValue}
                />
                <div className="checkout-form-location-wrapper">
                    <TextInput 
                        placeholder="City" 
                        name="city"
                        value={mailingAddress.city} 
                        setValue={setValue}
                    />
                    <StateSelector 
                        placeholder="State" 
                        name="state"
                        value={mailingAddress.state} 
                        setValue={setValue}
                    />
                    <ZipInput 
                        placeholder="Zip" 
                        name="zip"
                        value={mailingAddress.zip}
                        setValue={setValue}
                    />
                </div>
                <PhoneInput placeholder='Phone' value={phone} setValue={setPhone}/>
            </div>
            <button type="submit" className="button button-black">Continue</button>
        </form>
    )
}

export default CheckoutForm;