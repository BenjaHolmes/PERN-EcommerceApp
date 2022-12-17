import React from 'react';
import './productSpotlight.css';
import img1 from '../../../imgs/productSpotlightImgs/prod1.jpg';
import img2 from '../../../imgs/productSpotlightImgs/prod2.jpg';
import img3 from '../../../imgs/productSpotlightImgs/prod3.jpg';
import img4 from '../../../imgs/productSpotlightImgs/prod4.jpg';

const ProductSpotlight = () => {
    return (
        <div>
            <div className="spotlightHeader">
                <h3> NEW RANGE OF TRAINERS <span> COMING SOON </span> </h3>
            </div>
        <div className='spotlightContainer'>
            <div className='halfDiv'></div>
            <div className="div1">
                <img id='prod1' className='spotlightImg' src={img1} alt='Black Nike HighTops' />
                <div className="overlay">
                    <figcaption className='upperText'> Nike React Pegasus Trail 4 </figcaption>
                    <figcaption className='lowerText'> £145.00 </figcaption>
                </div>
            </div>
            <div className="div1">
                <img id='prod2' className='spotlightImg' src={img2} alt='Green and White Nike Running Shoes'/>
                <div className="overlay">
                    <figcaption className='upperText'> Nike Air Force 1 '07 LV8 UT </figcaption>
                    <figcaption className='lowerText'> £115.00 </figcaption>
                </div>
            </div>
            <div className="div1">
                <img id='prod3' className='spotlightImg' src={img3} alt='Black Nike Trainers'/>
                <div className="overlay">
                    <figcaption className='upperText'> Nike Air Max Alpha TR 4 </figcaption>
                    <figcaption className='lowerText'> £73.00 </figcaption>
                </div>
            </div>
            <div className="div1">
                <img id='prod4' className='spotlightImg' src={img4} alt='Brown Nike Tennis Shoes'/>
                <div className="overlay">
                    <figcaption className='upperText'> Nike Downshifter 12 </figcaption>
                    <figcaption className='lowerText'> £60.00 </figcaption>
                </div>
            </div>
            <div className='halfDiv'></div>

        </div>
        <div className="spotlightFooter">
                <h4> SIGN UP TO THE MAILING LIST TO PRE-ORDER </h4>
            </div>
        </div>
    );
}

export default ProductSpotlight;
