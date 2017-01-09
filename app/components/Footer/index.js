/**
*
* Footer
*
*/

import React from 'react';


class Footer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="footer-append">
        <div className="footer">
          <div className="container container-sm">
            <div className="row">
              <div className="col-xs-12 footer-col-1">
                <h3>Join Our Community</h3>
                <form action>
                  <input type="text" placeholder="Your email for newsletters..." />
                  <button type="submit" className="btn waves-effect waves-light">Submit</button>
                </form>
              </div>
              <div className="col-xs-12 footer-col-2">
                <h3>latest blog post</h3>
                <div className="icon-with-block">
                  <i className="fa fa-plus-square-o" aria-hidden="true" />
                  <h4> How to dIgitize a logo for embroidery?</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do iusmod tempor incididunt ut labore et dolore. <span>23 December, 2014</span></p>
                </div>
              </div>
              <div className="col-xs-12 footer-col-3">
                <h3>Give Us a Call</h3>
                <ul className="list-unstyled fa-ul">
                  <li><i className="fa fa-li fa-phone" aria-hidden="true" /> 1-888-207-0136</li>
                  <li><i className="fa fa-li fa-fax" aria-hidden="true" /> 1-888-207-0136</li>
                  <li>24 Hours a day-7 Days a week</li>
                </ul>
                <img src="/public/img/footer-logo.png" className="footer-g-logo" alt="#" />
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container container-sm">
            <div className="row">
              <div className="col-md-4">
                <ul className="list-inline">
                  <li><a href={ void(0) }><img src="/public/img/fb-icon.png" alt="#" /></a></li>
                  <li><a href={ void(0) }><img src="/public/img/tw-icon.png" alt="#" /></a></li>
                  <li><a href={ void(0) }><img src="/public/img/g-plus-icon.png" alt="#" /></a></li>
                  <li><a href={ void(0) }><img src="/public/img/pin-icon.png" alt="#" /></a></li>
                  <li><a href={ void(0) }><img src="/public/img/blog-icon.png" alt="#" /></a></li>
                  <li><a href={ void(0) }><img src="/public/img/yt-icon.png" alt="#" /></a></li>
                  <li><a href={ void(0) }><img src="/public/img/rss-icon.png" alt="#" /></a></li>
                  <li><a href={ void(0) }><img src="/public/img/lk-icon.png" alt="#" /></a></li>
                </ul>
              </div>
              <div className="col-md-3">
                <ul className="list-inline text-xs-center text-bottom-list">
                  <li><a href={ void(0) }>About Us</a></li>
                  <li><a href={ void(0) }>Terms and Conditions</a></li>
                  <li><a href={ void(0) }>Privacy Policy</a></li>
                </ul>
              </div>
              <div className="col-md-5">
                <ul className="list-inline text-md-right">
                  <li><img src="/public/img/Visa.png" alt="#" /></li>
                  <li><img src="/public/img/PayPal.png" alt="#" /></li>
                  <li><img src="/public/img/Mastercard.png" alt="#" /></li>
                  <li><img src="/public/img/JCB.png" alt="#" /></li>
                  <li><img src="/public/img/Discover-Network.png" alt="#" /></li>
                  <li><img src="/public/img/American-Express.png" alt="#" /></li>
                  <li><img src="/public/img/Maestro.png" alt="#" /></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <a href={ void(0) } id="back-to-top"><i className="fa fa-arrow-up" aria-hidden="true" /></a>
      </div>
    );
  }
}

export default Footer;
