import { useState, useEffect } from 'react';
import axios from 'axios';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from './PaymentForm';
import { CartItem } from '../../types';

type PaymentFormWrapperProps = {
    cart: CartItem[] // Needs to be converted from dollars to cents, ex: 10.34 should be 1034
}

const stripe = loadStripe('pk_test_51H2228AezT8y8XpmM6CCcLHEDtUl2QtPrNuOu2zL7ZLc6tD6nw782RJVD9RDqZ3BO00PkPKXUhA7WWWV3QiWc3tP00gWzkKhI9')

const PaymentFormWrapper = ({ cart }: PaymentFormWrapperProps) => {
    const [clientSecret, setClientSecret] = useState('');

    useEffect(() => {
        const fetchSecret = async () => {
            const { data } = await axios.post('/client-secret', { cart: cart });
            setClientSecret(data.clientSecret);
        }

        if(cart && cart.length > 0) {
            fetchSecret();
        }
    }, [cart]);

    const options = { clientSecret: clientSecret }

    const renderForm = () => {
        return (
            <Elements stripe={stripe} options={options}>
                <PaymentForm />
            </Elements>
        )
    }

    return clientSecret ? renderForm() : <span>Loading...</span>;
}

export default PaymentFormWrapper;