import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`



body {
  font-family: 'StoneSansIIITCW01-Md';
}
.divider-new,
.text-fluid,
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 400;
}
a {
  color: #0088cc;
}
.center-block {
  margin-left: auto;
  margin-right: auto;
}
.btn-default {
  background: #40c1a0;
}
.full-width {
  width: 100%;
}
.row-right {
  margin-left: 15px;
}
.pull-sm-right {
  float: right !important;
}
.pull-xs-right {
  float: right;
}
.row-left {
  margin-left: -15px;
}
.margin-left-20 {
  margin-left: 20px;
}
.margin-zero {
  margin: 0 !important;
}
a#back-to-top {
  position: fixed;
  right: 10px;
  bottom: 10px;
  height: 56px;
  width: 53px;
  text-align: center;
  background: #422b63;
  color: #fff;
  font-size: 30px;
  line-height: 56px;
  border-radius: 4px;
  -webkit-transition: 0.3s;
  -moz-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
}
a#back-to-top i {
  -webkit-transition: 0.3s;
  -moz-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
}
a#back-to-top:hover {
  background: #40c1a0;
}
a#back-to-top:hover i {
  animation: 0.8s arrowMove linear infinite;
}
@keyframes arrowMove {
  0% {
    transform: translateY(0px);
  }
  33% {
    transform: translateY(-5px);
  }
  66% {
    transform: translateY(0px);
  }
  90% {
    transform: translateY(5px);
  }
  100% {
    transform: translateY(0px);
  }
}
@-webkit-keyframes arrowMove {
  0% {
    transform: translateY(0px);
  }
  33% {
    transform: translateY(-5px);
  }
  66% {
    transform: translateY(0px);
  }
  90% {
    transform: translateY(5px);
  }
  100% {
    transform: translateY(0px);
  }
}
@-ms-keyframes arrowMove {
  0% {
    transform: translateY(0px);
  }
  33% {
    transform: translateY(-5px);
  }
  66% {
    transform: translateY(0px);
  }
  90% {
    transform: translateY(5px);
  }
  100% {
    transform: translateY(0px);
  }
}
@media only screen and (min-width: 0) {
  html {
    font-size: 13px;
  }
}
@media (min-width: 992px) {
  html {
    font-size: 14px;
  }
}
.navbar-divider,
.navbar-nav .nav-item + .nav-item,
.navbar-nav .nav-link + .nav-link {
  margin-left: 0.71428571rem;
}
.top-header {
  padding: 0.78571429rem 15px;
  position: relative;
}
.top-header .logo {
  max-width: 245px;
  width: 100%;
}
.top-header .order-btn {
  font-size: 1rem;
  border: 1px solid #ee6f3c !important;
  background: transparent;
  color: #434343 !important;
  text-transform: uppercase;
  margin: 0;
  margin-top: 0;
  margin-right: 20px;
  padding: 7px 20px;
}
.top-header .order-btn:hover {
  color: #fff !important;
  background: #ee6f3c !important;
}
.top-header .cart-icon {
  float: right;
  margin-top: 5px;
  color: #434343;
  text-transform: uppercase;
  vertical-align: middle;
}
.top-header .cart-icon i {
  font-size: 1.7rem;
  vertical-align: middle;
}
.top-header .cart-icon img {
  max-width: 33px;
}
.top-header .col-xs-8 {
  position: static;
}
.top-nav {
  float: right;
  margin-top: 20px;
}
.top-nav li a {
  margin: 0;
  color: #434343;
}
.top-nav li a.dropdown-toggle {
  padding: 0;
}
.top-nav li.btn-link a {
  font-size: 14px;
  padding: 7px 15px;
}
.top-nav li.btn-link + li {
  margin-left: 0.35714286rem;
}
.top-nav li.cart-icon {
  padding: 0 !important;
  margin-top: 0 !important;
}
.top-nav li .btn {
  text-transform: uppercase;
  border: 1px solid #40c1a0;
}
.top-nav li .btn.btn-lined {
  background: transparent;
  color: #40c1a0 !important;
}
.top-nav li .btn.btn-lined:hover {
  color: #fff !important;
  background: #40c1a0 !important;
}
.top-nav li.nav-item {
  padding: 5px 0;
}
.top-nav li.btn-link {
  padding: 0;
}
.top-nav li:nth-last-child(2) {
  border-right: 1px solid #b1b1b1;
  margin-right: 23px !important;
  padding-right: 23px;
}
.toggle-btn {
  float: left;
}
.toggle-btn .icon-bars {
  display: inline-block;
  width: 30px;
  height: 24px;
  position: relative;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  cursor: pointer;
  top: 20px;
  margin-right: 10px;
}
.toggle-btn .icon-bars span {
  display: block;
  position: absolute;
  height: 4px;
  width: 100%;
  background: #d3531a;
  border-radius: 9px;
  opacity: 1;
  left: 0;
  -webkit-transition: 0.3s;
  -moz-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
}
.toggle-btn .icon-bars span:nth-child(1) {
  top: 0;
  background: #40c1a0;
}
.toggle-btn .icon-bars span:nth-child(2) {
  top: 10px;
  background: #ffcd6c;
}
.toggle-btn .icon-bars span:nth-child(3) {
  top: 20px;
  background: #ee6f3c;
}
.toggle-btn .icon-bars.open span:nth-child(1) {
  top: 10px;
  background: #4e3e6d;
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
}
.toggle-btn .icon-bars.open span:nth-child(2) {
  display: none;
}
.toggle-btn .icon-bars.open span:nth-child(3) {
  top: 10px;
  background: #4e3e6d;
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
}
.main-navbar {
  background: #ee6f3c;
  border-radius: 0;
  padding-top: 0;
  padding-bottom: 0;
}
.main-navbar.slide-able {
  display: none;
}
.main-navbar ul.nav.flex-nav {
  display: -webkit-box;
  display: -moz-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -moz-box-pack: justify;
  -ms-flex-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
}
.main-navbar ul.nav.flex-nav li {
  vertical-align: middle;
  position: relative;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  float: none;
  margin: 0;
  white-space: nowrap;
}
.main-navbar ul.nav.flex-nav li.active {
  background: transparent !important;
}
.main-navbar ul.nav.flex-nav li a {
  font-size: 1.07142857rem;
  color: #f4f4f4 !important;
}
.main-navbar ul.nav.flex-nav li:first-child a {
  padding-left: 0 !important;
}
.main-navbar ul.nav.flex-nav li:last-child a {
  padding-right: 0 !important;
}
.main-navbar .navbar-nav .nav-item.active:after {
  content: '';
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-top: 8px solid #ee6f3c;
  position: absolute;
  top: 100%;
  z-index: 10;
  left: 0;
  right: 0;
  margin: 0 auto;
}
.login-box {
  max-width: 400px;
  margin: 0 auto;
  padding-top: 45px;
  padding-bottom: 100px;
}
.login-box h2 {
  font-size: 2.57142857rem;
  text-align: center;
  padding-bottom: 15px;
  border-bottom: 1px solid #e2e2e2;
  margin-bottom: 20px;
}
.login-box .login-box-top {
  display: block;
  text-align: center;
  font-size: 0.92857143rem;
  color: #9b9b9b;
  margin-bottom: 35px;
}
.login-box .login-box-top a {
  text-transform: uppercase;
}
.login-box .md-form {
  position: relative;
}
.login-box .md-form i {
  position: absolute;
  left: 0;
  top: 10px;
  color: #bcbcbc;
}
.login-box .md-form input {
  padding-left: 26px;
  padding-bottom: 16px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  color: #000;
  font-size: 1rem;
}
.login-box .md-form input::-webkit-input-placeholder {
  color: #bcbcbc;
}
.login-box .md-form input:-moz-placeholder {
  color: #bcbcbc;
}
.login-box .md-form input::-moz-placeholder {
  color: #bcbcbc;
}
.login-box .md-form input:-ms-input-placeholder {
  color: #bcbcbc;
}
.login-box .md-form input:focus {
  border-bottom: 1px solid #0088cc;
  box-shadow: 0 1px 0 0 #0088cc;
}
.login-box .md-form.no-icon input {
  padding-left: 0;
}
.login-box button.btn {
  font-size: 14px;
  width: 100%;
  margin: 0;
  background: #0088cc;
  padding: 13px;
  margin-top: 10px;
}
.login-box button.btn:hover,
.login-box button.btn:focus {
  background: #0088cc !important;
}
.login-box #forgot-form {
  padding-top: 43px;
}
.login-box #forgot-form label {
  font-size: 15px;
  color: #434343;
  display: block;
  height: auto;
  margin-bottom: 20px;
}
.login-box #forgot-form label span {
  display: block;
  font-size: 13px;
  color: #6f6d6d;
}
.login-box #forgot-form .btn {
  background: #ee6f3c;
  margin-top: 25px;
}
.login-box #forgot-form .btn:hover {
  background: #ee6f3c !important;
}
.login-box .form-footer {
  margin-top: 20px;
}
.login-box .form-footer label {
  font-size: 13px;
  vertical-align: top;
  height: 19px;
  line-height: 20px;
}
.login-box .form-footer a {
  color: #0088cc;
}
.login-box .hr-block {
  margin: 40px 0;
  text-align: center;
  font-size: 16px;
}
.login-box .hr-block hr {
  border-color: #e2e2e2;
  margin: 0;
}
.login-box .hr-block span {
  display: inline-block;
  background: #fff;
  top: -14px;
  position: relative;
  padding: 0 15px;
}
.login-box .social-btn {
  color: #617ac3 !important;
  border: 1px solid #617ac3;
  margin: 0;
  width: 100%;
  text-align: left;
}
.login-box .social-btn > i {
  font-size: 30px;
  display: inline-block;
  vertical-align: middle;
  margin-right: 15px;
  margin-top: 0;
}
.login-box .social-btn span {
  display: inline-block;
  vertical-align: middle;
  text-align: justify;
}
.login-box .social-btn:hover,
.login-box .social-btn:focus {
  background: #617ac3;
  color: #fff !important;
}
.login-box .social-btn.red-btn {
  color: #de4c35 !important;
  border: 1px solid #de4c35;
}
.login-box .social-btn.red-btn:hover,
.login-box .social-btn.red-btn:focus {
  background: #de4c35;
  color: #fff !important;
}
.login-box .row {
  margin: 0 -8px;
}
.login-box [class^="col-"] {
  padding-right: 8px;
  padding-left: 8px;
}
.login-box [type=checkbox] + label {
  position: relative;
  height: auto;
  font-size: 13px;
  color: #434343;
  padding-left: 29px;
}
.top-links {
  background: #4e3e6d;
}
.top-links ul {
  margin-top: 11px;
  margin-bottom: 11px;
}
.top-links ul li {
  vertical-align: middle;
}
.top-links ul li a {
  color: #fff !important;
  padding: 5px 0;
  font-size: 13px;
}
.top-links ul li.dropdown {
  line-height: 9px !important;
}
.top-links ul li.dropdown .dropdown-menu {
  background: #fff;
}
.top-links ul li.dropdown .dropdown-menu a {
  color: #4e3e6d !important;
}
.top-links ul.top-links-first {
  margin-top: 7px;
}
.footer {
  background: #212121;
  color: #fff;
  padding-bottom: 40px;
}
.footer .footer-col-1 {
  width: 26.2%;
}
.footer .footer-col-1 form input {
  background-color: #ffffff;
  -webkit-border-radius: 10px;
  -webkit-background-clip: padding-box;
  -moz-border-radius: 10px;
  -moz-background-clip: padding;
  border-radius: 10px;
  background-clip: padding-box;
  padding: 8px 10px;
  box-shadow: none;
  border: 0;
  height: 32px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  color: #879598;
}
.footer .footer-col-1 form input::-webkit-input-placeholder {
  color: #879598;
}
.footer .footer-col-1 form input:-moz-placeholder {
  color: #879598;
}
.footer .footer-col-1 form input::-moz-placeholder {
  color: #879598;
}
.footer .footer-col-1 form input:-ms-input-placeholder {
  color: #879598;
}
.footer .footer-col-1 form input:focus {
  box-shadow: none;
  border: 0;
}
.footer .footer-col-1 form .btn {
  background-image: -moz-linear-gradient(90deg, #fa8b60 0%, #fea38f 99%);
  background-image: -webkit-linear-gradient(90deg, #fa8b60 0%, #fea38f 99%);
  background-image: -ms-linear-gradient(90deg, #fa8b60 0%, #fea38f 99%);
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.75), inset 0px 1px 0.73px 0.27px rgba(255, 255, 255, 0.004);
  margin: 0;
  float: right;
  margin-top: 10px;
  margin-right: 5px;
  font-size: 15px;
}
.footer .footer-col-2 {
  width: 34.3%;
}
.footer .footer-col-3 {
  width: 39.5%;
}
.footer h3 {
  color: #91c5a9;
  font-size: 1.28571429rem;
  margin-top: 40px;
  margin-bottom: 22px;
  text-transform: uppercase;
  font-family: 'StoneSansIIITCW01-SmBd';
}
.footer .icon-with-block {
  position: relative;
  padding-left: 21px;
}
.footer .icon-with-block > i {
  position: absolute;
  top: 0;
  left: 0;
  font-size: 16px;
}
.footer .icon-with-block h4 {
  font-size: 14px;
  margin-bottom: 10px;
  font-family: 'StoneSansIIITCW01-SmBd';
}
.footer .icon-with-block p {
  color: #e1e1e1;
  font-family: 'StoneSansIIITCW01-Lt';
}
.footer .icon-with-block p span {
  display: block;
  color: #fff;
  font-family: 'StoneSansIIITCW01-SmBd';
}
.footer .fa-ul {
  float: left;
}
.footer .fa-ul li {
  margin-bottom: 5px;
}
.footer .fa-ul .fa-li {
  color: #91c5a9;
}
.footer .footer-g-logo {
  float: right;
  margin-top: -40px;
}
.side-nav {
  background: #ee6f3c;
}
.side-nav .logo-wrapper {
  background: #fff;
}
.side-nav .collapsible.collapsible-accordion li {
  border-bottom: 1px solid;
  border-radius: 0;
  padding: 4px 15px;
}
.side-nav .collapsible.collapsible-accordion li a {
  display: block;
  font-size: 14px;
  height: auto;
  line-height: 40px;
  padding-left: 0;
  margin: 0 !important;
  color: #fff;
}
.footer-copyright {
  background: #1b1b1b;
  padding: 25px 0;
}
.footer-copyright .list-inline {
  margin-bottom: 0;
  padding: 0;
}
.footer-copyright .list-inline li {
  display: inline-block;
}
.footer-copyright .list-inline li img {
  display: inline-block;
  -webkit-transition: 0.3s;
  -moz-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
}
.footer-copyright .list-inline li img:hover {
  -webkit-transform: scale(1.05);
  -moz-transform: scale(1.05);
  -ms-transform: scale(1.05);
  -o-transform: scale(1.05);
  transform: scale(1.05);
}
.footer-copyright .list-inline.text-bottom-list {
  margin: 0 -30px;
  white-space: nowrap;
}
.footer-copyright .list-inline.text-bottom-list a {
  color: #a1a199;
  text-decoration: underline;
  font-size: 13px;
  padding: 5px 0;
  display: block;
}
.btn-outline-white {
  border: 1px solid #fff;
}
.btn-outline-white:hover,
.btn-outline-white:focus {
  background: #fff;
  color: #ee6f3c !important;
}
.btn-black {
  background: #212121;
  color: #fff;
  border: 1px solid #212121;
}
.menu-open {
  overflow: hidden !important;
}
.off-canvas-menu {
  background: #212121;
  position: fixed;
  top: 0;
  right: auto;
  z-index: 1000;
  height: 100%;
  left: 100%;
  width: 75%;
  -webkit-transition: 0.3s;
  -moz-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
}
.off-canvas-menu.open {
  left: 25%;
}
.off-canvas-menu ul {
  margin: 0;
}
.off-canvas-menu ul.fa-ul {
  margin-left: 2.14285714em;
}
.off-canvas-menu .menu-header {
  background: #ee6f3c;
  padding: 14px 8px;
}
.off-canvas-menu .menu-header ul li a {
  margin: 0;
  padding: 7px 21px;
}
.off-canvas-menu .off-canvas-menu-list {
  padding: 0 3px;
}
.off-canvas-menu .off-canvas-menu-list li {
  padding: 7px 0;
  display: block;
  clear: both;
}
.off-canvas-menu .off-canvas-menu-list li .user-thumb {
  height: 27px;
  top: 3px;
  position: relative;
  left: 2px;
}
.off-canvas-menu .off-canvas-menu-list li:after {
  content: '';
  position: absolute;
  background: #535353;
  height: 1px;
  left: -31px;
  right: -3px;
  top: 100%;
}
.off-canvas-menu .off-canvas-menu-list li .dropdown-menu {
  background: #fff;
  border-radius: 0;
  -lh-property: 0;
width:-webkit-calc(100% + 32px);
width:-moz-calc(100% + 32px);
width:calc(100% + 32px);
;
  padding: 0;
  left: -30px;
  position: relative;
  margin-top: 5px;
}
.off-canvas-menu .off-canvas-menu-list li .dropdown-menu .dropdown-item {
  padding: 4px 5px;
  color: #000;
  position: relative;
}
.off-canvas-menu .off-canvas-menu-list li .dropdown-menu .dropdown-item i.fa-check {
  position: absolute;
  right: 5px;
  top: 7px;
}
.off-canvas-menu .off-canvas-menu-list li .dropdown-menu .dropdown-item + .dropdown-item {
  border-top: 1px solid #000;
}
.off-canvas-menu .off-canvas-menu-list li .dropdown-menu .dropdown-item:focus,
.off-canvas-menu .off-canvas-menu-list li .dropdown-menu .dropdown-item:hover,
.off-canvas-menu .off-canvas-menu-list li .dropdown-menu .dropdown-item.active {
  background: #40c1a0;
  color: #fff;
}
.off-canvas-menu .off-canvas-menu-list li a {
  color: #fff;
  font-size: 15px;
  display: block;
}
.off-canvas-menu .off-canvas-menu-list li a .fa-li {
  line-height: 31px;
}
.off-canvas-menu .off-canvas-menu-list li a .fa-fixed-right {
  position: absolute;
  right: 5px;
  -lh-property: 0;
top:-webkit-calc(50% - 7px);
top:-moz-calc(50% - 7px);
top:calc(50% - 7px);
;
  -webkit-transition: 0.3s;
  -moz-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
}
.off-canvas-menu .off-canvas-menu-list li.open a .fa-fixed-right {
  -webkit-transform: rotate(90deg);
  -moz-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  -o-transform: rotate(90deg);
  transform: rotate(90deg);
}
.off-canvas-menu .off-canvas-menu-list li:last-child:after {
  display: none;
}
.off-canvas-menu .main-btn-free {
  width: 99%;
  -lh-property: 0;
width:-webkit-calc(100% - 16px);
width:-moz-calc(100% - 16px);
width:calc(100% - 16px);
;
  padding: 8px;
  margin: 17px 8px;
  font-size: 15px;
}
.off-canvas-menu a.icon-off-canvas {
  position: absolute;
  top: 12px;
  right: 8px;
}
.position-static {
  position: static;
}
/*index-page-final starts here*/
.projects-description {
  background: #4e3e6d;
  color: #fff;
  position: relative;
}
.projects-description p.pro-heading {
  color: #91c5a9;
  font-size: 22px;
  font-weight: 500;
  font-family: 'Sentinel';
}
.projects-description span.pro-heading {
  color: #fa8b60;
  font-size: 16px;
  font-family: 'StoneSansIIITCW01-SmBd';
}
.projects-description h1 {
  padding-top: 93px;
  font-family: 'TradeGothic';
  font-size: 49px;
}
.projects-description .description-amount {
  position: relative;
  color: #fff;
  margin-top: 93px;
  display: inline-block;
}
.projects-description .description-amount ul.brief-amount li {
  margin-right: 50px;
}
.projects-description .description-amount ul.brief-amount li p {
  font-size: 16px;
  color: #fff;
}
.projects-description .description-amount ul.brief-amount li p span {
  color: #fff;
  font-size: 14px;
}
.projects-description .description-amount ul.brief-amount li p span + span {
  font-family: 'TradeGothic';
  font-size: 30px;
}
.projects-description .description-amount ul.brief-amount li p img {
  margin: 0 auto;
}
.projects-description .description-amount ul.brief-amount li:last-child {
  margin-right: 0;
}
.projects-description .bottom-heading {
  margin-top: 55px;
  border-top: 1px solid #736492;
  padding-top: 22px;
  padding-bottom: 80px;
}
.projects-description .bottom-heading li a {
  color: #fff;
  font-size: 16px;
}
.projects-description .bottom-heading li .fa {
  margin-left: 26px;
  margin-right: 21px;
  font-size: 10px;
  vertical-align: middle;
}
.projects-description .btn-position {
  position: absolute;
  bottom: 5px;
  left: 28px;
  right: 0;
}
.projects-description .btn-position .btn {
  background: #ee6f3c;
  color: #fff;
  margin: 0;
  vertical-align: middle;
  border: 1px solid #ee6f3c;
  min-width: 210px;
  padding: 13px 0;
  font-size: 30px;
  font-family: 'TradeGothic';
}
.projects-description .btn-position .btn:hover {
  background: #fff !important;
  color: #ee6f3c !important;
  border: 1px solid #ee6f3c;
}
.projects-section {
  padding: 45px 0 0;
}
.projects-section .lined-heading {
  border: 0;
  text-align: center;
  position: relative;
  margin-bottom: 55px;
}
.projects-section .lined-heading h1 {
  font-size: 36px;
  color: #000;
  text-shadow: 1.5px 2.598px 3px rgba(0, 0, 0, 0.106);
  display: inline-block;
  background: #fff;
  margin: 0;
  position: relative;
  z-index: 10;
  padding: 0 20px;
}
.projects-section .lined-heading:after {
  content: '';
  position: absolute;
  height: 5px;
  left: 0;
  right: 0;
  background: #9f9c93;
  top: calc(47%);
}
.projects-section .btn {
  background: #ee6f3c;
  color: #fff;
  font-size: 18px;
  margin: 58px 0 50px;
  vertical-align: middle;
  border: 1px solid #ee6f3c;
}
.projects-section .btn span {
  color: #fb8f57 !important;
  padding-left: 6px;
  padding-right: 12px;
  vertical-align: middle;
}
.projects-section .btn .fa {
  vertical-align: middle;
}
.projects-section .btn:hover {
  background: transparent !important;
  color: #ee6f3c !important;
  border: 1px solid #ee6f3c;
}
.projects-section .logo {
  margin: 0 auto 53px;
}
.projects-section figure a {
  width: 100%;
}
.projects-section figure a img {
  width: 100%;
}
.our-clients .lined-heading {
  border: 0;
  text-align: center;
  position: relative;
  margin-bottom: 55px;
}
.our-clients .lined-heading h1 {
  font-size: 36px;
  color: #000;
  text-shadow: 1.5px 2.598px 3px rgba(0, 0, 0, 0.106);
  display: inline-block;
  background: #fff;
  margin: 0;
  position: relative;
  z-index: 10;
  padding: 0 20px;
}
.our-clients .lined-heading:after {
  content: '';
  position: absolute;
  height: 5px;
  left: 0;
  right: 0;
  background: #9f9c93;
  top: calc(47%);
}
.our-clients img {
  box-shadow: none;
}
.our-clients ul li {
  margin-bottom: 53px;
}
.our-clients ul li .media-body {
  padding-left: 14px;
  font-size: 13px;
  color: #868e92;
}
.our-clients ul li .media-body .media-heading {
  color: #3f216e;
  font-size: 16px;
  font-family: 'StoneSansIIITCW01-SmBd';
  padding-bottom: 10px;
}
.project-details-bg {
  background-image: url(../img/project-details-bg.png);
  background-size: auto 100%;
}
.project-details-bg .project-details {
  background-image: url(../img/background-banner.png);
  background-repeat: no-repeat;
  margin-top: 20px;
  background-size: auto 100%;
}
.project-details-bg .project-details p {
  padding-top: 40px;
  font-size: 29px;
  color: #063d1f;
}
.project-details-bg .project-details ul {
  margin-top: 35px;
  padding-bottom: 20px;
}
.project-details-bg .project-details ul li {
  font-size: 20px;
}
.project-details-bg .project-details ul li span {
  color: #05321a;
}
.icons-section {
  padding-top: 77px;
  padding-bottom: 65px;
}
.icons-section .lined-heading {
  border: 0;
  text-align: center;
  position: relative;
  margin-bottom: 55px;
}
.icons-section .lined-heading h1 {
  font-size: 36px;
  color: #000;
  text-shadow: 1.5px 2.598px 3px rgba(0, 0, 0, 0.106);
  display: inline-block;
  background: #fff;
  margin: 0;
  position: relative;
  z-index: 10;
  padding: 0 20px;
}
.icons-section .lined-heading:after {
  content: '';
  position: absolute;
  height: 5px;
  left: 0;
  right: 0;
  background: #9f9c93;
  top: 47%;
}
.icons-section img {
  margin: 0 auto;
}
.icons-section span {
  margin-top: 32px;
}
.icons-section span a {
  font-size: 15px;
  color: #000;
  font-family: 'StoneSansIIITCW01-SmBd';
}
/*featured-section starts here*/
.ft-two{
  background-color: #ff8b71!important;
  padding: 300px 0px;
}
.ft-three{
  background-color: #7dcfe1!important;
}
.ft-two img{
  width:300px;
  margin: 0px auto;
}
.featured-section {
  background: #40c1a0;
}
.featured-section p {
  font-size: 32px;
  color: #fff;
  font-family: 'TradeGothic';
  line-height: 34px;
}
.featured-section .feature-block {
  max-width: 430px;
  padding-top: 70px;
}
.featured-section .media img {
  box-shadow: none;
}
.featured-section .media .media-body {
  padding-left: 20px;
}
.featured-section .media .media-body .media-heading {
  color: #fff;
  font-size: 14px;
}
.featured-section .media .media-body span {
  color: #fff;
}
.featured-section .media .media-body .btn {
  margin-top: 30px;
  min-width: 137px;
  padding: 13px 20px;
  font-size: 20px;
}
.featured-section .inner-image {
  padding-top: 50px;
  padding-bottom: 43px;
}
.featured-section .inner-image p {
  color: #fff;
}
.featured-section .inner-image .media .media-body:not(.btn) {
  font-size: 14px;
}
.featured-section .inner-image .media .media-body:not(.btn) .media-heading {
  margin-bottom: 10px;
}
.featured-section .inner-image span {
  margin-bottom: 10px;
}
.featured-section .inner-image .filter-effect {
  position: relative;
}
.featured-section .inner-image .filter-effect img {
  width: 50%;
}
.featured-section .inner-image .filter-effect .before-img {
  -webkit-filter: grayscale(100%);
  -moz-filter: grayscale(100%);
  -ms-filter: grayscale(100%);
  filter: grayscale(100%);
}
.featured-section .inner-image .filter-effect .middle-bar {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 100%;
  width: auto;
  margin: 0 auto;
}
.featured-section .inner-image .filter-effect span {
  position: absolute;
  background: #000;
  color: #fff;
  bottom: 10px;
  left: 10px;
  display: inline;
  min-width: 109px;
  padding: 9px;
  text-transform: uppercase;
}
.featured-section .inner-image .filter-effect span + span.right-label {
  right: 10px;
  left: auto !important;
}
.featured-section .inner-image .twentytwenty-handle {
  background: #cd4923;
  min-height: 116px;
  border-radius: 0px;
  width: 20px;
  border: 1px solid #fff;
  -lh-property: 0;
top:-webkit-calc(50% - 25px);
top:-moz-calc(50% - 25px);
top:calc(50% - 25px);
;
}
.featured-section .inner-image .twentytwenty-handle span {
  display: none;
}
.featured-section .inner-image .twentytwenty-handle:before {
  -lh-property: 0;
bottom:-webkit-calc(84%);
bottom:-moz-calc(84%);
bottom:calc(84%);
;
}
.featured-section .inner-image .twentytwenty-handle:after {
  -lh-property: 0;
top:-webkit-calc(84%);
top:-moz-calc(84%);
top:calc(84%);
;
}
/*featured-scetion ends here */
/*backup-section starts here */
.backup-section {
  padding-top: 80px;
}
.backup-section img {
  margin: 0 auto;
}
.backup-section p {
  font-size: 30px;
  color: #40c1a0;
  margin-top: 27px;
  margin-bottom: 0;
}
.backup-section span {
  color: #575757;
  font-size: 15px;
  max-width: 650px;
  margin: 20px auto;
  padding: 0 14px;
  margin-top: 0;
}
.clients-testimonials {
  padding-top: 80px;
}
.clients-testimonials .lined-heading {
  border: 0;
  text-align: center;
  position: relative;
  margin-bottom: 55px;
}
.clients-testimonials .lined-heading h1 {
  font-size: 36px;
  color: #000;
  text-shadow: 1.5px 2.598px 3px rgba(0, 0, 0, 0.106);
  display: inline-block;
  background: #fff;
  margin: 0;
  position: relative;
  z-index: 10;
  padding: 0 20px;
}
.clients-testimonials .lined-heading:after {
  content: '';
  position: absolute;
  height: 5px;
  left: 0;
  right: 0;
  background: #9f9c93;
  top: calc(47%);
}
.clients-testimonials .testimonial-reviews {
  color: #868e92;
  font-size: 14px;
  line-height: 24px;
  box-shadow: 0 0 2px #c0c0c0;
  padding: 10px 12px;
  position: relative;
}
.clients-testimonials .testimonial-reviews .user-name {
  padding-top: 50px;
  color: #363636;
  margin-bottom: 0;
  font-family: 'StoneSansIIITCW01-SmBd';
}
.clients-testimonials .testimonial-reviews span {
  color: #e4603a;
}
.clients-testimonials .testimonial-reviews:after {
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  text-align: center;
  bottom: -26px;
  font-size: 40px;
  background: transparent;
  z-index: 9999;
  color: grey;
}
.clients-testimonials .testimonial-reviews:after {
  content: "";
  width: 17px;
  height: 17px;
  background: white;
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
  position: absolute;
  bottom: -9px;
  left: 50%;
  margin-left: -12px;
  border: 2px solid #c0c0c0;
  border-top: 0;
  border-left: 0;
}
.clients-testimonials .user-img {
  margin-top: 22px;
  padding-bottom: 53px;
}
.clients-testimonials .user-img img {
  margin: 0 auto;
  max-width: 82px;
}
.whats-going {
  background: #4e3e6b;
  color: #fff;
  padding-bottom: 32px;
}
.whats-going h1 {
  color: #fff;
  padding-top: 33px;
}
.whats-going p {
  font-size: 20px;
  padding-bottom: 45px;
  font-family: 'StoneSansIIITCW01-Lt';
}
.whats-going .icons-blocks .col-xxs-3 {
  -lh-property: 0;
width:-webkit-calc(20% - 30px);
width:-moz-calc(20% - 30px);
width:calc(20% - 30px);
;
  background: url(../img/background-pipe.jpg);
  border: 1px solid #6f5f8c;
  margin: 0 15px;
  padding-top: 10px;
  padding-bottom: 10px;
  min-height: 161px;
}
.whats-going .icons-blocks .col-xxs-3 p {
  padding-bottom: 0;
}
.whats-going .icons-blocks .col-xxs-3 span.int {
  font-size: 30px;
}
.whats-going .icons-blocks .col-xxs-3 span.int + span {
  font-size: 14px;
  font-family: 'StoneSansIIITCW01-SmBd';
  text-align: center;
}
.whats-going .icons-blocks .col-xxs-3 img {
  margin: 0 auto;
  max-height: 35px;
}
/*index-page ends here */
/*order-forum-page starts here*/
.order-page-bg {
  background: #f9f9fb;
}
.order-heading {
  margin-top: 0;
  padding-top: 42px;
  margin-bottom: 35px;
}
hr.border {
  margin-bottom: 0;
  border-top: 1px solid #cdcdcd;
  margin-top: 0;
}
.order-page-block {
  max-width: 780px;
  margin: 0 auto;
}
.upload-block-parent {
  background: #e4e4eb;
  padding: 8px;
  position: relative;
  margin-bottom: 45px;
}
.upload-block-parent a.list-link {
  margin-top: 15px;
  position: absolute;
  left: 17px;
}
.order-form-slider {
  vertical-align: top;
  white-space: nowrap;
  margin-bottom: 35px;
}
.order-form-slider .bx-wrapper,
.order-form-slider .slider-container {
  display: inline-block;
  margin: 0;
  position: relative;
}
.order-form-slider .bx-wrapper.upload-container,
.order-form-slider .slider-container.upload-container {
  border: 2px dashed #cccccc;
  background: #ecedf0;
  text-align: center;
  color: #575757;
  width: 100%;
  max-width: 560px;
  padding: 12px;
  min-height: 160px;
}
.order-form-slider .bx-wrapper.upload-container .main-icon,
.order-form-slider .slider-container.upload-container .main-icon {
  font-size: 30px;
}
.order-form-slider .bx-wrapper.upload-container h2,
.order-form-slider .slider-container.upload-container h2 {
  font-size: 27px;
  font-weight: bold;
}
.order-form-slider .bx-wrapper.upload-container h3,
.order-form-slider .slider-container.upload-container h3 {
  font-size: 13px;
  font-weight: 600;
}
.order-form-slider .bx-wrapper.upload-container [data-action="owl-prev-btn"],
.order-form-slider .slider-container.upload-container [data-action="owl-prev-btn"] {
  left: -21px;
  font-weight: 600;
}
.order-form-slider .bx-wrapper.upload-container .dropzone,
.order-form-slider .slider-container.upload-container .dropzone {
  position: static;
  background: transparent;
  border: 0;
  text-align: left;
  padding: 0;
  white-space: normal;
  min-height: 100px;
}
.order-form-slider .bx-wrapper.upload-container .dropzone .dz-message,
.order-form-slider .slider-container.upload-container .dropzone .dz-message {
  padding: 0;
  margin: 0;
}
.order-form-slider .bx-wrapper.upload-container .dropzone .dz-preview.dz-image-preview,
.order-form-slider .slider-container.upload-container .dropzone .dz-preview.dz-image-preview {
  padding: 0;
  margin: 6px 5px;
  background: transparent;
}
.order-form-slider .bx-wrapper.upload-container .dropzone .dz-error-message,
.order-form-slider .slider-container.upload-container .dropzone .dz-error-message {
  text-overflow: ellipsis;
  overflow: hidden;
}
.order-form-slider .bx-wrapper [data-action^="owl-"],
.order-form-slider .slider-container [data-action^="owl-"] {
  position: absolute;
  top: 50%;
  -lh-property: 0;
top:-webkit-calc(50% - 9px);
top:-moz-calc(50% - 9px);
top:calc(50% - 9px);
;
  cursor: pointer;
  color: #a6a6a6;
}
.order-form-slider .bx-wrapper [data-action="owl-prev-btn"],
.order-form-slider .slider-container [data-action="owl-prev-btn"] {
  left: -15px;
}
.order-form-slider .bx-wrapper [data-action="owl-next-btn"],
.order-form-slider .slider-container [data-action="owl-next-btn"] {
  right: -15px;
}
.order-form-slider .bx-wrapper .bx-viewport,
.order-form-slider .slider-container .bx-viewport {
  border: 0;
  box-shadow: none;
  left: 0;
}
.order-form-slider .order-upload-block {
  display: inline-block;
  margin-right: 20px;
  text-align: center;
  vertical-align: top;
}
.order-form-slider .order-upload-block a.list-link {
  color: #575757;
  text-decoration: underline;
  display: inline-block;
  margin-top: 13px;
}
.attachment-pop-up {
  /*.upload-attachment-side-link{
    background: #1c94d1;
    padding: 0;

    .upload-new-sec{
      display: block;
      width: 100%;

      &:hover{
        color: fadeout(#fff,10%);
      }
    }

  }*/
}
.attachment-pop-up .modal-dialog {
  margin: 0 auto;
}
.attachment-pop-up .top-fil-list ul {
  padding-bottom: 0;
}
@media (max-width: 767px) {
  .attachment-pop-up .top-fil-list ul li {
    width: 62px;
    text-align: center;
  }
}
@media (max-width: 580px) {
  .attachment-pop-up .top-fil-list ul li {
    width: 58px;
  }
}
@media (max-width: 767px) {
  .attachment-pop-up .top-fil-list ul:last-child li {
    padding-right: 20px;
  }
}
@media (min-width: 1400px) {
  .attachment-pop-up .modal-lg {
    width: 60%;
    max-width: 60%;
  }
}
.attachment-pop-up .modal-body {
  padding: 0;
  -lh-property: 0;
min-height:-webkit-calc(100vh - 60px);
min-height:-moz-calc(100vh - 60px);
min-height:calc(100vh - 60px);
;
  background: #e3e4e8;
}
.attachment-pop-up .top-fil-list ul:before {
  display: none;
}
.attachment-pop-up li.drop-down .filter-markup:before {
  z-index: 10;
}
.attachment-pop-up .pop-hover-color {
  z-index: 100;
}
.attachment-pop-up .upload-new-sec.active {
  color: #ee6f3c;
  border-bottom: 1px solid #ee6f3c;
}
.attachment-pop-up .right-side-section {
  -lh-property: 0;
height:-webkit-calc(100vh - 145px);
height:-moz-calc(100vh - 145px);
height:calc(100vh - 145px);
;
}
.attachment-pop-up .white-board-dev {
  border: 1px solid #d7d7d7;
  -lh-property: 0;
min-height:-webkit-calc(100vh - 145px);
min-height:-moz-calc(100vh - 145px);
min-height:calc(100vh - 145px);
;
  background: #fff;
}
.attachment-pop-up .dropzone {
  border: 0;
}
.attachment-pop-up .dz-message h2 {
  font-size: 45px;
  color: #d8d8d8;
  font-weight: 600;
  margin-bottom: 46px;
}
.attachment-pop-up .dz-message .or {
  display: block;
  margin-bottom: 50px;
  color: #d8d8d8;
}
.attachment-pop-up .dz-message .btn {
  margin: 0;
  font-size: 13px;
  padding: 25px 50px;
  height: auto;
  border-radius: 35px;
  background: #0088cc;
}
.attachment-pop-up .dz-message .btn:hover {
  background: #0077b3 !important;
}
.attachment-pop-up .dz-message .extra-link-block {
  color: #d8d8d8;
  padding-top: 50px;
  max-width: 520px;
  margin: 0 auto;
}
.attachment-pop-up .dz-message .extra-link-block ul {
  margin-top: 50px;
}
.attachment-pop-up .dz-message .extra-link-block ul li a {
  color: #9d9d9d;
  font-size: 15px;
}
.attachment-pop-up .dz-message .extra-link-block ul li a:hover {
  color: #0c0c0c;
}
.attachment-pop-up .dz-message .extra-link-block ul li.list-inline-item:not(:last-child) {
  margin-right: 42px;
  margin-bottom: 15px;
}
.attachment-pop-up ul.disabled:after {
  content: '';
  position: absolute;
  background: rgba(102, 51, 153, 0);
  display: block;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  cursor: no-drop;
}
.attachment-pop-up ul.disabled li {
  filter: grayscale(1);
  opacity: 0.7;
}
.attachment-pop-up .library-block {
  padding: 10px 15px;
}
.attachment-pop-up .library-block h4 {
  font-size: 18px;
  margin-bottom: 30px;
}
.attachment-pop-up .library-block .library-filters {
  margin-bottom: 30px;
}
.attachment-pop-up .library-block .library-filters > * {
  display: inline-block;
  max-width: 250px;
  vertical-align: middle;
}
.attachment-pop-up .library-block .library-filters .input-group input {
  margin: 0;
  padding: 1px 0;
}
.attachment-pop-up .library-block .library-filters .input-group .btn {
  margin: 0;
  background: transparent;
  padding: 6px 0;
  color: #ccc !important;
  box-shadow: none;
}
.attachment-pop-up .library-block .library-filters a {
  font-size: 18px;
  color: #434343;
  padding-right: 10px;
  margin-right: 10px;
  border-right: 1px solid;
}
.attachment-pop-up .library-block .library-filters i.fa.fa-filter {
  margin-right: 20px;
}
@media (max-width: 767px) {
  .attachment-pop-up .library-block .library-filters i.fa.fa-filter {
    margin-right: 20px;
  }
}
.attachment-pop-up .library-block .row {
  margin-right: -10px;
  margin-left: -10px;
}
.attachment-pop-up .library-block .row > [class^=col-] {
  padding-left: 5px;
  padding-right: 5px ;
}
.attachment-pop-up .library-block .library-item {
  padding-bottom: 100%;
  overflow: hidden;
  display: block;
  position: relative;
  font-size: 11px;
  margin-bottom: 10px;
}
.attachment-pop-up .library-block .library-item:before {
  content: '';
  background: rgba(0, 0, 0, 0.8);
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 1;
  -webkit-transition: 0.3s;
  -moz-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
  zoom: 1;
  filter: alpha(opacity=0);
  -webkit-opacity: 0;
  -moz-opacity: 0;
  opacity: 0;
}
.attachment-pop-up .library-block .library-item > * {
  position: absolute;
}
.attachment-pop-up .library-block .library-item img {
  min-width: 100%;
  top: 0;
  left: 0;
  height: 100%;
}
.attachment-pop-up .library-block .library-item .library-item-header {
  top: 0;
  left: 0;
  right: 0;
  padding: 8px 5px;
  color: #fff;
  -webkit-transition: 0.3s;
  -moz-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
  zoom: 1;
  filter: alpha(opacity=0);
  -webkit-opacity: 0;
  -moz-opacity: 0;
  opacity: 0;
  z-index: 2;
}
.attachment-pop-up .library-block .library-item .library-item-footer {
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
  color: #fff;
  padding: 8px 5px;
  -webkit-transition: 0.3s;
  -moz-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
  zoom: 1;
  filter: alpha(opacity=0);
  -webkit-opacity: 0;
  -moz-opacity: 0;
  opacity: 0;
}
.attachment-pop-up .library-block .library-item:hover .library-item-header,
.attachment-pop-up .library-block .library-item:hover .library-item-footer,
.attachment-pop-up .library-block .library-item:hover:before {
  zoom: 1;
  filter: alpha(opacity=100);
  -webkit-opacity: 1;
  -moz-opacity: 1;
  opacity: 1;
}
.attachment-pop-up .library-block .library-item [type=checkbox] + label {
  position: static;
}
.attachment-pop-up .library-block .library-item span.input-span {
  position: relative;
  vertical-align: top;
}
.attachment-pop-up .library-block .fa.fa-times {
  background: #dcdcdd;
  color: #b9b6b7;
  height: 25px;
  width: 25px;
  text-align: center;
  border-radius: 50%;
  padding-top: 3px;
  border: 1px solid grey;
  cursor: pointer;
}
.attachment-pop-up .library-block .fa.fa-times:hover {
  color: #fff;
  outline: 0;
  background: black;
}
.attachment-pop-up .ok-btn-a {
  position: absolute;
  right: 10px;
  top: -25px;
  display: inline-block;
  font-size: 30px;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #dcdcdd;
  height: 50px;
  width: 50px;
  text-align: center;
  border-radius: 50%;
  padding-top: 5px;
  border: 1px solid #969598;
  color: #b6b6b7;
  z-index: 9999;
}
.attachment-pop-up .ok-btn-a:hover {
  -webkit-transform: scale(1.1);
  -moz-transform: scale(1.1);
  -ms-transform: scale(1.1);
  -o-transform: scale(1.1);
  transform: scale(1.1);
}
@media (max-width: 991px) {
  .attachment-pop-up .ok-btn-a {
    /*
        .calc(top , ~ '50% - 17.5px');
        */
    font-size: 27px;
    height: 35px;
    width: 35px;
    padding-top: 0px;
    top: -42px;
  }
}
@media (max-width: 767px) {
  .app-bottom-section {
    position: relative;
    padding-bottom: 137px;
  }
  .app-bottom-section .right-side-section {
    position: fixed;
    bottom: 0;
    z-index: 9999;
    right: 0;
    left: 0;
  }
}
.file-attachment {
  position: relative;
  width: 181px;
  height: 160px;
  border: 2px dashed #ccc;
  background: #ecedf0;
}
.file-attachment input[type="file"] {
  zoom: 1;
  filter: alpha(opacity=0);
  -webkit-opacity: 0;
  -moz-opacity: 0;
  opacity: 0;
  top: 0;
  cursor: pointer;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  height: 100%;
  width: 100%;
}
.file-attachment div {
  position: absolute;
  -lh-property: 0;
top:-webkit-calc(50% - 34px);
top:-moz-calc(50% - 34px);
top:calc(50% - 34px);
;
  z-index: -1;
  cursor: pointer;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 1;
}
.file-attachment div i {
  display: block;
  background: #575757;
  color: #fff;
  width: 38px;
  height: 38px;
  line-height: 38px;
  -webkit-border-radius: 50%;
  -webkit-background-clip: padding-box;
  -moz-border-radius: 50%;
  -moz-background-clip: padding;
  border-radius: 50%;
  background-clip: padding-box;
  margin: 0 auto;
  font-size: 22px;
}
.file-attachment div span {
  color: #000;
  font-size: 15px;
  display: inline-block;
  margin-top: 8px;
}
.form-inline-fields .form-group > label {
  font-size: 14px;
  padding: 5px 0 0 15px  ;
  font-weight: normal;
  color: #000;
}
.form-inline-fields .form-group > label small {
  display: block;
  margin-top: -1px;
}
.form-inline-fields .select-wrapper input.select-dropdown {
  margin: 0;
}
.form-inline-fields [type=checkbox] + label {
  margin: 0;
  height: auto;
}
.form-inline-fields .md-textarea {
  padding-top: 5px;
  padding-bottom: 0;
  height: 39px;
  box-sizing: border-box;
  min-height: 0;
}
.form-inline-fields input {
  margin: 0;
  padding-top: 2px;
  padding-bottom: 5px;
}
.form-inline-fields .as-per-btn [type=checkbox].filled-in:checked + label:after {
  top: 7px;
}
.form-inline-fields .as-per-btn [type=checkbox].filled-in:checked + label:before,
.form-inline-fields .as-per-btn [type=checkbox].filled-in:not(:checked) + label:after {
  top: 7px;
}
.form-inline-fields .form-group {
  margin-bottom: 25px;
}
.form-inline-fields .tag-styled {
  background: #0088cc;
  color: #fff;
  display: inline-block;
  padding: 5px 15px;
  -webkit-border-radius: 4px;
  -webkit-background-clip: padding-box;
  -moz-border-radius: 4px;
  -moz-background-clip: padding;
  border-radius: 4px;
  background-clip: padding-box;
  white-space: nowrap;
}
.form-inline-fields .small-label-block {
  padding-left: 35px;
  position: relative;
}
.form-inline-fields .small-label-block label {
  position: absolute;
  left: 6px;
  top: 4px;
  font-size: 14px;
  font-weight: 600;
}
.form-inline-fields .md-form {
  position: relative;
  margin: 0;
}
.form-inline-fields .md-form .label-fixed {
  position: absolute;
  left: 0;
  top: 6px;
}
.form-inline-fields .md-form .label-fixed .badge-round {
  width: 18px;
  height: 18px;
  -webkit-border-radius: 50%;
  -webkit-background-clip: padding-box;
  -moz-border-radius: 50%;
  -moz-background-clip: padding;
  border-radius: 50%;
  background-clip: padding-box;
  background: #bcbcbc;
  display: block;
  text-align: center;
  color: #fff;
  font-size: 11px;
  line-height: 19px;
  text-transform: uppercase;
}
.form-inline-fields .md-form input {
  padding-left: 28px;
  max-width: 100%;
  box-sizing: border-box;
  height: 35px;
}
.form-inline-fields .small-custom-select {
  display: inline-block;
  margin-left: 10px;
}
.form-inline-fields .plus-row {
  position: relative;
  cursor: pointer;
}
.form-inline-fields .plus-row i {
  font-size: 23px;
  position: relative;
  top: 3px;
}
.form-inline-fields .advance-form h6 {
  font-size: 15px;
  color: #000;
  font-weight: 600;
  margin-bottom: 25px;
  cursor: pointer;
}
.form-inline-fields .advance-form h6 span {
  color: #575757;
}
.form-inline-fields .advance-form .inner-block-form {
  background: #ffffff;
  border: 1px solid #b9b9b9;
  padding: 16px 8px;
}
.form-inline-fields .advance-form .inner-block-form .heading-block {
  font-size: 15px;
  color: #000;
  font-weight: 600;
  display: block;
  padding-bottom: 12px;
}
.form-inline-fields .advance-form .inner-block-form [type=checkbox] + label {
  padding-left: 25px;
  line-height: 21px;
}
.form-inline-fields .advance-form .inner-block-form .price-list {
  white-space: nowrap;
  margin: 0 -2px;
}
.form-inline-fields .advance-form .inner-block-form .price-list li {
  width: 33%;
  margin: 0;
  padding: 0 2px;
  vertical-align: top;
}
.form-inline-fields .advance-form .inner-block-form .price-list li .label-box {
  background: #f4f4f4;
  width: 100%;
  padding: 11px ;
}
.form-inline-fields .advance-form .inner-block-form .price-list li .label-box label {
  display: block;
  padding-left: 20px;
  margin-bottom: 0;
}
.form-inline-fields .advance-form .inner-block-form .price-list li .label-box [type=radio]:not(:checked) + label:before,
.form-inline-fields .advance-form .inner-block-form .price-list li .label-box [type=radio]:checked + label:after {
  margin-left: 0;
}
.form-inline-fields .advance-form .inner-block-form .price-list li .additional {
  display: block;
  text-align: center;
  font-size: 15px;
  font-weight: 600;
  color: #000;
  margin-top: 12px;
}
.form-inline-fields .advance-form .inner-block-form .price-list li .additional span {
  color: #ee6f3c;
}
.form-inline-fields .advance-form .block {
  padding-bottom: 30px;
  border-bottom: 1px solid #b9b9b9;
  margin-bottom: 15px;
}
.form-inline-fields .advance-form .block:last-child {
  border: 0;
  margin-bottom: 0;
  padding-bottom: 15px;
}
.form-inline-fields .advance-form .block.checkbox-list > div {
  margin-bottom: 10px;
}
.form-inline-fields .advance-form .block.checkbox-list > div:last-child {
  margin-bottom: 0;
}
.form-inline-fields .advance-form .small-input {
  max-width: 178px;
}
.form-inline-fields .row-half {
  margin: 0 -8px;
}
.form-inline-fields .row-half [class^=col-] {
  padding-left: 8px;
  padding-right: 8px;
}
.form-inline-fields .price-box {
  background: #ffffff;
  border: 1px solid #e0e0e2;
  padding: 30px;
  position: relative;
  display: block;
  cursor: pointer;
  -webkit-transition: 0.3s;
  -moz-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
}
.form-inline-fields .price-box.less-padded {
  padding: 30px 20px;
}
.form-inline-fields .price-box.less-padded .description {
  line-height: 16px;
}
.form-inline-fields .price-box.fixed-length-box {
  padding: 30px 15px 15px;
  min-height: 176px;
}
.form-inline-fields .price-box.fixed-length-box small span {
  font-size: 11px;
}
.form-inline-fields .price-box.fixed-length-box .description {
  line-height: 17px;
}
.form-inline-fields .price-box:hover,
.form-inline-fields .price-box.active {
  -webkit-box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
}
.form-inline-fields .price-box .checkbox-cont {
  position: absolute;
  top: -5px;
  right: -5px;
}
.form-inline-fields .price-box .title {
  font-size: 23px;
  color: #000;
}
.form-inline-fields .price-box .pack-name {
  font-size: 15px;
  font-family: 'StoneSansIIITCW01-SmBd';
  color: #000;
  margin-bottom: 3px;
}
.form-inline-fields .price-box .description {
  font-size: 15px;
}
.form-inline-fields .price-box .description span {
  font-size: 12px;
  display: block;
}
.form-inline-fields .price-box .description small {
  font-size: 13px;
}
.form-inline-fields .price-box-label {
  line-height: 162px;
}
.form-inline-fields .qty-box {
  margin-top: 15px;
  text-align: center;
}
.form-inline-fields .qty-box input {
  max-width: 60px;
  text-align: center;
}
.form-inline-fields .row-slide-range {
  display: -webkit-box;
  display: -moz-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -moz-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  margin-bottom: 15px;
}
.form-inline-fields .row-slide-range .range {
  min-width: 250px;
}
.form-inline-fields .row-slide-range .range .thumb {
  display: none !important;
}
.form-inline-fields .row-slide-range label {
  font-size: 15px;
  color: #575757;
  margin: 0 10px;
  min-width: 60px;
}
.form-inline-fields .row-slide-range label:first-child {
  text-align: right;
}
.form-inline-fields .row-slide-range label:last-child {
  text-align: left;
}
.form-inline-fields .row-slide-range:last-child {
  margin-bottom: 0;
}
.form-inline-fields .btn {
  height: auto;
  padding: 16px 15px;
  font-size: 14px;
}
.form-inline-fields .btn-tip {
  font-size: 11px;
  color: #575757;
  display: block;
  margin-top: 15px;
}
.form-inline-fields .btn-primary {
  background: #0088cc;
}
.form-inline-fields .btn-primary:hover {
  background: #0088cc;
}
.form-inline-fields .btn-purple {
  background: #643f6e;
}
.form-inline-fields .btn-purple:hover {
  background: #643f6e;
}
.form-inline-fields .btn-orange {
  background: #ee6f3c;
}
.form-inline-fields .btn-orange:hover {
  background: #ee6f3c;
}
.form-inline-fields .style-box {
  border: 1px solid #e0e0e2;
  padding: 13px;
  width: 100%;
  min-height: 124px;
  margin-bottom: 16px;
}
.form-inline-fields .style-box label {
  margin-bottom: 15px;
}
.form-inline-fields .style-box img {
  -webkit-filter: grayscale(100%);
  -moz-filter: grayscale(100%);
  -ms-filter: grayscale(100%);
  filter: grayscale(100%);
  -webkit-transition: 0.5s;
  -moz-transition: 0.5s;
  -o-transition: 0.5s;
  transition: 0.5s;
}
.form-inline-fields .style-box input:checked + label + img {
  -webkit-filter: none;
  -moz-filter: none;
  -ms-filter: none;
  filter: none;
}
.form-inline-fields .style-box:hover img {
  -webkit-filter: none;
  -moz-filter: none;
  -ms-filter: none;
  filter: none;
}
.form-inline-fields ul.total-price-left {
  display: -webkit-box;
  display: -moz-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -moz-box-pack: justify;
  -ms-flex-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
}
.form-inline-fields ul.total-price-left li:not(.action) {
  max-width: 85px;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
}
.form-inline-fields ul.total-price-left li:not(.action) span {
  display: block;
  font-size: 12px;
}
.form-inline-fields ul.total-price-left li.action {
  font-size: 21px;
  -webkit-align-self: center;
  -ms-flex-item-align: center;
  align-self: center;
}
.form-inline-fields .range-slider {
  max-width: 450px;
  float: right;
  padding-right: 30px;
  padding-left: 30px;
  width: 100%;
  margin-top: 20px;
}
.select-full {
  background: transparent !important;
}
.select-full .select2-container {
  width: 100% !important;
}
.select-full .select2-container--default .select2-selection--multiple {
  border-radius: 0;
  border: 0;
  border-bottom: 1px solid #ccc;
  background: transparent;
}
.select-full .select2-container--default .select2-search--inline .select2-search__field {
  border-bottom: 0 !important;
}
.select-full .select2-container--default .select2-selection--multiple .select2-selection__rendered {
  padding: 0;
}
.select-full .select2-container--default .select2-selection--multiple .select2-selection__choice__remove {
  float: right;
  margin-left: 2px;
  margin-right: 0;
}
.select-full.sky-blue .select2-container--default .select2-selection--multiple .select2-selection__choice {
  background: #7dcfe1;
  color: #fff;
  border-color: #7dcfe1;
}
.select-full.sky-blue .select2-container--default .select2-selection--multiple .select2-selection__choice__remove {
  color: #fff;
}
.select-full.light-pink .select2-container--default .select2-selection--multiple .select2-selection__choice {
  background: #ff8c71;
  color: #fff;
  border-color: #ff8c71;
}
.select-full.light-pink .select2-container--default .select2-selection--multiple .select2-selection__choice__remove {
  color: #fff;
}
.select-full.green .select2-container--default .select2-selection--multiple .select2-selection__choice {
  background: #40c1a0;
  color: #fff;
  border-color: #40c1a0;
}
.select-full.green .select2-container--default .select2-selection--multiple .select2-selection__choice__remove {
  color: #fff;
}
.yes-no-switch {
  font-size: 0;
  display: inline-block;
  white-space: nowrap;
}
.yes-no-switch label {
  cursor: pointer;
}
.yes-no-switch label span {
  display: block;
  font-size: 15px;
  background: #e0e0e0;
  width: 77px;
  text-align: center;
  height: 40px;
  line-height: 40px;
}
.yes-no-switch label:first-child span {
  -webkit-border-radius: 4px 0 0 4px;
  -webkit-background-clip: padding-box;
  -moz-border-radius: 4px 0 0 4px;
  -moz-background-clip: padding;
  border-radius: 4px 0 0 4px;
  background-clip: padding-box;
}
.yes-no-switch label:last-child span {
  -webkit-border-radius: 0 4px 4px 0;
  -webkit-background-clip: padding-box;
  -moz-border-radius: 0 4px 4px 0;
  -moz-background-clip: padding;
  border-radius: 0 4px 4px 0;
  background-clip: padding-box;
}
.yes-no-switch label input:checked + span {
  background: #643f6e;
  color: #fff;
}
.select2-style .select2-container {
  width: 100% !important;
}
.select2-style .select2-container--default .select2-selection--single {
  border: 0;
  border-radius: 0;
}
.select2-style .select2-container .select2-selection--single,
.select2-style .select2-container--default .select2-selection--single .select2-selection__arrow {
  height: 40px;
}
.select2-style .select2-container--default .select2-selection--single .select2-selection__rendered,
.select2-style .select2-container .select2-selection--single,
.select2-style .select2-container .select2-selection--single,
.select2-style .select2-container--default .select2-selection--single .select2-selection__arrow {
  line-height: 40px !important;
  padding: 0;
}
.range-slider .slider.slider-horizontal {
  width: 100%;
}
.range-slider .slider.slider-horizontal .slider-tick {
  display: none;
}
.range-slider .slider-track {
  box-shadow: none;
  background: transparent;
}
.range-slider .slider-selection.tick-slider-selection {
  height: 8px;
  top: 2px;
  width: 100% !important;
  background: #0088cc;
  border: 1px solid #b9b9b9;
}
.range-slider .slider-handle {
  background: #ffffff;
  border: 1px solid #bbbbbb;
  -webkit-box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
}
.upload-links {
  margin-bottom: 0;
  margin-top: 10px;
}
.upload-links li a {
  font-size: 18px;
  color: #c0c0c0;
  background: #ffffff;
  display: block;
  width: 40px;
  height: 40px;
  line-height: 40px;
  -webkit-border-radius: 50%;
  -webkit-background-clip: padding-box;
  -moz-border-radius: 50%;
  -moz-background-clip: padding;
  border-radius: 50%;
  background-clip: padding-box;
  border: 1px solid #cfcfd0;
}
.upload-links li a img {
  max-height: 16px;
  vertical-align: -1px;
}
.upload-links li.list-inline-item:not(:last-child) {
  margin-right: 2px;
}
/*order-forum-page ends here*/
.order-action .close {
  position: absolute;
  right: -26px;
  top: -9px;
  color: #9f9f9f;
  opacity: 1;
  text-shadow: none;
  font-size: 30px;
  -webkit-transition: 0.3s;
  -moz-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
}
.order-action .close:hover {
  -webkit-transform: rotate(360deg);
  -moz-transform: rotate(360deg);
  -ms-transform: rotate(360deg);
  -o-transform: rotate(360deg);
  transform: rotate(360deg);
}
.order-action .modal-content {
  background: #f2f2f2;
}
.order-action .modal-content .modal-body {
  padding: 25px;
}
.order-action .modal-content .order-link-block a {
  display: block;
  background: #fff;
  padding: 30px 10px;
  color: #575757;
  -webkit-transition: 0.3s;
  -moz-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
}
.order-action .modal-content .order-link-block a:hover {
  -webkit-box-shadow: 0 0 13px rgba(0, 0, 0, 0.19);
  -moz-box-shadow: 0 0 13px rgba(0, 0, 0, 0.19);
  box-shadow: 0 0 13px rgba(0, 0, 0, 0.19);
}
.order-action .modal-content .order-link-block img {
  height: 77px;
}
.order-action .modal-content .order-link-block h3 {
  font-size: 22px;
  margin-top: 30px;
  margin-bottom: 15px;
}
.order-action .modal-content .order-link-block p {
  color: #868e92;
  margin: 0;
}
/*priority-revisions-2 starts here*/
.main-heading-priority {
  padding: 85px 0 172px;
  background: #f9f9fb;
}
.main-heading-priority h1 {
  font-size: 40px;
  color: #575757;
  margin: 0;
  padding-bottom: 32px;
}
.main-heading-priority h3{
  color: #575757;
  margin-bottom: 20px;
  font-size:22px;
}
.main-heading-priority span {
  color: #575757;
  font-weight: 500;
}
.main-heading-priority span + span {
  padding-top: 25px;
}
.main-heading-priority .box {
  margin-top: 58px;
  background: #fff;
  min-height: 398px;
  border: 2px solid #e0e0e2;
}
.video-box{
  position: relative;
}
.video-box h3{
  position: absolute;
  top: 50%;
  font-weight: bold;
  transform: translate(-50%, -50%);
  left: 50%;
}
/*priority-revisions-2 ends here*/
/*Download APP STARTS here*/
.main-download-app {
  background: #33d6c6;
  padding: 45px 0;
}
.main-download-app h2 {
  color: #fff;
  font-size: 23px;
  line-height: 34px;
}
.main-download-app h3 {
  color: #a277ac;
  font-size: 18px;
  margin: 45px 0  38px;
}
.main-download-app .form-box {
  max-width: 335px;
}
.main-download-app .form-box p {
  color: #fff;
  font-size: 15px;
  max-width: 335px;
}
.main-download-app .download-links {
  margin-bottom: 50px;
}
.main-download-app .download-links .list-inline-item:not(:last-child) {
  margin-right: 10px;
}
.main-download-app .download-links li {
  position: relative;
}
.main-download-app .download-links li a {
  padding: 8px 15px ;
  display: block;
  padding-left: 50px;
  color: #fff;
  font-size: 14px;
  line-height: 19px;
  min-width: 172px;
}
.main-download-app .download-links li a > i {
  position: absolute;
  left: 15px;
  top: 11px;
  font-size: 31px;
  transition: 0.3s;
}
.main-download-app .download-links li a:hover i {
  -webkit-transform: scale(1.1);
  -moz-transform: scale(1.1);
  -ms-transform: scale(1.1);
  -o-transform: scale(1.1);
  transform: scale(1.1);
}
.main-download-app .download-links li.apple-icon a {
  background: -moz-linear-gradient(top, #ffffff 0%, #656565 9%, #505554 100%);
  /* FF3.6-15 */
  background: -webkit-linear-gradient(top, #ffffff 0%, #656565 9%, #505554 100%);
  /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to bottom, #ffffff 0%, #656565 9%, #505554 100%);
  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='#505554', GradientType=0);
  /* IE6-9 */
}
.main-download-app .download-links li.android-icon a {
  background: -moz-linear-gradient(top, #ffffff 0%, #5cb75c 9%, #56a556 100%);
  /* FF3.6-15 */
  background: -webkit-linear-gradient(top, #ffffff 0%, #5cb75c 9%, #56a556 100%);
  /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to bottom, #ffffff 0%, #5cb75c 9%, #56a556 100%);
  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='#56a556', GradientType=0);
  /* IE6-9 */
}
.main-download-app .download-links li.windows-icon a {
  background: -moz-linear-gradient(top, #ffffff 0%, #007fb7 9%, #0475a4 100%);
  /* FF3.6-15 */
  background: -webkit-linear-gradient(top, #ffffff 0%, #007fb7 9%, #0475a4 100%);
  /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to bottom, #ffffff 0%, #007fb7 9%, #0475a4 100%);
  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='#0475a4', GradientType=0);
}
.main-download-app .login-box {
  margin: 0;
  padding: 0;
  padding-right: 48px;
  margin-top: 25px;
  position: relative;
}
.main-download-app .login-box input {
  border-color: #2f828a ;
  color: #fff;
  padding-bottom: 8px;
}
.main-download-app .login-box input::-webkit-input-placeholder {
  color: #e7e7e7;
}
.main-download-app .login-box input:-moz-placeholder {
  color: #e7e7e7;
}
.main-download-app .login-box input::-moz-placeholder {
  color: #e7e7e7;
}
.main-download-app .login-box input:-ms-input-placeholder {
  color: #e7e7e7;
}
.main-download-app .login-box input:focus {
  border-bottom: 1px solid #ffffff;
  box-shadow: 0 1px 0 0 #ffffff;
}
.main-download-app .login-box button[type=submit] {
  background: transparent;
  border: 0;
  padding: 0;
  font-size: 38px;
  position: absolute;
  right: 0;
  top: 0;
}
.main-download-app .login-box button[type=submit]:disabled {
  color: #25837a;
}
.white-board-sec {
  cursor: pointer;
}
.white-board-sec.active {
  border: 1px solid #ee6f3c;
}
/*Download APP END here*/
@media (max-width: 1199px) {
  .featured-section .feature-block {
    max-width: 355px;
    padding-top: 40px;
  }
  .project-details-bg .project-details {
    background-position: -190px 0;
  }
  .project-details-bg .project-details p {
    font-size: 25px;
  }
  .footer-copyright .list-inline li img {
    max-height: 30px;
  }
  .main-download-app .download-links li a {
    min-width: 158px;
  }
  .main-download-app .download-links li a br {
    display: block;
  }
  .color-boxes h1 {
    font-size: 20px;
  }
}
@media (max-width: 991px) {
  .top-nav {
    margin-top: 19px;
  }
  .top-header .order-btn {
    margin-right: 0;
  }
  .top-header .cart-icon {
    float: none;
    margin-left: 10px;
    display: inline-block;
    margin-top: 0;
  }
  .logo {
    margin: 6px 0;
  }
  .navbar.navbar-dark .navbar-nav .nav-item a {
    font-size: 11px;
  }
  .main-navbar ul li + li {
    margin-left: 4px !important;
  }
  .footer .footer-g-logo {
    max-width: 20%;
  }
  .footer-copyright .list-inline li img {
    max-height: 20px;
  }
  .footer-copyright .list-inline.text-bottom-list a {
    padding: 0;
  }
  .projects-description .description-amount ul.brief-amount li {
    margin-right: 32px;
  }
  .projects-description h1 {
    font-size: 24px;
  }
  .projects-description p {
    font-size: 17px;
  }
  .whats-going .icons-blocks .col-xxs-3 span.int {
    font-size: 20px;
  }
  .whats-going .icons-blocks .col-xxs-3 span.int + span {
    font-size: 11px;
  }
  .whats-going p {
    font-size: 15px;
  }
  .whats-going h1 {
    font-size: 24px;
  }
  .form-inline-fields .price-box {
    padding: 27px;
  }
  .form-inline-fields .price-box .pack-name {
    font-size: 15px;
  }
  .order-form-slider .slider-container {
    max-width: 485px;
  }
  .form-inline-fields .tag-styled {
    padding: 5px 13px;
    font-size: 12px;
  }
  .form-inline-fields .advance-form .inner-block-form [type=checkbox] + label {
    padding-left: 30px;
    font-size: 14px;
  }
  .form-inline-fields .advance-form .inner-block-form [type=checkbox] + label span {
    display: block;
  }
  .top-nav li:nth-last-child(2) {
    border-left: 1px solid #b1b1b1;
    margin-left: 13px !important;
    padding-left: 13px;
  }
  .project-details-bg .project-details {
    background-position: -160px 0;
  }
  .project-details-bg .project-details p {
    font-size: 20px;
  }
  .project-details-bg .project-details ul li {
    font-size: 17px;
  }
  .featured-section p {
    font-size: 24px;
  }
  .main-download-app .download-links li {
    width: 100%;
    margin: 0;
  }
  .main-download-app .download-links li a {
    padding: 17px 15px;
    padding-left: 60px;
  }
  .main-download-app .download-links li a br {
    display: none;
  }
  .main-download-app h2 {
    font-size: 18px;
  }
  .main-download-app h3 {
    font-size: 16px;
  }
  .order-form-slider .bx-wrapper.upload-container,
  .order-form-slider .slider-container.upload-container {
    max-width: 471px;
  }
  .attachment-pop-up .white-board-dev {
    -lh-property: 0;
height:-webkit-calc(100vh - 255px);
height:-moz-calc(100vh - 255px);
height:calc(100vh - 255px);
;
    margin: 0 5px;
    overflow: auto;
    min-height: 0;
  }
  .top-fil-list.hidden-sm-down + .app-bottom-section .white-board-dev {
    -lh-property: 0;
height:-webkit-calc(100vh - 158px);
height:-moz-calc(100vh - 158px);
height:calc(100vh - 158px);
;
  }
  .attachment-pop-up .right-side-section {
    height: auto;
  }
  .attachment-pop-up .top-fil-list ul {
    margin-bottom: 0;
    padding-bottom: 0;
    margin: 0;
    padding: 0;
    overflow-x: auto;
    overflow-y: visible;
  }
  .dropzone.dz-clickable .dz-message,
  .dropzone.dz-clickable .dz-message * {
    margin: 0;
  }
  .attachment-pop-up .dz-message .extra-link-block ul {
    margin: 0;
  }
  .attachment-pop-up .ok-btn-a {
    position: fixed;
    font-size: 24px;
    top: 7px;
  }
}
@media (min-height: 768px) and (max-width: 992px) {
  ul.bx-slider li {
    width: 235px !important;
  }
  ul.bx-slider li img {
    width: 100%;
  }
}
@media (max-width: 767px) {
  body {
    overflow-x: hidden !important;
  }
  .top-header .logo {
    margin: 0px 0;
    width: 100%;
  }
  .top-header .order-btn {
    white-space: nowrap !important;
    padding: 6px;
    width: 78px;
    position: absolute;
    left: 78px;
    right: 0;
    margin: 0 auto;
    font-size: 11px;
  }
  .footer .footer-col-1,
  .footer .footer-col-2,
  .footer .footer-col-3 {
    width: 100%;
  }
  .login-box h2 {
    font-size: 16px;
  }
  .login-box {
    padding-top: 20px;
    padding-bottom: 70px;
  }
  .login-box .login-box-top {
    margin-bottom: 20px;
  }
  .login-box .form-footer,
  .login-box .social-btn span {
    font-size: 12px;
  }
  .login-box .social-btn > i {
    margin-right: 5px;
  }
  .footer-copyright .list-inline.text-bottom-list {
    margin: 15px -15px;
    white-space: nowrap;
  }
  .footer-copyright .list-inline li img {
    max-height: 23px;
  }
  .footer-copyright .list-inline {
    margin-bottom: 0;
    padding: 0;
    text-align: center;
  }
  .main-navbar .navbar-toggler {
    float: none;
    display: block;
    margin: 0 auto;
  }
  .main-navbar .navbar-divider,
  .main-navbar .navbar-nav .nav-item + .nav-item,
  .main-navbar .navbar-nav .nav-link + .nav-link {
    margin-left: 0 !important;
    text-align: center;
  }
  .main-navbar ul li {
    text-align: center;
  }
  .footer .footer-col-1 form input {
    width: 75%;
    -lh-property: 0;
width:-webkit-calc(100% - 90px);
width:-moz-calc(100% - 90px);
width:calc(100% - 90px);
;
  }
  .footer .footer-col-1 form .btn {
    margin-top: 0;
  }
  .login-box .hr-block {
    margin: 35px 0 20px;
  }
  .icon-off-canvas {
    padding-left: 10px;
    display: inline-block;
    margin-top: 5px;
  }
  .navbar-toggler {
    display: inline-block;
    vertical-align: middle;
  }
  .navbar-toggler + a {
    display: inline-block;
    vertical-align: middle;
    max-width: 160px;
  }
  .off-canvas-nav {
    position: fixed;
    top: 0;
    background: #ee6f3c;
    z-index: 100;
    height: 100% !important;
    overflow: auto;
    right: 100%;
    width: 100%;
    -webkit-transition: 0.3s;
    -moz-transition: 0.3s;
    -o-transition: 0.3s;
    transition: 0.3s;
  }
  .off-canvas-nav.in {
    right: 0;
  }
  .navbar-header {
    background: #fff;
    color: #ee6f3c;
    padding: 8px;
  }
  .navbar-header .navbar-toggler {
    color: #ee6f3c !important;
    border-color: #ee6f3c !important;
    display: inline-block;
    float: right;
  }
  .main-navbar {
    padding: 1px;
  }
  .top-header .navbar-toggler {
    padding-left: 0;
    width: auto;
  }
  .navbar.navbar-dark .navbar-nav .nav-item a {
    font-size: 14px;
    padding: 8px;
    border-bottom: 1px solid #fff;
    border-radius: 0;
  }
  .icons-section img {
    margin: 0 auto;
  }
  .projects-description h1 {
    padding-top: 35px;
    font-size: 23px;
    max-width: 475px;
    line-height: 35px;
    padding-bottom: 10px;
    margin: 0 auto;
  }
  .projects-description .description-amount {
    margin-top: 48px;
  }
  .projects-description .bottom-heading {
    margin-top: 45px;
  }
  .projects-description p {
    font-size: 15px;
  }
  .projects-description span {
    font-size: 14px;
  }
  .projects-description .description-amount ul.brief-amount li {
    margin-right: 11px;
  }
  .projects-description .btn-position .btn {
    min-width: 158px;
    padding: 13px 0;
    font-size: 19px;
  }
  .our-clients .lined-heading h1 {
    font-size: 21px;
  }
  .our-clients .lined-heading:after {
    background: #fff;
  }
  .our-clients img {
    max-width: 46px;
  }
  .projects-section .lined-heading h1 {
    font-size: 21px;
  }
  .projects-section .lined-heading:after {
    background: #fff;
  }
  .icons-section .lined-heading h1 {
    font-size: 21px;
  }
  .icons-section .lined-heading:after {
    background: #fff;
  }
  .icons-section .col-xs-3 {
    padding: 0 5px;
  }
  .icons-section span a {
    font-size: 12px;
  }
  .icons-section .lined-heading {
    margin-bottom: 27px;
  }
  .icons-section span {
    margin-top: 8px;
  }
  .icons-section {
    padding-bottom: 28px;
  }
  .featured-section p {
    color: #fff;
  }
  .featured-section .media .media-body .media-heading {
    font-size: 12px;
  }
  .featured-section .media .media-body .btn {
    margin-bottom: 30px;
  }
  .featured-section .inner-image .twentytwenty-handle {
    min-height: 65px;
    width: 6px;
    top: 45%;
  }
  .featured-section .inner-image .twentytwenty-handle:before {
    bottom: 71%;
  }
  .featured-section .inner-image .twentytwenty-handle:after {
    top: 71%;
  }
  .row-xs {
    margin-right: -15px;
    margin-left: -15px;
  }
  .clients-testimonials .lined-heading h1 {
    font-size: 21px;
  }
  .whats-going h1 {
    color: #fff;
    font-size: 24px;
  }
  .whats-going p {
    font-size: 10px;
    padding-bottom: 45px;
    margin: 0;
  }
  .whats-going .icons-blocks .col-xxs-3 {
    -lh-property: 0;
width:-webkit-calc(50% - 10px);
width:-moz-calc(50% - 10px);
width:calc(50% - 10px);
;
    min-height: 120px;
    margin-bottom: 10px;
    margin-left: 5px;
    margin-right: 5px;
  }
  .whats-going .icons-blocks .col-xxs-3.full-block {
    -lh-property: 0;
width:-webkit-calc(100% - 10px);
width:-moz-calc(100% - 10px);
width:calc(100% - 10px);
;
  }
  .projects-description .bottom-heading li a {
    color: #fff;
    font-size: 9.5px;
  }
  .projects-description .bottom-heading li .fa {
    margin-left: 2px;
    margin-right: 2px;
    font-size: 4.5px;
  }
  .list-inline-item:not(:last-child) {
    margin-right: 0px;
  }
  .project-details {
    background: #a5d9bd !important;
    margin-top: 0;
  }
  .clients-testimonials .user-img {
    padding-bottom: 20px;
  }
  .clients-testimonials {
    padding-top: 50px;
  }
  .backup-section span {
    margin-bottom: 0;
  }
  .backup-section {
    padding-top: 50px;
  }
  .projects-description .bottom-heading {
    padding-bottom: 36px;
  }
  .projects-section .btn {
    margin: 24px 0 54px;
  }
  .icons-section {
    padding-top: 40px;
  }
  .backup-section p {
    font-size: 21px;
  }
  .backup-section span {
    font-size: 12px;
  }
  .clients-testimonials .lined-heading {
    margin-bottom: 50px;
  }
  .row-left,
  .row-right {
    margin-left: 0;
  }
  .top-header .cart-icon img {
    max-width: 25px;
  }
  .featured-section .inner-image {
    padding-top: 0;
  }
  .featured-section .feature-block {
    padding-top: 20px;
    width: 100%;
    max-width: none;
  }
  .featured-section .media .media-body .btn {
    padding: 10px 16px;
    font-size: 15px;
  }
  .top-nav {
    margin-top: 8px;
  }
  .mobile-links {
    margin-top: 5px;
  }
  /*priority-revisions-2*/
  .main-heading-priority {
    padding-top: 20px;
    padding-bottom: 15px;
  }
  .main-heading-priority h1 {
    font-size: 16px;
    padding-bottom: 20px;
  }
  .main-heading-priority .box {
    min-height: 288px;
    margin-top: 27px;
  }
  .main-heading-priority span {
    font-size: 12px;
  }
  .main-download-app h2 {
    display: none;
  }
  .main-download-app h3 {
    display: none;
  }
  .main-download-app .download-links {
    margin-top: 45px;
    margin-bottom: 25px;
  }
  .main-download-app .form-box,
  .main-download-app .login-box {
    max-width: none;
  }
  .main-download-app {
    background: #22c0cb;
  }
  .main-download-app .mobile-text {
    font-size: 17px;
    color: #fff;
    text-align: center;
  }
  .main-download-app .mobile-text span {
    display: block;
    color: #ffde00;
    font-style: italic;
    margin-top: 25px;
    margin-bottom: 45px;
  }
  .main-download-app .form-box p {
    font-size: 13px;
  }
  .form-inline-fields .advance-form .inner-block-form [type=checkbox] + label {
    padding-left: 28px;
    font-size: 13px;
  }
  .order-heading {
    font-size: 24px;
  }
  .form-inline-fields .price-box {
    padding: 27px 11px;
  }
  .form-inline-fields .price-box .title {
    font-size: 14px;
    color: #000;
  }
  .form-inline-fields .price-box .pack-name {
    font-size: 13px;
  }
  .form-inline-fields .price-box .description {
    font-size: 12px;
  }
  .form-inline-fields ul.total-price-left li:not(.action) {
    font-size: 15px;
  }
  .form-inline-fields ul.total-price-left li:not(.action) span {
    font-size: 11px;
    font-weight: 400;
  }
  .form-inline-fields .form-group > label {
    font-size: 13px;
  }
  .form-inline-fields .btn {
    height: auto;
    padding: 16px 11px;
    font-size: 12px;
  }
  .form-inline-fields .advance-form .inner-block-form .heading-block {
    font-size: 13px;
  }
  .footer .footer-col-1 form .btn {
    font-size: 13px;
    padding: 8px 17px;
  }
  .order-action .modal-content .order-link-block {
    margin-bottom: 10px;
  }
  .order-action .modal-content .order-link-block h3 {
    font-size: 20px;
  }
  .order-action .modal-content .order-link-block h3 br {
    display: none;
  }
  .order-action .modal-content .order-link-block p {
    font-size: 13px;
  }
  .order-action .close {
    right: 5px;
    top: -3px;
  }
  .attachment-pop-up .dz-message .extra-link-block ul li.list-inline-item:not(:last-child) {
    margin-right: 15px;
    margin-bottom: 15px;
  }
  .form-inline-fields .row-slide-range .range {
    min-width: 140px;
  }
  .form-inline-fields .row-slide-range label {
    font-size: 12px;
    min-width: 46px;
  }
  .form-inline-fields .price-box.fixed-length-box {
    padding: 31px 9px 9px;
    min-height: 187px;
  }
  .projects-section .btn {
    font-size: 14px;
  }
  .library-block .col-xs-6 {
    width: 50% !important;
  }
  .attachment-pop-up .library-block .library-filters > * {
    max-width: 190px;
  }
}
@media (min-width: 575px) and (max-width: 767px) {
  .form-inline-fields .small-label-block label {
    left: 13px;
  }
  .order-form-slider .slider-container {
    max-width: 305px;
  }
  .file-attachment {
    position: relative;
    width: 145px;
    height: 128px;
    border: 4px dotted #ccc;
  }
  .form-inline-fields .advance-form .inner-block-form .price-list li .label-box label {
    margin-bottom: 0;
    white-space: normal;
    height: auto;
    line-height: 15px;
  }
}
@media (max-width: 575px) {
  .form-inline-fields .form-group > label {
    padding-left: 15px;
    font-size: 11px;
    font-weight: 400;
    color: #000;
    white-space: nowrap;
  }
  .form-inline-fields .form-group > label + .col-xs-9 {
    float: right;
    -lh-property: 0;
width:-webkit-calc(75% - 15px);
width:-moz-calc(75% - 15px);
width:calc(75% - 15px);
;
  }
  .form-inline-fields .tag-styled {
    margin-bottom: 15px;
  }
  .form-inline-fields .small-label-block {
    padding-left: 15px;
  }
  .form-inline-fields .small-label-block label {
    left: -15px;
  }
  .form-inline-fields .price-box-label {
    line-height: inherit;
  }
  .form-inline-fields .form-group > label small {
    white-space: normal;
  }
  .form-inline-fields .advance-form [type=checkbox].filled-in:not(:checked) + label:after,
  .form-inline-fields .advance-form [type=checkbox].filled-in:checked + label:after {
    height: 17px;
    width: 17px;
  }
  .form-inline-fields .advance-form [type=checkbox].filled-in:checked + label:before {
    width: 6px;
    height: 11px;
  }
  .form-inline-fields .advance-form .inner-block-form .price-list li .label-box {
    padding: 8px 4px;
  }
  .form-inline-fields .advance-form .inner-block-form [type=radio] + label {
    padding-left: 21px;
    font-size: 11px;
    font-weight: 600;
    margin-bottom: 0;
    line-height: 14px;
  }
  .form-inline-fields .advance-form .inner-block-form [type=radio] + label span {
    font-size: 10px;
    display: block;
  }
  .form-inline-fields .advance-form .inner-block-form .price-list li .additional {
    font-size: 12px;
    margin-top: 5px;
  }
  .form-inline-fields .range-slider {
    margin-top: 0;
  }
  .yes-no-switch label span {
    font-size: 13px;
    width: 40px;
    height: 35px;
    line-height: 35px;
  }
  .form-inline-fields .advance-form .block {
    padding-bottom: 20px;
  }
  .form-inline-fields .advance-form .inner-block-form .heading-block {
    font-size: 12px;
  }
  .form-inline-fields .price-box {
    padding: 27px 4px 15px;
  }
  .form-inline-fields .price-box .pack-name {
    font-size: 11px;
  }
  .form-inline-fields .price-box .description {
    font-size: 11px;
  }
  .form-inline-fields .row-half {
    margin: 0 -4px;
  }
  .form-inline-fields .row-half [class^=col-] {
    padding-left: 4px;
    padding-right: 4px;
  }
  .form-inline-fields .btn {
    height: auto;
    padding: 16px 3px;
    font-size: 11px;
    font-weight: 400;
    white-space: nowrap;
  }
  .form-inline-fields ul.total-price-left {
    -webkit-box-pack: initial;
    -moz-box-pack: initial;
    -ms-flex-pack: initial;
    -webkit-justify-content: initial;
    justify-content: initial;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-align: center;
    -moz-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    margin-bottom: 0;
  }
  .form-inline-fields ul.total-price-left li:not(.action) {
    font-size: 13px;
    width: 26%;
    margin-bottom: 20px;
  }
  .form-inline-fields ul.total-price-left li.action {
    width: 7%;
    text-align: center;
  }
  .order-form-slider .bx-wrapper [data-action="owl-prev-btn"],
  .order-form-slider .slider-container [data-action="owl-prev-btn"] {
    left: -11px;
  }
  .order-form-slider .bx-wrapper [data-action="owl-next-btn"],
  .order-form-slider .slider-container [data-action="owl-next-btn"] {
    right: -12px;
  }
  .order-form-slider .slider-container {
    max-width: 185px;
    width: 100%;
  }
  .order-form-slider .bx-wrapper .bx-viewport li,
  .order-form-slider .slider-container .bx-viewport li {
    width: 89px !important;
    margin-right: 4px !important;
  }
  .file-attachment div i {
    width: 25px;
    height: 25px;
    line-height: 25px;
    font-size: 15px;
  }
  .file-attachment div span {
    font-size: 12px;
    margin-top: 5px;
    white-space: normal;
    line-height: 11px;
  }
  .file-attachment {
    position: relative;
    width: 93px;
    height: 78px;
  }
  .order-form-slider .order-upload-block {
    margin-right: 8px;
  }
  .file-attachment div {
    -lh-property: 0;
top:-webkit-calc(50% - 26px);
top:-moz-calc(50% - 26px);
top:calc(50% - 26px);
;
  }
  .order-form-slider .order-upload-block a {
    color: #575757;
    text-decoration: underline;
    display: inline-block;
    margin-top: 9px;
    position: absolute;
    left: 15px;
    right: 15px;
    font-size: 11px;
  }
  .order-form-slider {
    text-align: center;
  }
  .order-heading {
    padding-top: 22px;
    margin-bottom: 22px;
    font-size: 16px;
  }
  .login-box .form-footer a {
    padding: .85rem 10px;
  }
}
@media (min-width: 1367px) {
  .container-sm {
    max-width: 1363px;
    width: 100%;
  }
  .featured-section .feature-block {
    max-width: 500px;
  }
}
`;