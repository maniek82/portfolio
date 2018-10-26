import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import MyButton from '../../components/utils/button';

class Discount extends Component {
    state = {
        discountStart: 40,
        discountEnd: 10
    }
    percentage = () => {
        if(this.state.discountStart > this.state.discountEnd) {
            this.setState({
                discountStart: this.state.discountStart - 1
            })
        }
    }
    componentDidUpdate() {
        setTimeout(()=> {
            this.percentage()
        },100)
    }
    render() { 
        return (  
            <div className="center_wrapper">
                <div className="discount_wrapper">
                  <Fade
                  onReveal={()=>this.percentage()}
                  >
                    <div className="discount_porcentage">
                        <span>{this.state.discountStart}%</span>
                        <span>OFF</span>
                    </div>
                    </Fade>
                    <Slide right>

                    
                    <div className="discount_description">
                        <h3>Purchase tickets before 20th November</h3>
                        <p>To get your ticket much cheaper!</p>
                        
                        <MyButton
                        text="Purchase tickets"
                        bck="#ffa800"
                        color="#fff"
                        link="https://github.com"
                        />
                    </div>
                    </Slide>
                 
                </div>



            </div>

        );
    }
}
 
export default Discount;