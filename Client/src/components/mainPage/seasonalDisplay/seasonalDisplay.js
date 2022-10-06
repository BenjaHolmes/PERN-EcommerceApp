import React from 'react';
import img1 from '../../../imgs/display2.jpg';
// import img2 from '../../imgs/display3.jpg';
// import img3 from '../../imgs/display4.jpg';
import { useState } from 'react';
import './seasonalDisplay.css';

const SeasonalDisplay = () => {
    const [imgNumber] = useState(img1);
    /* useEffect(() => {
        setInterval(() => {
            switch (imgNumber) {
                case img1:
                    setImgNumber(img2); 
                    break;
                case img2:
                    setImgNumber(img3);
                    break;
                case img3:
                    setImgNumber(img1);
                    break;
                default:
                    console.log("default hit");
                }
        }, 5000); 
    }, [imgNumber]); */
    return (
        <div>
            <img src={imgNumber} className="BG" alt="A Clothing Display" />
            <h1 className='fashionText'> Experience The Autumn '22 Collection. </h1>
        </div>
    );
}

export default SeasonalDisplay;
