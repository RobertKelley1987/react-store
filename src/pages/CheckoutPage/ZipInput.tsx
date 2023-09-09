import './ZipInput.css';

type ZipInputProps = {
    placeholder: string,
    name: string,
    value: string,
    setValue: (e: React.ChangeEvent<HTMLInputElement>) => void,
    error?: string
}

const ZipInput = ({ placeholder, name, value, setValue, error }: ZipInputProps) => {
    const isANumber = new RegExp(/[0-9]/);

    const validateZip = (zip: string) => {
        const newChar = zip[zip.length - 1];
        return isANumber.test(newChar) || zip === '';
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(validateZip(e.target.value)) setValue(e);
    }

    return (
        <input 
            className="zip-input"
            name={name} 
            value={value} 
            onChange={handleChange}
            placeholder={placeholder} 
            type="text"
            maxLength={5}
        />
    );
}

export default ZipInput;