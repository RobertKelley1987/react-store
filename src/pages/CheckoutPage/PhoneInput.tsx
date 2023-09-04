import './PhoneInput.css';

type PhoneInputProps = {
    placeholder: string,
    value: string,
    setValue: React.Dispatch<React.SetStateAction<string>>,
    error?: string 
}

const NUMBERS = '0123456789';

const PhoneInput = ({ placeholder, value, setValue, error }: PhoneInputProps) => {
    const isANumber = new RegExp(/[0-9]/);
    
    const formattedNumber = (number: string) => {
        const phoneNumArr = number.split('').filter(char => isANumber.test(char));

        let areaCode = '', prefix = '', lineNumber = '';
        for(let i = 0; i < phoneNumArr.length; i++) {
            if(i < 3 && phoneNumArr[i]) 
                areaCode += phoneNumArr[i];
            else if(i < 6 && phoneNumArr[i])
                prefix += phoneNumArr[i];
            else if(phoneNumArr[i])    
                lineNumber += phoneNumArr[i];
        }

        const enteredThirdNum = number.length > value.length && areaCode.length === 3;

        if(lineNumber.length) {
            return `(${areaCode}) ${prefix}-${lineNumber}`
        } else if(enteredThirdNum || prefix.length) {
            return `(${areaCode}) ${prefix}`
        } else {
            return areaCode;
        }
    }
    return (
        <div className="phone-input-wrapper">
            <input 
                className="phone-input" 
                value={value} 
                onChange={e => setValue(formattedNumber(e.target.value))} 
                placeholder={placeholder} 
                type="tel"
                maxLength={14}
            />
        </div>
    );
}

export default PhoneInput;