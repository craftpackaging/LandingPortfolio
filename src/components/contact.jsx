/*import React, { Component } from "react";

export class Contact extends Component {
  render() {
    return (
      <div>
        <div id="contact">
          <div className="container">
            <div className="col-md-8">
              <div className="row">
                <div className="section-title">
                  <h2>Get In Touch</h2>
                  <p>
                    Please fill out the form below to send us an email and we
                    will get back to you as soon as possible.
                  </p>
                </div>
                <form name="sentMessage" id="contactForm" noValidate>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          id="name"
                          className="form-control"
                          placeholder="Name"
                          required="required"
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="email"
                          id="email"
                          className="form-control"
                          placeholder="Email"
                          required="required"
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <textarea
                      name="message"
                      id="message"
                      className="form-control"
                      rows="4"
                      placeholder="Message"
                      required
                    ></textarea>
                    <p className="help-block text-danger"></p>
                  </div>
                  <div id="success"></div>
                  <button type="submit" className="btn btn-custom btn-lg">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
            <div className="col-md-3 col-md-offset-1 contact-info">
              <div className="contact-item">
                <h3>Contact Info</h3>
                <p>
                  <span>
                    <i className="fa fa-map-marker"></i> Address
                  </span>
                  {this.props.data ? this.props.data.address : "loading"}
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-phone"></i> Phone
                  </span>{" "}
                  {this.props.data ? this.props.data.phone : "loading"}
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-envelope-o"></i> Email
                  </span>{" "}
                  {this.props.data ? this.props.data.email : "loading"}
                </p>
              </div>
            </div>
            <div className="col-md-12">
              <div className="row">
                <div className="social">
                  <ul>
                    <li>
                      <a
                        href={this.props.data ? this.props.data.facebook : "https://www.facebook.com"}
                        rel="nofollow"
                      >
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href={this.props.data ? this.props.data.twitter : "/"}>
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href={this.props.data ? this.props.data.youtube : "/"}>
                        <i className="fa fa-youtube"></i>
                      </a>
                    </li>
                    <li>
                      <a href={this.props.data ? this.props.data.instagram : "https://www.instagram.com/valueaddition18/"} rel="nofollow">
                        <i className="fa fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href={this.props.data ? this.props.data.instagram : "https://www.instagram.com/valueaddition18/"} rel="nofollow">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href={this.props.data ? this.props.data.instagram : "https://www.instagram.com/valueaddition18/"} rel="nofollow">
                        <i className="fa fa-whatsapp"></i>
                      </a>
                    </li>
                    <li>
                      <a href={this.props.data ? this.props.data.instagram : "https://www.instagram.com/valueaddition18/"} rel="nofollow">
                        <i className="fa fa-shopping-cart"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="footer">
          <div className="container text-center">
            <p>
              &copy; 2021 craftpackaging Ltd. | All Rights Reserved | Designed by{" "}
              <a href="https://www.rahulbhatia.tech" rel="nofollow">
                Rahulbhatia.tech
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;*/

import React, { Component } from "react";

export class Contact extends Component {
  render() {
    return (
      <div>
        <div id="contact">
          <div className="container">
              <div className="row">
                <div className="section-title">
                  <h2 style={{textAlign: 'center'}}>Get In Touch</h2>
                    <p>
                      <span className="contact-title">
                        <i className="fa fa-map-marker"></i>  Address
                      </span>
                      <br/><br/>
                      {this.props.data ? this.props.data.address : "loading"}
                    </p>
                    <br/>
                    <p>
                      <span className="contact-title">
                        <i className="fa fa-phone contact-title"></i>  Phone
                      </span>{" "}
                      <br/><br/>
                      {this.props.data ? this.props.data.phone : "loading"}
                    </p>
                    <br/>
                    <p>
                      <span className="contact-title">
                        <i className="fa fa-envelope-o contact-title"></i>  Email
                      </span>{" "}
                      <br/><br/>
                      {this.props.data ? this.props.data.email : "loading"}
                    </p>
                    <br/>
                </div>
              </div>
            
            <div className="col-md-12">
              <div className="row">
                <div className="social">
                  <ul>
                    <li>
                      <a href="https://www.facebook.com/craft.packagin/">
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://wa.me/message/2D3PZE4R7E6EE1">
                        <i className="fa fa-whatsapp"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://g.co/kgs/48FyVW">
                        <i className="fa fa-google"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.youtube.com/channel/UCMyr8cpXPBGLYl3xlcwDmcQ/featured">
                        <i className="fa fa-youtube"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/craft.packaging/?utm_medium=copy_link">
                        <i className="fa fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/company/craftpackaging">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://m.indiamart.com/craft-packaging-mumbai/">
                        <i className="fa fa-shopping-cart"></i>
                      </a>
                    </li>
                    
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="footer">
          <div className="container text-center">
            <p>
              &copy; 2021 craftpackaging Ltd. | All Rights Reserved | Designed by{" "}
              <a href="https://www.simranbhagwandasani.tech" rel="nofollow">
              simranbhagwandasani.tech
              </a> 
              &nbsp;&&nbsp;
              <a href="https://www.rahulbhatia.tech" rel="nofollow">
                Rahulbhatia.tech
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;

