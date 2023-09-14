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
    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const formattedPhoneNumber = formatPhoneNum(e.target.value, phone.value);
        setPhone({ value: formattedPhoneNumber, error: '' });
    }

    return <input 
                className={phone.error ? "phone-input phone-input-error" : "phone-input"} 
                value={phone.value} 
                onChange={handlePhoneChange} 
                placeholder={placeholder} 
                type="tel"
                maxLength={14}
                onKeyDown={e => !isANumber.test(e.key) && e.preventDefault()}
            />;
}

export default PhoneInput;