import { useState, useEffect } from 'react';
import './ImgCarousel.css';

type ImgCarouselProps = {
    images?: string[],
    productType?: string
}

const ImgCarousel = ({ images, productType }: ImgCarouselProps) => {
    const [selectedImg, setSelectedImg] = useState('');

    const renderClassNames = (img: string) => {
        return selectedImg === img ? 'img-carousel-img' : 'img-carousel-img img-carousel-img-transparent'
    }
    
    useEffect(() => {
        if(images) {
            setSelectedImg(images[0]);
        }
    }, [images])

    return (
        <div className="img-carousel">
            <img alt={productType} src={`/imgs/${selectedImg}.jpg`} className="img-carousel-img"/>
            <div className="img-carousel-imgs-wrapper">
                {images?.map(image => {
                    return (
                        <div className="img-carousel-img-wrapper" onClick={() => setSelectedImg(image)}>
                            <img alt={productType} src={`/imgs/${image}.jpg`} className={renderClassNames(image)}/>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default ImgCarousel;