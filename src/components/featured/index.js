import React from 'react';
import Carrousel from './carusel'
import CountDown from './countDown';

const Featured = () => {
    return ( 
        <div style={{position: 'relative'}}> 
            <Carrousel />
            <div className="artist_name">
                <div className="wrapper">
                    Ariana Grande
                </div>
            </div>
            <CountDown />
        </div>
     );
}
 
export default Featured;