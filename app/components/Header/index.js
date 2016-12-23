/**
*
* Header
*
*/

import React from 'react';


class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="header-append">

        <div className="container-fluid top-links hidden-sm-down">

          <div className="container container-sm">

            <ul className=" list-inline float-xs-left top-links">

              <li className="list-inline-item dropdown ">

                <a
                  className="nav-link dropdown-toggle waves-effect waves-light"
                  type="button"
                  id="dropdownMenu1"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="true">

                  <i className="fa fa-globe" aria-hidden="true" /> ENGLISH (US)
                  </a>

                  <div
                    className="dropdown-menu dropdown-default"
                    aria-labelledby="dropdownMenu1"
                    data-dropdown-in="fadeIn"
                    data-dropdown-out="fadeOut">

                    <a
                      className="dropdown-item waves-effect waves-light"
                      href="#">

                      ENGLISH (US)
                    </a>

                    <a
                      className="dropdown-item waves-effect waves-light"
                      href="#">

                      ENGLISH (US)
                    </a>

                    <a
                      className="dropdown-item waves-effect waves-light"
                      href="#">

                      ENGLISH (US)
                    </a>

                  </div>

                </li>

                <li className="list-inline-item dropdown">

                  <a
                    className="nav-link dropdown-toggle waves-effect waves-light"
                    type="button"
                    id="dropdownMenu2"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="true">$USD</a>

                  <div
                    className="dropdown-menu dropdown-default"
                    aria-labelledby="dropdownMenu2"
                    data-dropdown-in="fadeIn"
                    data-dropdown-out="fadeOut">

                    <a
                      className="dropdown-item waves-effect waves-light"
                      href="#">$USD</a>

                    <a
                      className="dropdown-item waves-effect waves-light"
                      href="#">$USD</a>

                  </div>

                </li>

                <li className="list-inline-item waves-effect waves-light">

                  <a href="#" className>

                    | DOWNLOAD APP |
                  </a>

                </li>

                <li className="list-inline-item waves-effect waves-light">

                  <a href="#">HELP &amp; SUPPORT </a>

                </li>

              </ul>

              <ul className="list-inline float-xs-right text-uppercase top">

                <li className="list-inline-item waves-effect waves-light">

                  <a href="login.html" className>

                    <i className="fa fa-sign-in" aria-hidden="true" /> Login |
                    </a>

                  </li>

                  <li className="list-inline-item waves-effect waves-light">

                    <a href="sign-up.html" className>

                      <i
                        className="fa fa-user-plus"
                        aria-hidden="true" /> SIGN UP
                      </a>

                    </li>

                  </ul>

                </div>

              </div>

              <div className="container container-sm top-header">

                <div className="row">

                  <div className="col-sm-4 col-xs-5 text-nowrap">

                    <span className="toggle-btn hidden-sm-down">

                      <a
                        href="#"
                        className
                        data-slide-menu-main=".main-navbar">

                        <span className="icon-bars">

                          <span />

                          <span />

                          <span />

                        </span>

                      </a>

                    </span>

                    <button
                      className="button-collapse navbar-toggler hidden-md-up"
                      type="button"
                      data-activates="slide-out">

                      <i className="fa fa-bars" />

                    </button>

                    <a href="#">

                      <img
                        src="/public/img/logo.png"
                        className="img-fluid logo"
                        alt />

                    </a>

                  </div>

                  <div className="col-sm-8 col-xs-7 position-static">

                    <ul className="nav navbar-nav top-nav clearfix hidden-sm-down">

                      {/*
                        <li class="nav-item toggle-btn">
                        <a href="#" class="" data-slide-menu-main=".main-navbar">
                        <span class="icon-bars">
                        <span></span>
                        <span></span>
                        <span></span>
                      </span>
                    </a>
                  </li>
                  */}
                  <li className="nav-item btn-link">

                    <a
                      href="#"
                      className="order-btn btn waves-effect waves-light btn-warning">

                      order    now
                    </a>

                  </li>

                  <li className="nav-item cart-icon">

                    <a href="#" className="cart-icon">

                      <img src="/public/img/cart.svg" alt />

                      <span className="hidden-sm-down">cart</span>

                    </a>

                  </li>

                </ul>

                <div className="clearfix" />

                <div className="text-lg-center text-md-right text-xs-right mobile-links">

                  <a
                    type="button"
                    data-toggle="modal"
                    data-target="#order-action"
                    className="order-btn btn waves-effect waves-light btn-warning hidden-md-up">

                    order now
                  </a>

                  <a href="#" className="cart-icon hidden-md-up">

                    <img src="img/cart.svg" alt />

                    <span className="hidden-sm-down">cart</span>

                  </a>

                  <a
                    data-slide-menu="#menu-mobile"
                    className="icon-off-canvas hidden-md-up">

                    <img src="/public/img/left-arrow-icon.png" alt="left" />

                  </a>

                </div>

              </div>

            </div>

          </div>

          {/*navigation for mobile Start*/}
          <div
            className="off-canvas-menu hidden-md-up"
            id="menu-mobile">

            <div className="menu-header">

              <ul className="list-inline">

                <li className="list-inline-item">

                  <a
                    href="#"
                    className="btn btn-outline-white text-uppercase">Login</a>

                </li>

                <li className="list-inline-item">

                  <a
                    href="#"
                    className="btn btn-black text-uppercase">

                    sign up
                  </a>

                </li>

              </ul>

              <a
                data-slide-menu="#menu-mobile"
                className="icon-off-canvas hidden-md-up">

                <img src="/public/img/left-arrow-icon.png" alt="left" />

              </a>

            </div>

            <ul className="list-unstyled off-canvas-menu-list fa-ul">

              <li>

                <a href="#" data-toggle="dropdown">

                  <i className="fa-li text-xs-center">

                    <img src="/public/img/us-flag.png" alt />

                  </i> English US <i
                  className="fa fa-angle-right fa-fixed-right"
                  aria-hidden="true" />
              </a>

              <div className="dropdown-menu">

                <a className="dropdown-item" href="#">

                  <img src="/public/img/us-flag.png" alt /> English US
                  </a>

                  <a className="dropdown-item active" href="#">

                    <img src="/public/img/us-flag.png" alt /> English US <i className="fa fa-check" />
                  </a>

                  <a className="dropdown-item" href="#">

                    <img src="/public/img/us-flag.png" alt /> English US
                    </a>

                    <a className="dropdown-item" href="#">

                      <img src="/public/img/us-flag.png" alt /> English US
                      </a>

                      <a className="dropdown-item" href="#">

                        <img src="/public/img/us-flag.png" alt /> English US
                        </a>

                      </div>

                    </li>

                    <li>

                      <a href="#" data-toggle="dropdown">

                        <i
                          className="fa fa-dollar fa-li"
                          aria-hidden="true" /> USD $ <i
                          className="fa fa-angle-right fa-fixed-right"
                          aria-hidden="true" />
                      </a>

                      <div className="dropdown-menu">

                        <a className="dropdown-item" href="#">

                          USD $
                        </a>

                        <a className="dropdown-item active" href="#">

                          USD $ <i className="fa fa-check" />
                      </a>

                      <a className="dropdown-item" href="#">

                        USD $
                      </a>

                      <a className="dropdown-item" href="#">

                        USD $
                      </a>

                      <a className="dropdown-item" href="#">

                        USD $
                      </a>

                    </div>

                  </li>

                  <li>

                    <a href="#">

                      <i
                        className="fa fa-li fa-android"
                        aria-hidden="true" /> Download App
                      </a>

                    </li>

                    <li>

                      <a href="#">

                        <i
                          className="fa fa-li fa-question-circle"
                          aria-hidden="true" /> Help &amp; Support
                        </a>

                      </li>

                    </ul>

                    <a
                      href="#"
                      className="btn btn-outline-white main-btn-free">

                      Free Embroidery Designs
                    </a>

                  </div>

                  {/*navigation for mobile End*/}
                  <hr className="border" />

                  <nav className="navbar navbar-dark  main-navbar slide-able">

                    {/* Collapse button*/}
                    <div className="container container-sm">

                      {/*Collapse content*/}
                      <div
                        className="collapse off-canvas-nav navbar-toggleable-xs "
                        id="collapseEx23">

                        {/*Navbar Brand*/}
                        <div className="navbar-header">

                          <button
                            className="navbar-toggler hidden-md-up"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapseEx23">

                            <i className="fa fa-close" />

                          </button>

                          <a href="#">

                            <img
                              src="/public/img/logo.svg"
                              className="img-fluid logo hidden-xs-up"
                              alt />

                          </a>

                        </div>

                        {/*Links*/}
                        <ul className="nav  navbar-nav text-uppercase flex-nav">

                          <li className="nav-item active">

                            <a
                              className="nav-link waves-effect waves-light animated fadeInDown"
                              href="#home">

                              Embroidery Digitizing
                            </a>

                          </li>

                          <li className="nav-item ">

                            <a
                              className="nav-link waves-effect waves-light animated fadeInDown"
                              href="#best-features">

                              Vector Conversion
                            </a>

                          </li>

                          <li className="nav-item">

                            <a
                              className="nav-link waves-effect waves-light animated fadeInDown"
                              href="#examples-of-use">

                              logo design
                            </a>

                          </li>

                          <li className="nav-item">

                            <a
                              className="nav-link waves-effect waves-light animated fadeInDown"
                              href="#testimonials">

                              free embroidery designs
                            </a>

                          </li>

                          <li className="nav-item">

                            <a
                              className="nav-link waves-effect waves-light animated fadeInDown"
                              href="#testimonials">pricing</a>

                          </li>

                          <li className="nav-item">

                            <a
                              className="nav-link waves-effect waves-light animated fadeInDown"
                              href="#testimonials">portfolio</a>

                          </li>

                          <li className="nav-item">

                            <a
                              className="nav-link waves-effect waves-light animated fadeInDown"
                              href="#testimonials">blog</a>

                          </li>

                        </ul>

                        {/*/Links*/}
                      </div>

                      {/*/.Collapse content*/}
                    </div>

                  </nav>

                  <ul
                    id="slide-out"
                    className="side-nav fixed default-side-nav hidden-md-up"
                    style={{transform: 'translateX(0px)'}}>

                    {/* Logo */}
                    <div className="logo-wrapper waves-light">

                      <a href="#">

                        <img
                          src="/public/img/logo.png"
                          className="img-fluid flex-center" />

                      </a>

                    </div>

                    {/*/. Logo */}
                    {/* Side navigation links */}
                    <ul className="collapsible text-capitalize collapsible-accordion">

                      <li>

                        <a href>

                          Embroidery Digitizing
                        </a>

                      </li>

                      <li>

                        <a href>

                          Vector Conversion
                        </a>

                      </li>

                      <li>

                        <a href>

                          logo design
                        </a>

                      </li>

                      <li>

                        <a href>

                          free embroidery designs
                        </a>

                      </li>

                      <li>

                        <a href>pricing</a>

                      </li>

                      <li>

                        <a href>portfolio</a>

                      </li>

                      <li>

                        <a href>blog</a>

                      </li>

                    </ul>

                    {/*/. Side navigation links */}
                  </ul>

                  {/*/. Sidebar navigation */}
                </div>

              );
            }
          }

          export default Header;
