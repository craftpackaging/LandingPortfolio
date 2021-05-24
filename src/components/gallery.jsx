import React, { Component } from "react";
import Flippy, { FrontSide, BackSide } from 'react-flippy';

export class Gallery extends Component {
  render() {
    return (
      <div id="portfolio" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>Products</h2>
          
          </div>
          <div className="row-sm2 row-md-4 row-lg-6">
            <div className="portfolio-items">
              <div className="col-sm-12 col-md-6 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    <Flippy
                    flipOnHover={true} 
                    flipOnClick={true} 
                    flipDirection="horizontal" 
                    ref={(r) => this.flippy = r} 
                    style={{ height: '400px'}} 
                    >
                      <FrontSide
                        style={{
                          backgroundColor: '#fff',
                        }}
                      >
                      <img 
                        src={require("../files/gallery_images/Image1.png")} 
                        alt="Product 1"
                        style={{
                          margin: '-15px'
                        }}
                      />
                      </FrontSide>
                      <BackSide
                        style={{ backgroundImage: "linear-gradient(to right, #5ca9fb 0%, #6372ff 100%)",color: "#fff"}}>
                        <br/>
                        <h1 style={{fontFamily: 'Lobster'}}>COUNTER TOP</h1>
                        <br/>
                        <p>Our cardboard countertop displays area great way to roll out new products and ideal for POS opportunities Our bright counter displays help to capture attention and extend your branding</p>
                      </BackSide>
                    </Flippy>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row-sm2 row-md-4 row-lg-6">
            <div className="portfolio-items">
              <div className="col-sm-12 col-md-6 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    <Flippy
                    flipOnHover={true} 
                    flipOnClick={true} 
                    flipDirection="horizontal" 
                    ref={(r) => this.flippy = r} 
                     style={{  height: '400px' }}
                     >
                      <FrontSide
                        style={{
                          backgroundColor: '#fff',
                        }}
                      >
                      <img 
                        src={require("../files/gallery_images/Image2.png")} 
                        alt="Product 2"
                        style={{
                          margin: '-15px'
                        }}
                      />
                      </FrontSide>
                      <BackSide
                        style={{ backgroundImage: "linear-gradient(to right, #5ca9fb 0%, #6372ff 100%)",color: "#fff"}}>
                        <br/>
                        <h1 style={{fontFamily: 'Lobster'}}>FREE STANDING DISPLAY UNIT</h1>
                        <br/>
                        <p>FSDU is a stand-alone sales tool for high impact, ensuring new products to stand out from the crowd. FSDU is typically a shelved unit which offers increased product visibility, and maximise brand impact and boost product awareness.</p>
                      </BackSide>
                    </Flippy>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row-sm2 row-md-4 row-lg-6">
            <div className="portfolio-items">
              <div className="col-sm-12 col-md-6 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    <Flippy
                    flipOnHover={true} 
                    flipOnClick={true} 
                    flipDirection="horizontal" 
                    ref={(r) => this.flippy = r} 
                    style={{  height: '400px' }} 
                    >
                      <FrontSide
                        style={{
                          backgroundColor: '#ffff',
                        }}
                      >
                      <img 
                        src={require("../files/gallery_images/Image3.png")} 
                        alt="Product 3"
                        style={{
                          margin: '-15px'
                        }}
                      />
                      </FrontSide>
                      <BackSide
                        style={{ backgroundImage: "linear-gradient(to right, #5ca9fb 0%, #6372ff 100%)",color:"#fff"}}>
                        <br/>
                        <h1 style={{fontFamily: 'Lobster'}}>DUMPBIN</h1>
                        <br/>
                        <p>Dump bins are floor standing open display containers that are filled with small, loose products from which a consumer will shop. Dump bins are a fantastic retail ready solution that gives your product greater prominence in-store. Retail dump bins can be used to help launch a new range of products, ideal for an attractive placement of loose articles, promote special offers or encourage impulse buying. With the right structural design and artwork, dump bins can help you increase sales and stand out from the crowd.</p>
                      </BackSide>
                    </Flippy>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row-sm2 row-md-4 row-lg-6">
            <div className="portfolio-items">
              <div className="col-sm-12 col-md-6 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    <Flippy
                    flipOnHover={true} 
                    flipOnClick={true} 
                    flipDirection="horizontal" 
                    ref={(r) => this.flippy = r} 
                    style={{  height: '400px' }} 
                    >
                      <FrontSide
                        style={{
                          backgroundColor: '#fff',
                        }}
                      >
                      <img 
                        src={require("../files/gallery_images/Image4.png")} 
                        alt="Product 4"
                        style={{
                          margin: '-15px'
                        }}
                      />
                      </FrontSide>
                      <BackSide
                        style={{ backgroundImage: "linear-gradient(to right, #5ca9fb 0%, #6372ff 100%)", color: "#fff"}}>
                        <br/>
                        <h1 style={{fontFamily: 'Lobster'}}>STANDEE</h1>
                        <br/>
                        <p>Standees are eye-catching when used in conjunction with the right product offering, or can simply be an entertaining means of raising customer awareness about your product or brand. Printed standees can be profile cut to your graphic design or any other shape you desire. Standees and strut cards with your branding can really offer an excellent return on investment as part of your marketing strategy</p>
                      </BackSide>
                    </Flippy>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row-sm2 row-md-4 row-lg-6">
            <div className="portfolio-items">
              <div className="col-sm-12 col-md-6 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    <Flippy
                    flipOnHover={true} 
                    flipOnClick={true} 
                    flipDirection="horizontal" 
                    ref={(r) => this.flippy = r} 
                    style={{  height: '400px' }} 
                    >
                      <FrontSide
                        style={{
                          backgroundColor: '#fff'
                        }}
                      >
                      <img 
                        src={require("../files/gallery_images/Image5.png")} 
                        alt="Product 5"
                        style={{
                          margin: '-15px'
                        }}
                      />
                      </FrontSide>
                      <BackSide
                        style={{ backgroundImage: "linear-gradient(to right, #5ca9fb 0%, #6372ff 100%)", color: "#fff"}}>
                        <br/>
                        <h1 style={{fontFamily: 'Lobster'}}>FLOOR STANDING DISPLAY UNIT</h1>
                        <br/>
                        <p>Floor standing display stands help to persuade retailers to stock your products and ensure your retail sales are boosted.You can raise awareness of your brand whilst increasing sales with a custom floor standing display!</p>
                      </BackSide>
                    </Flippy>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row-sm2 row-md-4 row-lg-6">
            <div className="portfolio-items">
              <div className="col-sm-12 col-md-6 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    <Flippy
                    flipOnHover={true} 
                    flipOnClick={true} 
                    flipDirection="horizontal" 
                    ref={(r) => this.flippy = r} 
                    style={{  height: '400px' }} 
                    >
                      <FrontSide
                        style={{
                          backgroundColor: '#fff',
                        }}
                      >
                      <img 
                        src={require("../files/gallery_images/Image6.png")} 
                        alt="Product 6"
                        style={{
                          margin: '-15px'
                        }}
                      />
                      </FrontSide>
                      <BackSide
                        style={{ backgroundImage: "linear-gradient(to right, #5ca9fb 0%, #6372ff 100%)", color: "#fff"}}>
                        <br/>
                        <h1 style={{fontFamily: 'Lobster'}}>LEAFLET/BROCHURE HOLDER</h1>
                        <br/>
                        <p>Our cardboard brochure holders are ideal for businesses looking for an affordable way to display take-home pamphlets. The quick assembly design makes the instant display solution perfect for distributing information and promotions at pop-up events. These cardboard brochure holders are ideal for users traveling because they can be unfolded, stored, and easily transported.</p>
                      </BackSide>
                    </Flippy>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row-sm2 row-md-4 row-lg-6">
            <div className="portfolio-items">
              <div className="col-sm-12 col-md-6 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    <Flippy
                    flipOnHover={true} 
                    flipOnClick={true} 
                    flipDirection="horizontal" 
                    ref={(r) => this.flippy = r} 
                    style={{ height: '400px' }} 
                    >
                      <FrontSide
                        style={{
                          backgroundColor: '#fff',
                        }}
                      >
                      <img 
                        src={require("../files/gallery_images/Image7.png")} 
                        alt="Product 7"
                        style={{
                          margin: '-15px'
                        }}
                      />
                      </FrontSide>
                      <BackSide
                        style={{ backgroundImage: "linear-gradient(to right, #5ca9fb 0%, #6372ff 100%)", color: "#fff"}}>
                        <br/>
                        <h1 style={{fontFamily: 'Lobster'}}>MAILER BOX</h1>
                        <br/>
                        <p>Customized packaging with your own branding artwork. Your dimensions designed, your way Base your artwork using one of our professional and customizable dielines, Let your creativity show that your box is ahead of the pack with one of our fully customized dielines.</p>
                      </BackSide>
                    </Flippy>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row-sm2 row-md-4 row-lg-6">
            <div className="portfolio-items">
              <div className="col-sm-12 col-md-6 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    <Flippy
                    flipOnHover={true} 
                    flipOnClick={true} 
                    flipDirection="horizontal" 
                    ref={(r) => this.flippy = r} 
                    style={{  height: '400px' }} 
                    >
                      <FrontSide
                        style={{
                          backgroundColor: '#fff',
                        }}
                      >
                      <img 
                        src={require("../files/gallery_images/Image8.png")} 
                        alt="Product 8"
                        style={{
                          margin: '-15px'
                        }}
                      />
                      </FrontSide>
                      <BackSide
                        style={{ backgroundImage: "linear-gradient(to right, #5ca9fb 0%, #6372ff 100%)",color: "#fff"}}>
                        <br/>
                        <h1 style={{fontFamily: 'Lobster'}}>SHIPPER BOX</h1>
                        <br/>
                        <p>We’re proud to offer regular slotted containers that are made from the highest quality materials. Whether you want to use them for storage purposes or you need them to transport products from one location to another in a safe and secure fashion, we’re confident that you’ll find an RSC case to buy that meets your needs.</p>
                      </BackSide>
                    </Flippy>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row-sm2 row-md-4 row-lg-6">
            <div className="portfolio-items">
              <div className="col-sm-12 col-md-6 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    <Flippy
                    flipOnHover={true} 
                    flipOnClick={true} 
                    flipDirection="horizontal" 
                    ref={(r) => this.flippy = r} 
                    style={{  height: '400px' }} 
                    >
                      <FrontSide
                        style={{
                          backgroundColor: '#fff',
                        }}
                      >
                      <img 
                        src={require("../files/gallery_images/Image9.png")} 
                        alt="Product 9"
                        style={{
                          margin: '-15px'
                        }}
                      />
                      </FrontSide>
                      <BackSide
                        style={{ backgroundImage: "linear-gradient(to right, #5ca9fb 0%, #6372ff 100%)",color: "#fff"}}>
                        <br/>
                        <h1 style={{fontFamily: 'Lobster'}}>WINE AND SPIRITS PACKAGING</h1>
                        <br/>
                        <p>As your all-in-one packaging partner,We serve your craft beverage packaging needs, including:Custom bottle labels, Shipping boxes ,Beer and cider can trays, 4 and 6-pack bottle carriers,Wine carriers,Point-of-purchase retail displays, Sales kits</p>
                      </BackSide>
                    </Flippy>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row-sm2 row-md-4 row-lg-6">
            <div className="portfolio-items">
              <div className="col-sm-12 col-md-6 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    <Flippy
                    flipOnHover={true} 
                    flipOnClick={true} 
                    flipDirection="horizontal" 
                    ref={(r) => this.flippy = r} 
                    style={{  height: '400px' }} 
                    >
                      <FrontSide
                        style={{
                          backgroundColor: '#fff',
                        }}
                      >
                      <img 
                        src={require("../files/gallery_images/Image10.png")} 
                        alt="Product 10"
                        style={{
                          margin: '-15px'
                        }}
                      />
                      </FrontSide>
                      <BackSide
                        style={{ backgroundImage: "linear-gradient(to right, #5ca9fb 0%, #6372ff 100%)",color: "#fff" }}>
                        <br/>
                        <h1 style={{fontFamily: 'Lobster'}}>PEGBOARD/ HANGSELL</h1>
                        <br/>
                        <p>Our hangsells are suitable for displaying hang and sell packaged products as well as stocking packaged products. It can Hang on poles, used on end caps.</p>
                      </BackSide>
                    </Flippy>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row-sm2 row-md-4 row-lg-6">
            <div className="portfolio-items">
              <div className="col-sm-12 col-md-6 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    <Flippy
                    flipOnHover={true} 
                    flipOnClick={true} 
                    flipDirection="horizontal" 
                    ref={(r) => this.flippy = r} 
                    style={{  height: '400px' }} 
                    >
                      <FrontSide
                        style={{
                          backgroundColor: '#fff',
                        }}
                      >
                      <img 
                        src={require("../files/gallery_images/Image11.png")} 
                        alt="Product 11"
                        style={{
                          margin: '-15px'
                        }}
                      />
                      </FrontSide>
                      <BackSide
                        style={{ backgroundImage: "linear-gradient(to right, #5ca9fb 0%, #6372ff 100%)",color: "#fff"}}>
                        <br/>
                        <h1 style={{fontFamily: 'Lobster'}}>STACKING TRAY (PDQ)</h1>
                        <br/>
                        <p>“Pretty darn quick” are inexpensive, lightweight, simple to set up and stack up. The PDQ can be an attractive way to display the product and related items in a tray or stack.</p>
                      </BackSide>
                    </Flippy>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row-sm2 row-md-4 row-lg-6">
            <div className="portfolio-items">
              <div className="col-sm-12 col-md-6 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                  <Flippy
                    flipOnHover={true} 
                    flipOnClick={true} 
                    flipDirection="horizontal" 
                    ref={(r) => this.flippy = r} 
                    style={{  height: '400px' }} 
                    >
                      <FrontSide
                        style={{
                          backgroundColor: '#fff',
                        }}
                      >
                      <img 
                        src={require("../files/gallery_images/Image12.png")} 
                        alt="Product 12"
                        style={{
                          margin: '-15px'
                        }}
                      />
                      </FrontSide>
                      <BackSide
                        style={{ backgroundImage: "linear-gradient(to right, #5ca9fb 0%, #6372ff 100%)",color: "#fff"}}>
                        <br/>
                        <h1 style={{fontFamily: 'Lobster'}}>PROMOTIONAL PACKAGING</h1>
                        <br/>
                        <p>Sending out promotional products can be a fantastic way of raising brand awareness and increasing product sales,We offer custom industry-targeted  promotional and product club packaging designs for marketing and merchandisingOur smart promotional and sales packaging solutions ensure your products catch the eye at the PoS and help to ensure purchases.</p>
                      </BackSide>
                    </Flippy>
                  </div>
                </div>
              </div>
            </div>
          </div>
          

          {/* <div className="row">
            <div className="portfolio-items">
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
                    <div>
                      <a onClick={this.handleClick}
                        href="img/portfolio/01-large.jpg"
                        title="Project Title"
                        data-lightbox-gallery="gallery1"
                      >
                        <div className="hover-text">
                          <h4>Lorem Ipsum</h4>
                        </div>
                        <img
                          src="img/portfolio/01-small.jpg"
                          className="img-responsive"
                          alt="Project Title"
                        />{" "}
                      </a>{" "}
                      </div>
                      <div>
                     This is the back of the card.
                      <button onClick={this.handleClick}>Click to flip</button>
                      </div>
                  </ReactCardFlip>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
                    <div>
                    <a onClick={this.handleClick}
                      href="img/portfolio/02-large.jpg"
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Adipiscing Elit</h4>
                      </div>
                      <img
                        src="img/portfolio/02-small.jpg"
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                    </a>{" "}
                      </div>
                      <div>
                     This is the back of the card.
                      <button onClick={this.handleClick}>Click to flip</button>
                      </div>
                  </ReactCardFlip>
                   
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="img/portfolio/03-large.jpg"
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Lorem Ipsum</h4>
                      </div>
                      <img
                        src="img/portfolio/03-small.jpg"
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="img/portfolio/04-large.jpg"
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Lorem Ipsum</h4>
                      </div>
                      <img
                        src="img/portfolio/04-small.jpg"
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="img/portfolio/05-large.jpg"
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Adipiscing Elit</h4>
                      </div>
                      <img
                        src="img/portfolio/05-small.jpg"
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="img/portfolio/06-large.jpg"
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Dolor Sit</h4>
                      </div>
                      <img
                        src="img/portfolio/06-small.jpg"
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="img/portfolio/07-large.jpg"
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Dolor Sit</h4>
                      </div>
                      <img
                        src="img/portfolio/07-small.jpg"
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="img/portfolio/08-large.jpg"
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Lorem Ipsum</h4>
                      </div>
                      <img
                        src="img/portfolio/08-small.jpg"
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="img/portfolio/09-large.jpg"
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Adipiscing Elit</h4>
                      </div>
                      <img
                        src="img/portfolio/09-small.jpg"
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    );
  }
}

export default Gallery;
