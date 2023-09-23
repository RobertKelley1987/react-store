import { useNavigate } from 'react-router-dom';
import { SHIPPING_METHODS } from '../../constants';
import { ShippingMethod } from '../../types';
import './ShippingMethodForm.css';

type ShippingMethodFormProps = {
    shippingMethod: ShippingMethod,
    setShippingMethod: React.Dispatch<React.SetStateAction<ShippingMethod>>
}

const ShippingMethodForm = ({ shippingMethod, setShippingMethod }: ShippingMethodFormProps) => {
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        navigate('/checkout/payment');
    }

    return (
        <div className="shipping-method-form-wrapper">
            <h2 className="shipping-method-form-heading">Shipping Method</h2>
            <form className="shipping-method-form" onSubmit={handleSubmit}>
                <fieldset>
                    <legend className="hidden">Shipping Options</legend>
                    {SHIPPING_METHODS.map(method => {
                        return (
                            <label htmlFor={method.name} className="shipping-method-form-label">
                                <div className="shipping-method-form-radio">
                                    <input 
                                        onChange={() => setShippingMethod(method)}
                                        value={method.name} 
                                        checked={shippingMethod.name === method.name}
                                        id={method.name} 
                                        name="shipping-method" 
                                        type="radio"
                                    />
                                    {method.name}: {method.days} business days
                                </div>
                                <span>${method.cost}</span>
                            </label>  
                        )
                    })}
                </fieldset>
                <button type="submit" className="button">Continue</button>
            </form>
        </div>
    );
}

export default ShippingMethodForm;