import React from 'react';
import ProductSpotlight from './productSpotlight/productSpotlight';
import SeasonalDisplay from './seasonalDisplay/seasonalDisplay';



const MainPage = () => {


    return (
        <div className='mainBody'>
            <SeasonalDisplay />
            <ProductSpotlight />
            
        </div>
    );
}

export default MainPage;
