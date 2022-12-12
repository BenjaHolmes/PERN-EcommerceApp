import React from 'react';
import ProductSpotlight from './productSpotlight/productSpotlight';
import SeasonalDisplay from './seasonalDisplay/seasonalDisplay';



const MainPage = () => {


    return (
        <div>
            <SeasonalDisplay />
            <ProductSpotlight />
            
        </div>
    );
}

export default MainPage;
