import { useState } from 'react';
import ShippingAddressForm from './ShippingAddressForm';
import { EMPTY_TEXT_INPUT, DEFAULT_MAILING_ADDRESS } from '../../constants';
import { MailingAddress, MailingAddressInput, CheckoutFormSection } from '../../types';
import './CheckoutForm.css';

const CheckoutForm = () => {
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
        } else {
            return null;
        }
    }

    return renderForm();
}

export default CheckoutForm;