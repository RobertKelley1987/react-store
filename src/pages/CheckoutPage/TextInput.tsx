import './TextInput.css';

type TextInputProps = {
    placeholder: string,
    value?: string,
    name: string,
    setValue: (e: React.ChangeEvent<HTMLInputElement>) => void
    error?: string
}

const TextInput = ({ placeholder, name, value, setValue, error }: TextInputProps) => {
    return (
        <input 
            className="text-input" 
            name={name}
            value={value} 
            onChange={setValue}
            placeholder={placeholder} 
            type="text"
        />
    );
}

export default TextInput;