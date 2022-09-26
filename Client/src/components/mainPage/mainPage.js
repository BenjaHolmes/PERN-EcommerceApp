import React from 'react';
import ProductSpotlight from './productSpotlight/productSpotlight';
import SeasonalDisplay from './seasonalDisplay/seasonalDisplay';
import ExploreNewProduct from './exploreNewProduct/exploreNewProduct';


const MainPage = () => {
    return (
        <div>
            
            <SeasonalDisplay />
            <ProductSpotlight />
            <ExploreNewProduct /> 
            
        </div>
    );
}

export default MainPage;
