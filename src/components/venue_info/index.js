import React from 'react';
import Zoom from 'react-reveal'
import icon_calendar from '../../resourses/images/icons/calendar.png'
import icon_location from '../../resourses/images/icons/location.png';



const Vanue = () => {
    return ( 
        <div className="bck_black">
            <div className="center_wrapper">
                <div className="vn_wrapper">
                <Zoom top duration={1000} delay={500} >
                    <div className="vn_item">
                        <div className="vn_outer">
                            <div className="vn_inner">
                                <div className="vn_icon_square bck_red"></div>
                                <div className="vn_icon"
                                    style={{background: `url(${icon_calendar})`}}> </div>
                                <div className="vn_title">
                                    Event Date && Time
                                </div>
                                <div className="vn_desc">
                                    31 Dec 2018 @9pm
                                </div>

                            </div>
                        </div>
                    </div>
                    </Zoom>
                    <Zoom delay={2000} bottom >
                    <div className="vn_item">
                        <div className="vn_outer">
                            <div className="vn_inner">
                                <div className="vn_icon_square bck_yellow"></div>
                                <div className="vn_icon"
                                    style={{background: `url(${icon_location})`}}> </div>
                                <div className="vn_title">
                                    Event Location
                                </div>
                                <div className="vn_desc">
                                    Event in Palace Hotel
                                </div>

                            </div>
                        </div>
                    </div>
                </Zoom> 
                </div>
            </div>
        </div>
     );
}
 
export default Vanue;