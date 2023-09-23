import { useNavigate } from 'react-router-dom';
import PhoneInput from './PhoneInput';
import StateSelector from './StateSelector';
import ZipInput from './ZipInput';
import { VOWELS, ADDRESS_STR_LIB } from '../../constants';
import { MailingAddress, MailingAddressInput } from "../../types";
import './ShippingAddressForm.css';

type ShippingAddressFormProps = {
    email: MailingAddressInput<string>,
    setEmail: React.Dispatch<React.SetStateAction<MailingAddressInput<string>>>,
    phone: MailingAddressInput<string>,
    setPhone: React.Dispatch<React.SetStateAction<MailingAddressInput<string>>>,
    mailingAddress: MailingAddress,
    setMailingAddress: React.Dispatch<React.SetStateAction<MailingAddress>>
}

const ShippingAddressForm = (props: ShippingAddressFormProps) => {
    const { email, setEmail, phone, setPhone, mailingAddress, setMailingAddress } = props;
    const navigate = useNavigate();

    // Util to add 'a' or 'an' before required field
    const generateErrorMessage = (str: string) => {
        return VOWELS.includes(str[0]) ? `Enter an ${str}` : `Enter a ${str}` 
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!validateForm()) return;
        navigate('/checkout/shipping');
    }

    const validateForm = () => {
        let readyToSubmit = true;

        // Validate contact info
        if(!email.value) {
            setEmail(prev => {
                return {...prev, error: 'Enter an valid email address'}
            });
            readyToSubmit = false;
        }

        if(!phone.value || phone.value.length < 14) {
            setPhone(prev => {
                return {...prev, error: 'Enter a valid phone number'}
            });
            readyToSubmit = false;
        }

        // Validate mailing address
        const addressWithErrors: MailingAddress = {...mailingAddress}

        // Reset error for each input then validate
        let key: keyof typeof mailingAddress;
        for(key in addressWithErrors) {
            addressWithErrors[key].error = '';

            if(!addressWithErrors[key].value && key !== 'streetLine2') {
                let fullPropName = ADDRESS_STR_LIB[key];
                addressWithErrors[key] = {
                    value: '',
                    error: generateErrorMessage(fullPropName)
                }
                readyToSubmit = false;
            }

        }

        setMailingAddress({...addressWithErrors});
        return readyToSubmit;
    }

    const setValue = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setMailingAddress(prev => {
            return { ...prev, [e.target.name]: { value: e.target.value } }
        });
    }

    return (
        <form className="shipping-address-form" onSubmit={handleSubmit}>
            <div className="shipping-address-form-section">
                <h2 className="shipping-address-form-heading">Contact</h2>

                <div className="shipping-address-form-input-wrapper">
                    <input 
                        placeholder="Email" 
                        name="email"
                        value={email.value} 
                        onChange={e => setEmail({ value: e.target.value, error: '' })}
                        type="text"
                        className={email.error ? "shipping-address-form-input shipping-address-form-input-error" : "shipping-address-form-input"}
                    />
                    {email.error && <span className="shipping-address-form-error">{email.error}</span>}
                </div>

                <div className="shipping-address-form-input-wrapper">
                    <PhoneInput placeholder='Phone' phone={phone} setPhone={setPhone}/>
                    {phone.error && <span className="shipping-address-form-error">{phone.error}</span>}
                </div>
            </div>

            <div className="shipping-address-form-section">
                <h2 className="shipping-address-form-heading">Shipping Info</h2>
                <div className="shipping-address-form-name-wrapper">
                    <div className="shipping-address-form-input-wrapper">
                        <input 
                            placeholder="First Name" 
                            name="firstName" 
                            value={mailingAddress.firstName.value} 
                            onChange={setValue}
                            type="text"
                            className={mailingAddress.firstName.error ? "shipping-address-form-input shipping-address-form-input-error" : "shipping-address-form-input"} 
                        />
                        {mailingAddress.firstName.error && <span className="shipping-address-form-error">{mailingAddress.firstName.error}</span>} 
                    </div>

                    <div className="shipping-address-form-input-wrapper">
                        <input 
                            placeholder="Last Name" 
                            name="lastName" 
                            value={mailingAddress.lastName.value} 
                            onChange={setValue}
                            type="text"
                            className={mailingAddress.lastName.error ? "shipping-address-form-input shipping-address-form-input-error" : "shipping-address-form-input"}
                        />
                        {mailingAddress.lastName.error && <span className="shipping-address-form-error">{mailingAddress.lastName.error}</span>}
                    </div>
                </div>

                <div className="shipping-address-form-input-wrapper">
                    <input 
                        placeholder='Address' 
                        value={mailingAddress.streetLine1.value} 
                        name="streetLine1"
                        onChange={setValue}
                        type="text"
                        className={mailingAddress.streetLine1.error ? "shipping-address-form-input shipping-address-form-input-error" : "shipping-address-form-input"}
                    />
                    {mailingAddress.streetLine1.error && <span className="shipping-address-form-error">{mailingAddress.streetLine1.error}</span>}
                </div>

                <input 
                    placeholder='Apt, suite etc. (optional)'
                    name="streetLine2" 
                    value={mailingAddress.streetLine2.value} 
                    onChange={setValue}
                    type="text"
                    className="shipping-address-form-input"
                />                    

                <div className="shipping-address-form-location-wrapper">
                    <div className="shipping-address-form-input-wrapper">
                        <input 
                            placeholder="City" 
                            name="city"
                            value={mailingAddress.city.value} 
                            onChange={setValue}
                            type="text"
                            className={mailingAddress.city.error ? "shipping-address-form-input shipping-address-form-input-error" : "shipping-address-form-input"}
                        />
                        {mailingAddress.city.error && <span className="shipping-address-form-error">{mailingAddress.city.error}</span>}
                    </div>

                    <div className="shipping-address-form-input-wrapper">
                        <StateSelector state={mailingAddress.state} setValue={setValue} />
                        {mailingAddress.state.error && <span className="shipping-address-form-error">{mailingAddress.state.error}</span>}
                    </div>

                    <div className="shipping-address-form-input-wrapper">
                        <ZipInput zip={mailingAddress.zip} setValue={setValue} />
                        {mailingAddress.zip.error && <span className="shipping-address-form-error">{mailingAddress.zip.error}</span>}
                    </div>
                </div>
            </div>
            <button type="submit" className="button button-black">Continue</button>
        </form>
    )
}

export default ShippingAddressForm;