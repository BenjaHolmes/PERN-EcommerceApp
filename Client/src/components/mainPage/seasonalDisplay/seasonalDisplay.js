import React from 'react';
import './seasonalDisplay.css';
import { imgSelector } from '../../../slices/mainPageSlice';
import { useSelector, useDispatch } from 'react-redux';
import { incrementCarousel, decrementCarousel } from '../../../slices/mainPageSlice';

const SeasonalDisplay = () => {
    const dispatch = useDispatch();
    const imgNumber = useSelector(imgSelector);
    const imgSrc = `/display/${imgNumber}.jpg`;
    
    return (
        <div>
            <div className='seasonalDisplay'>
                <i className='arrow right' onClick={() => dispatch(incrementCarousel())}></i>
                <img src={imgSrc} className="BG" alt="A Clothing Display" />
                <i className='arrow left' onClick={() => dispatch(decrementCarousel())}></i>
            </div>
            <h1 className='fashionText'> Experience The Winter '22 Collection. </h1>
        </div>
    );
}

export default SeasonalDisplay;
