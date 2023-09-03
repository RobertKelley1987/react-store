import { MailingAddress } from '../../types';

type TextInputProps = {
    placeholder: string,
    value: string,
    setValue: React.Dispatch<React.SetStateAction<string>>,
    error: string
}

const TextInput = ({ placeholder, value, setValue }: TextInputProps) => {
    return <input value={value} onChange={e => setValue(e.target.value)} placeholder={placeholder} />
}

export default TextInput;