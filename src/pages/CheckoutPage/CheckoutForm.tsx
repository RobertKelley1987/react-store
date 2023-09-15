import { useState } from 'react';
import ShippingAddressForm from './ShippingAddressForm';
import ShippingOptionsForm from './ShippingOptionsForm';
import { EMPTY_TEXT_INPUT, DEFAULT_MAILING_ADDRESS } from '../../constants';
import { MailingAddress, MailingAddressInput, CheckoutFormSection, ShippingMethod } from '../../types';
import './CheckoutForm.css';

type CheckoutFormProps = {
    setShippingMethod: React.Dispatch<React.SetStateAction<ShippingMethod>>
}

const CheckoutForm = ({ setShippingMethod }: CheckoutFormProps) => {
    const [currentSection, setCurrentSection] = useState<CheckoutFormSection>('shipping-address');
    const [email, setEmail] = useState<MailingAddressInput<string>>(EMPTY_TEXT_INPUT);
    const [phone, setPhone] = useState<MailingAddressInput<string>>(EMPTY_TEXT_INPUT);
    const [mailingAddress, setMailingAddress] = useState<MailingAddress>(DEFAULT_MAILING_ADDRESS);

    const renderForm = () => {
        if(currentSection === 'shipping-address') {
            return <ShippingAddressForm 
                        email={email}
                        setEmail={setEmail}
                        phone={phone}
                        setPhone={setPhone}
                        mailingAddress={mailingAddress}
                        setMailingAddress={setMailingAddress}
                        setCurrentSection={setCurrentSection}
                   />
        } else if(currentSection === 'shipping-options') {
            return <ShippingOptionsForm setShippingMethod={setShippingMethod}/>;
        } else {
            return null;
        }
    }

    return renderForm();
}

export default CheckoutForm;