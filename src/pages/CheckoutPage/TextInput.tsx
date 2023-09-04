import './TextInput.css';

type TextInputProps = {
    placeholder: string,
    value: string,
    setValue: React.Dispatch<React.SetStateAction<string>> | ((str: string) => void),
    error?: string
}

const TextInput = ({ placeholder, value, setValue, error }: TextInputProps) => {
    return (
        <input 
            className="text-input" 
            value={value} 
            onChange={e => setValue(e.target.value)}
            placeholder={placeholder} 
            type="text"
        />
    );
}

export default TextInput;