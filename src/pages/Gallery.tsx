import React from "react";
import UseAnimatedCarousel from "../components/useAnimatedCarousel";

const Gallery = () => {
    const images = ['/images/1.jpeg', '/images/2.jpeg', '/images/3.jpeg', '/images/4.jpeg', '/images/5.jpeg']
    return (
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
            {
                images.map(i => (
                    <ul>
                        <li style={{listStyleType: 'none'}}>
                            <img style={{width: 300, height: 'auto'}}  src={i} alt=""/>
                        </li>
                    </ul>
                ))
            }

        </div>
    );
}

export default Gallery;
