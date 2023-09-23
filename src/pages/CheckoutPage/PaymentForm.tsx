import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';

type PaymentFormProps = {}

const PaymentForm = ({}: PaymentFormProps) => {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(!stripe || !elements) {
            return
        }

        const result = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: 'http://localhost:3000/order-success'
            }
        });

        if(result.error) {
            // right here, if there was an error, I need to show an error message to the user
            console.log(result.error);
            console.log("error");
        } else {

        }
    }

 
    return (
        <form onSubmit={handleSubmit}>
            <PaymentElement />
            <button type="submit" disabled={!stripe}>Submit</button>
        </form>
    );
}

export default PaymentForm;