import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
import { CartItem } from '../../types';
import './CheckoutPage.css';

type CheckoutPageProps = {
    cart: CartItem[],
    setCheckingOut: React.Dispatch<React.SetStateAction<boolean>>
}

const CheckoutPage = ({ cart, setCheckingOut }: CheckoutPageProps) => {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [streetLine1, setStreetLine1] = useState('');
    const [streetLine2, setStreetLine2] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');

    useEffect(() => {
        setCheckingOut(true);

        return () => setCheckingOut(false);
    }, []);

    return (
        <div className="checkout-page">
            <header>
                <h1 className="checkout-page-logo">Infinite Bliss</h1>
                <nav className="checkout-page-nav">
                    <Link to='/cart'>Cart</Link>
                    <span className="material-symbols-outlined">chevron_right</span>
                    <button>Info</button>
                    <span className="material-symbols-outlined">chevron_right</span>
                    <button>Shipping</button>
                    <span className="material-symbols-outlined">chevron_right</span>
                </nav>
            </header>

            <CheckoutForm />
        </div>
    )
}

export default CheckoutPage;