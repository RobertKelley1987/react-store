import { isANumber } from '../../utils';
import { formatPhoneNum } from '../../utils/phoneNumbers';
import { MailingAddressInput } from '../../types';
import './PhoneInput.css';

type PhoneInputProps = {
    placeholder: string,
    phone: MailingAddressInput<string>,
    setPhone: React.Dispatch<React.SetStateAction<MailingAddressInput<string>>>,
}

const PhoneInput = ({ placeholder, phone, setPhone }: PhoneInputProps) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const formattedPhoneNumber = formatPhoneNum(e.target.value, phone.value);
        setPhone({ value: formattedPhoneNumber, error: '' });
    }

    // Only allow numbers, backspace and tab to trigger in this field
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const ACCEPTED_KEYS = ['Backspace', 'Tab'];
        const { key } = e;

        if(!isANumber.test(key) && !ACCEPTED_KEYS.includes(key)) {
            e.preventDefault();
        }
    }

    return <input 
                className={phone.error ? "phone-input phone-input-error" : "phone-input"} 
                value={phone.value} 
                onChange={handleChange} 
                placeholder={placeholder} 
                type="tel"
                maxLength={14}
                onKeyDown={handleKeyDown}
            />;
}

export default PhoneInput;