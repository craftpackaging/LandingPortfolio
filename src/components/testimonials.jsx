/*import React, { Component } from "react";

export class testimonials extends Component {
  render() {
    return (
      <div id="testimonials">
        <div className="container">
          <div className="section-title text-center">
            <h2 style={{textTransform:"capitalize"} }>Brands that trust crafts packaging</h2>
          </div>
          <div className="row">
            {this.props.data
              ? this.props.data.map((d, i) => (
                  <div key={`${d.name}-${i}`} className="col-md-4">
                    <div className="testimonial">
                      <div className="testimonial-image">
                        {" "}
                        <img src={d.img} alt="" />{" "}
                      </div>
                      <div className="testimonial-content">
                        <p>"{d.text}"</p>
                        <div className="testimonial-meta"> - {d.name} </div>
                      </div>
                    </div>
                  </div>
                ))
              : "loading"}
          </div>
        </div>
      </div>
    );
  }
}

export default testimonials;*/

import React, { Component } from "react";
import '../files/horizontal.css';
import Zoom from 'react-reveal/Zoom';

export class testimonials extends Component {
  
  render() {

    return (
      <div id="testimonials" className="text-center">
        <div className="container">
          <div className="col-md-10 col-md-offset-1 section-title nocap">
            <h2 style={{textTransform:"capitalize"} }>Brands that trust crafts packaging</h2>
          </div>
          
          <div className="row">
            <div className="col-sm-4 col-md-2 testimonials-global-styles">
              {" "}
                <Zoom left>
                  <img src={require("../files/brand_images/abbott.png")} alt="Abbott" className="testimonials-styling"/>
                  <div>
                    <h3>Abbott</h3>
                  </div>
                </Zoom>
            </div>

            <div className="col-sm-4 col-md-2 testimonials-global-styles">
              {" "}
                <Zoom left>
                  <img src={require('../files/brand_images/camlin.png')} alt="Camlin" className="testimonials-styling"/>
                  <div>
                    <h3>Camlin</h3>
                  </div>
                </Zoom>
              
            </div>

            <div className="col-sm-4 col-md-2 testimonials-global-styles">
              {" "}
                <Zoom left>
                  <img src={require('../files/brand_images/future_group.png')} alt="Future Group" className="testimonials-styling"/>
                  <div>    
                    <h3>Future Group</h3>
                  </div>
                </Zoom>
              
            </div>

            <div className="col-sm-4 col-md-2 testimonials-global-styles">
              {" "}
              <Zoom left>
                <img src={require('../files/brand_images/maggi.png')} alt="Maggi" className="testimonials-styling"/>
                <div>
                  <h3>Maggi</h3>
                </div>
              </Zoom>
            </div>

            <div className="col-sm-4 col-md-2 testimonials-global-styles">
              {" "}
              <Zoom left>
                <img src={require('../files/brand_images/PandG.png')} alt="P and G" className="testimonials-styling"/>
                <div>
                  <h3>P and G</h3>
                </div>
              </Zoom>
            </div>

            <div className="col-sm-4 col-md-2 testimonials-global-styles">
              {" "}
                <Zoom left>
                  <img src={require('../files/brand_images/ferrero.png')} alt="Ferrero" className="testimonials-styling-ferrero"/>
                  <div>
                    <h3>Ferrero</h3>
                  </div>
                </Zoom>
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default testimonials;

