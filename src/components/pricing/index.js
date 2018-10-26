import React, { Component } from 'react';
import MyButton from '../utils/button'
import Zoom from 'react-reveal';


class Pricing extends Component {
    state = {
        prices: [100,150,250],
        positions: ['Balcony','Medium','Star'],
        desc: [
            'has a tiny footprint and written specifically ',
            'Also, there are more complicated examples Lorem ipsum dolor sit.',
            'You may just wrap your custom would rather have a differen'

        ],
        linkto: ['https://github.com','https://c9.io','https://heroku.com'],
        delay: [900,200, 900]

    }
 showBoxes = () => (
     this.state.prices.map((box,i)=> (
        <Zoom delay={this.state.delay[i]} key={i}>
             <div className="pricing_item">
            <div className="pricing_inner_wrapper">
                <div className="pricing_title">
                    <span>${this.state.prices[i]}</span>
                    <span>{this.state.positions[i]}</span>
                </div>
                <div className="pricing_description">
                    {this.state.desc[i]}
                </div>
                <div className="pricing_buttons">
                    <MyButton
                    text="Purchase"
                    bck="#ffa800"
                    color='#fff'
                    link={this.state.linkto[i]}
                    ></MyButton>
                </div>
            </div>

         </div>
        </Zoom>
     ))
 )
    render() { 
        return ( 
            <div className="bck_black">
                <div className="center_wrapper pricing_section">
                    <h2>Pricing</h2>
                    <div className="pricing_wrapper">
                        {this.showBoxes()}
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Pricing;