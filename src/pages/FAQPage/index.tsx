import { useEffect } from 'react';
import { faqs } from '../../data/faqs';
import FAQ from './FAQ';
import './FAQPage.css';

const FAQPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="faq-page">
            <h1 className="faq-page-heading">FAQs</h1>
            <div className="faq-page-faqs">
                {faqs.map(faq => <FAQ faq={faq} />)}
            </div>
        </main>
    )
}

export default FAQPage;