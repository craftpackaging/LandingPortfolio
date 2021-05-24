import React, { Component } from "react";
import Slider from 'react-animated-slider';
import '../files/horizontal.css';

export class products extends Component {
  
  render() {
    const slides = [
        {img:require('../files/product_images/products1.png')},
        {img:require('../files/product_images/products2.png')},
        {img:require('../files/product_images/products3.png')},
    ];
    return (
      <div id="products" className="text-center">
        <div className="container">
          
          <Slider autoplay = {1100}>
            {
              slides.map((slide, index) => 
              <div key={index} >
                <img src={slide.img} style={{width:1000,height:400}} alt="Slider Images" />
              </div>)
            }
          </Slider>
        </div>
        </div>
    );
  }
}

export default products;