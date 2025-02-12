import { useState, useEffect } from "react";
import '../Stylesheet/Carousel.css';

function Carousel({ image }) {
    const [currentImage, setCurrentImage] = useState(0);
    
    const movecarousel = () => {
        setCurrentImage((prev) => (prev + 1) % image.length);
    };

    useEffect(() => {
        const interval = setInterval(movecarousel, 5000);
        return () => clearInterval(interval);
    }, [movecarousel]);

    return (
        <section className="im" >
            <img src={image[currentImage]} alt="" />
        </section>
    );
}

export default Carousel;