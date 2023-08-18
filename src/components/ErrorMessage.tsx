import './ErrorMessage.css';

type ErrorMessageProps = {
    errorMessage: string,
    setErrorMessage: React.Dispatch<React.SetStateAction<string>>
}

const ErrorMessage = ({ errorMessage, setErrorMessage }: ErrorMessageProps) => {
    return errorMessage ? <p className="error-message">{errorMessage}</p> : null;
}

export default ErrorMessage;