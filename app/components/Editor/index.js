/**
 *
 * Editor
 *
 */

import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const customContentStyle = {
  width: '60%',
  maxWidth: 'none',
};

class Editor extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      previewImage: '',
    };
  }




  componentWillReceiveProps(nextProps) {
    this.setState({open: nextProps.popState});
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };
  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        disabled={true}
        onTouchTap={this.handleClose}
      />,
    ];
    return (
      <MuiThemeProvider>
        <div>
          <Dialog contentStyle={customContentStyle} actions={actions} modal={true} open={this.state.open}>
            <div className="attachment-pop-up" id="attachment-pop-up1" tabIndex={-1}>
              <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                  <div className="modal-body">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="top-fil-list">
                          <h4>Add Images &amp; Markup</h4>
                          <ul className="disabled">
                            <a href="#" className="ok-btn-a" data-dismiss="modal" aria-label="Close"><i className="fa fa-check"/></a>
                            <li className="hide-s">
                              <div className="filter-markup">
                                <i className="fa fa-arrow-left" aria-hidden="true"/>
                              </div>
                            </li>
                            <li className="hide-s">
                              <div className="filter-markup">
                                <i className="fa fa-arrow-right" aria-hidden="true"/>
                              </div>
                            </li>
                            <li>
                              <div className="filter-markup">
                                <i className="fa fa-crop" aria-hidden="true"/>
                              </div>
                            </li>
                            <li className="drop-down">
                              <div className="filter-markup">
                                <i className="fa fa-undo" aria-hidden="true"/>
                                <span>&nbsp;</span>
                              </div>
                              <div className="pop-hover-color rotate-sec">
                                <div className="common-div-s no-hover">
                                  <a href="#">Rotate 90o<i className="fa fa-undo" aria-hidden="true"/></a>
                                  <a href="#"><span>Straighten</span><input type="range" name="straighten" className="active"/><span className="thumb active"><span className="value">62</span></span></a>
                                </div>
                              </div>
                            </li>
                            <li className="drop-down">
                              <div className="filter-markup">
                                <i className="fa fa-red-circle" aria-hidden="true"/>
                                <span>&nbsp;</span>
                              </div>
                              <div className="pop-hover-color">
                                <div className="common-div-s active">
                                  <a href="#" className="pink-color"/>
                                </div>
                                <div className="common-div-s">
                                  <a href="#" className="yellow-color"/>
                                </div>
                                <div className="common-div-s">
                                  <a href="#" className="black-color"/>
                                </div>
                                <div className="common-div-s">
                                  <a href="#" className="blue-color"/>
                                </div>
                              </div>
                            </li>
                            <li className="drop-down">
                              <div className="filter-markup">
                                <i className="fa fa-line-box" aria-hidden="true"/>
                                <span>&nbsp;</span>
                              </div>
                              <div className="pop-hover-color">
                                <div className="common-div-s no-hover">
                                  <input type="range"/><span className="thumb"><span className="value"/></span>
                                </div>
                              </div>
                            </li>
                            <li className="drop-down">
                              <div className="filter-markup">
                                <i className="fa fa-left-bottom" aria-hidden="true"/>
                                <span>&nbsp;</span>
                              </div>
                              <div className="pop-hover-color crop-tools">
                                <div className="common-div-s active">
                                  <a href="#"><img src="/public/img/line-left.png"/></a>
                                </div>
                                <div className="common-div-s">
                                  <a href="#"><img src="/public/img/box-line.png"/></a>
                                </div>
                                <div className="common-div-s">
                                  <a href="#"><img src="/public/img/rectangle.png"/></a>
                                </div>
                                <div className="common-div-s">
                                  <a href="#"><img src="/public/img/circle.png"/></a>
                                </div>
                                <div className="common-div-s">
                                  <a href="#"><img src="/public/img/line-icon.png"/></a>
                                </div>
                                <div className="common-div-s">
                                  <a href="#"><img src="/public/img/pen-icon.png"/></a>
                                </div>
                              </div>
                            </li>
                            <li className="drop-down">
                              <div className="filter-markup">
                                <i className="fa fa-text" aria-hidden="true"/>
                                <span>&nbsp;</span>
                              </div>
                              <div className="pop-hover-color rotate-sec">
                                <div className="common-div-s no-hover">
                                  <a href="#"><i className="fa fa-list-ol" aria-hidden="true"/> Text Numbering</a>
                                  <a href="#"><i className="fa fa-text-width" aria-hidden="true"/> A | Free Hand text</a>
                                </div>
                              </div>
                            </li>
                            <li className="drop-down">
                              <div className="filter-markup">
                                <i className="fa fa-attach" aria-hidden="true"/>
                                <span>&nbsp;</span>
                              </div>
                              <div className="pop-hover-color crop-tools attach-f">
                                <div className="common-div-s active">
                                  <a href="#">Main cover</a>
                                </div>
                                <div className="common-div-s">
                                  <a href="#">Reference</a>
                                </div>
                                <div className="common-div-s">
                                  <a href="#">Other</a>
                                </div>
                              </div>
                            </li>
                            {/*
                             <li><i class="fa fa-search-plus" aria-hidden="true"></i><a href="#"><i class="fa fa-plus-square" aria-hidden="true"></i></a><a href="#"><i class="fa fa-minus-square" aria-hidden="true"></i></a></li> */}
                          </ul>
                          <div className="dropdown cust-dd-height">
                            {/*Trigger*/}
                            <button className="btn btn-primary dropdown-toggle waves-effect waves-light mbl-h-btns" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fa fa-arrows" aria-hidden="true"/></button>
                            {/*Menu*/}
                            <div className="dropdown-menu dropdown-primary" aria-labelledby="dropdownMenu1" data-dropdown-in="fadeIn" data-dropdown-out="fadeOut">
                              <li className>
                                <form className="form-inline-fields">
                                  <button className="btn btn-primary mbl-h-btns-desktop hide-tabs"><i className="fa fa-search-plus" aria-hidden="true"/></button>
                                  <button className="btn btn-primary mbl-h-btns-desktop hide-tabs"><i className="fa fa-search-minus" aria-hidden="true"/></button>
                                  <div className="md-form">
                                    <span className="label-fixed"><span className="badge-round">W</span></span>
                                    <input type="text" className="form-control" placeholder="3.25"/>
                                  </div>
                                  <div className="md-form">
                                    <span className="label-fixed"><span className="badge-round">H</span></span>
                                    <input type="text" className="form-control" placeholder="3.25"/>
                                  </div>
                                  <button className="btn btn-primary mbl-h-btns-desktop"><i className="fa fa-lock" aria-hidden="true"/></button>
                                  <div className="md-form">
                                    <select className="browser-default">
                                      <option value={1}>In</option>
                                      <option value={2}>cm</option>
                                      <option value={3}>mm</option>
                                    </select>
                                  </div>
                                  <button className="btn btn-primary mbl-h-btns-desktop"><i className="fa fa-check" aria-hidden="true"/></button>
                                  <button className="btn btn-primary mbl-h-btns-desktop hide-tabs"><i className="fa fa-trash" aria-hidden="true"/></button>
                                </form>
                              </li>
                            </div>
                          </div>
                          <div className="clearfix"/>
                          <p className="zoom-icons"><i className="fa fa-search-plus" aria-hidden="true"/></p>
                          <p className="zoom-icons"><i className="fa fa-search-minus" aria-hidden="true"/></p>
                        </div>
                        <div className="app-bottom-section">
                          <div className="col-md-10 text-xs-center">
                            <div className="row">
                              <div className="white-board-dev">
                                {
                                  (this.props.previewImage != "")
                                    ?
                                    <img src={this.props.previewImage} alt='editImage'/>
                                    :
                                    <canvas></canvas>
                                }
                              </div>
                            </div>
                          </div>
                          <div className="mbl-tools-del text-xs-center">
                            <ul>
                              <li>
                                <a href="#"><i className="fa fa-reply" aria-hidden="true"/></a>
                                <a href="#"><i className="fa fa-trash" aria-hidden="true"/></a>
                                <a href="#"><i className="fa fa-reply f-flip" aria-hidden="true"/></a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-md-2 right-side-section">
                            <div className="upload-lib upload-attachment-side-link  ">
                              <div className="upload-new-sec">
                                <i className="fa fa-cloud-upload" aria-hidden="true"/><br />
                                <a className="nav-link dropdown-toggle waves-effect waves-light" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"> Attach New</a>
                                <div className="dropdown-menu dropdown-default for-dropdown-attachment" aria-labelledby="dropdownMenu2" data-dropdown-in="fadeIn" data-dropdown-out="fadeOut">
                                  <ul>
                                    <li>
                                      <a href="#"><i className="fa fa-desktop" aria-hidden="true"/> Computer</a>
                                    </li>
                                    <li>
                                      <a href="#"><i className="fa fa-dropbox" aria-hidden="true"/> Dropbox</a>
                                    </li>
                                    <li>
                                      <a href="#"><i className="fa fa-drive" aria-hidden="true"/> Google Drive</a>
                                    </li>
                                    <li>
                                      <a href="#"><i className="fa fa-cloud-download" aria-hidden="true"/> One drive</a>
                                    </li>
                                    <li>
                                      <a href="#"><i className="fa fa-box" aria-hidden="true"/> Box</a>
                                    </li>
                                    <li>
                                      <a href="#"><i className="fa fa-facebook-square" aria-hidden="true"/> Facebook</a>
                                    </li>
                                    <li>
                                      <a href="#"><i className="fa fa-flickr" aria-hidden="true"/> Flickr</a>
                                    </li>
                                  </ul>
                                  <div className="modal-footer">
                                    <div className="md-form">
                                      <i className="fa fa-link prefix active" aria-hidden="true"/>
                                      <input type="email" id="form9" className="form-control validate" placeholder="Paste url to capture from web..."/>
                                    </div>
                                    <button type="button" className="btn btn-amber waves-effect waves-light">Capture</button>
                                  </div>
                                </div>
                              </div>
                              <div className="upload-new-sec" data-click-tab=".library-block" data-click-hide=".dropzone">
                                {/* <input type="file" name="library-new"> */}
                                <i className="fa fa-hdd-o" aria-hidden="true"/><br /> Library
                              </div>
                            </div>
                            <div className="white-board-sec">
                              <a href="#">Add a Whiteboard</a>
                            </div>
                            <div className="img-repeat-sec">
                              <ul>
                                <li>
                                  <a href="#"><img src="/public/img/kim.jpg"/></a>
                                </li>
                                <li>
                                  <a href="#"><img src="/public/img/second-image.png"/></a>
                                </li>
                                <li>
                                  <a href="#"><img src="/public/img/third-image.png"/></a>
                                </li>
                                <li>
                                  <a href="#"><img src="/public/img/fifth-image.png"/></a>
                                </li>
                                <li>
                                  <a href="#"><img src="/public/img/fifth-image.png"/></a>
                                </li>
                                <li>
                                  <a href="#"><img src="/public/img/fifth-image.png"/></a>
                                </li>
                                <li>
                                  <a href="#"><img src="/public/img/fifth-image.png"/></a>
                                </li>
                                <li>
                                  <a href="#"><img src="/public/img/fifth-image.png"/></a>
                                </li>
                                <li>
                                  <a href="#"><img src="/public/img/fifth-image.png"/></a>
                                </li>
                              </ul>
                              <div className="bottom-arrow-fun">
                                <a href="#"><i className="fa fa-caret-down" aria-hidden="true"/></a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Dialog>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Editor;
