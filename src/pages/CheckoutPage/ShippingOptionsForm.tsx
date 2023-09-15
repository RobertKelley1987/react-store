import { SHIPPING_METHODS } from '../../constants';
import { ShippingMethod } from '../../types';
import './ShippingOptionsForm.css';

type ShippingOptionsFormProps = {
    setShippingMethod: React.Dispatch<React.SetStateAction<ShippingMethod>>
}

const ShippingOptionsForm = ({ setShippingMethod }: ShippingOptionsFormProps) => {
    return (
        <fieldset>
            {SHIPPING_METHODS.map(method => {
                return (
                    <div>
                        
                    </div>
                )
            })}
        </fieldset>
    );
}

export default ShippingOptionsForm;