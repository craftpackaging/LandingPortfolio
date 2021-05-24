import React, { Component } from "react";
import '../files/horizontal.css';
import Rotate from 'react-reveal/Rotate';

export class features extends Component {
  
  render() {

    return (
      <div id="features" className="text-center">
        <div className="container">
          <div className="col-md-10 col-md-offset-1 section-title nocap">
          <h2 style={{textTransform:"capitalize"} }>How <span style={{textTransform:"capitalize"}}> We </span> <span style={{textTransform:"capitalize"}}> Craft ?</span></h2>
          <p>We create a custom solution tailored to your needs. Our focus is on structure, reliability and integrity.</p>
          </div>
          
          <div className="row">
            <div className="col-md-15 col-sm-3">
              {" "}
                <Rotate top left>
                  <img src={require('../files/features_images/industry.svg')} className="features-styling" alt="Industry"/>
                  <div>
                    <h3>Industry Expertise</h3>
                  </div>
                </Rotate>
            
            </div>

            <div className="col-md-15 col-sm-3">
              {" "}
                <Rotate top left>
                  <img src={require('../files/features_images/concept.svg')} className="features-styling" alt="Concept"/>
                  <div>
                    <h3>Concept + Design</h3>
                  </div>
                </Rotate>
              
            </div>

            <div className="col-md-15 col-sm-3">
              {" "}
                <Rotate top left>
                  <img src={require('../files/features_images/manufacture.svg')} className="features-styling" alt="Manufacture"/>
                  <div>
                    <h3>Manufacture</h3>
                  </div>
                </Rotate>
              
            </div>

            <div className="col-md-15 col-sm-3">
              {" "}
                <Rotate top left>
                  <img src={require('../files/features_images/supplies.svg')} className="features-styling" alt="Supplies"/>
                  <div>    
                    <h3>Co-Packing + Supplies</h3>
                  </div>
                </Rotate>
              
            </div>

            <div className="col-md-15 col-sm-3">
              {" "}
              <Rotate top left>
                <img src={require('../files/features_images/distribution.svg')} className="features-styling" alt="Distribution"/>
                <div>
                  <h3>Distribution + Logistics</h3>
                </div>
              </Rotate>
            </div>
          
          </div>
        </div>
      </div>
    );
  }
}

export default features;
