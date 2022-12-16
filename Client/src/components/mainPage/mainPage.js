import React from 'react';
import ProductSpotlight from './productSpotlight/productSpotlight';
import SeasonalDisplay from './seasonalDisplay/seasonalDisplay';
import './mainPage.css';


const MainPage = () => {


    return (
        <div className='mainBody'>
            <SeasonalDisplay />
            <ProductSpotlight />
            <div className='logoDisplay'>
                <div className='logoHolder'> 
                    <img src={'/logos/l1.png'} />
                </div>
                <div className='logoHolder'> 
                    <img src={'/logos/l3.png'} />
                </div>
                <div className='logoHolder'> 
                    <img src={'/logos/l4.png'} />
                </div>
                <div className='logoHolder'> 
                    <img src={'/logos/l5.png'} />
                </div>
                <div className='logoHolder'> 
                    <img src={'/logos/l6.png'} />
                </div>
                <div className='logoHolder'> 
                    <img src={'/logos/l7.png'} />
                </div>
                <div className='logoHolder'> 
                    <img src={'/logos/l8.png'} />
                </div>
                <div className='logoHolder'> 
                    <img src={'/logos/l9.png'} />
                </div>
                <div className='logoHolder'> 
                    <img src={'/logos/l10.png'} />
                </div>
                <div className='logoHolder'> 
                    <img src={'/logos/l2.png'} />
                </div>
                <div className='logoHolder'> 
                    <img src={'/logos/l11.png'} />
                </div>
                <div className='logoHolder'> 
                    <img src={'/logos/l12.png'} />
                </div>
                <div className='logoHolder'> 
                    <img src={'/logos/l13.png'} />
                </div>
                <div className='logoHolder'> 
                    <img src={'/logos/l14.png'} />
                </div>
                <div className='logoHolder'> 
                    <img src={'/logos/l15.png'} />
                </div>
                <div className='logoHolder'> 
                    <img src={'/logos/l16.png'} />
                </div>
                <div className='logoHolder'> 
                    <img src={'/logos/l17.png'} />
                </div>
                <div className='logoHolder'> 
                    <img src={'/logos/l18.png'} />
                </div>
                <div className='logoHolder'> 
                    <img src={'/logos/l19.png'} />
                </div>
                <div className='logoHolder'> 
                    <img src={'/logos/l20.png'} />
                </div>
                <div className='logoHolder'> 
                    <img src={'/logos/l21.png'} />
                </div>
            </div>
        </div>
    );
}

export default MainPage;
