import React from 'react';
import { connect } from 'react-redux';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const customContentStyle = {
  width: '60%',
  maxWidth: 'none',
  height:'100%',
  paddingTop:"0 !important"
};

export class PopUpEditorContent extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props){
    super(props);
    this.state = {
      open: false,
    };
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };
  hideDialog(popUp){

    // popUp.setState({
    //   open:false
    // })
    console.log(popUp);
  }
  render() {
    const actions = [
      <FlatButton
        label="Ok"
        primary={true}
        onTouchTap={this.handleClose}
      />
    ];
    return(
      <MuiThemeProvider>
        <div>
          <RaisedButton label="Modal Dialog" onTouchTap={this.handleOpen} />
          <Dialog
            actions={actions}
            modal={true}
            open={this.state.open}
           contentStyle={customContentStyle}
          >
      <div className="attachment-pop-up">
        <div className="modal-dialog modal-lg" role="document">


          <div className="modal-content">
            <div className="modal-body">
              <div className="row">
                <div className="col-md-12">
                  <div className="top-fil-list">
                    <h4>Add Images &amp; Markup</h4>
                    <ul className="disabled">
                      <a href="#" className="ok-btn-a" onTouchTap={this.handleClose}><i className="fa fa-check" /></a>
                      <li>
                        <div className="filter-markup">
                          <i className="fa fa-arrow-left" aria-hidden="true" />
                        </div>
                      </li>
                      <li>
                        <div className="filter-markup">
                          <i className="fa fa-arrow-right" aria-hidden="true" />
                        </div>
                      </li>
                      <li>
                        <div className="filter-markup">
                          <i className="fa fa-crop" aria-hidden="true" />
                        </div>
                      </li>
                      <li className="drop-down">
                        <div className="filter-markup">
                          <i className="fa fa-undo" aria-hidden="true" />
                        </div>
                        <div className="pop-hover-color rotate-sec">
                          <div className="common-div-s no-hover">
                            <a href="#">Rotate 90o<i className="fa fa-undo" aria-hidden="true" /></a>
                            <a href="#"><span>Straighten</span><input type="range" name="straighten" className="active" /><span className="thumb active" style={{left: '60.5313px', height: 30, width: 30, top: '-20px', marginLeft: '-15px'}}><span className="value">62</span></span></a>
                          </div>
                        </div>
                      </li>
                      <li className="drop-down">
                        <div className="filter-markup">
                          <i className="fa fa-red-circle" aria-hidden="true" />
                        </div>
                        <div className="pop-hover-color">
                          <div className="common-div-s active">
                            <a href="#" className="pink-color" />
                          </div>
                          <div className="common-div-s">
                            <a href="#" className="yellow-color" />
                          </div>
                          <div className="common-div-s">
                            <a href="#" className="black-color" />
                          </div>
                          <div className="common-div-s">
                            <a href="#" className="blue-color" />
                          </div>
                        </div>
                      </li>
                      <li className="drop-down">
                        <div className="filter-markup">
                          <i className="fa fa-line-box" aria-hidden="true" />
                        </div>
                        <div className="pop-hover-color">
                          <div className="common-div-s no-hover">
                            <input type="range" /><span className="thumb"><span className="value" /></span>
                          </div>
                        </div>
                      </li>
                      <li className="drop-down">
                        <div className="filter-markup">
                          <i className="fa fa-left-bottom" aria-hidden="true" />
                        </div>
                        <div className="pop-hover-color crop-tools">
                          <div className="common-div-s active">
                            <a href="#"><img src="/public/img/line-left.png" /></a>
                          </div>
                          <div className="common-div-s">
                            <a href="#"><img src="/public/img/box-line.png" /></a>
                          </div>
                          <div className="common-div-s">
                            <a href="#"><img src="/public/img/rectangle.png" /></a>
                          </div>
                          <div className="common-div-s">
                            <a href="#"><img src="/public/img/circle.png" /></a>
                          </div>
                          <div className="common-div-s">
                            <a href="#"><img src="/public/img/line-icon.png" /></a>
                          </div>
                          <div className="common-div-s">
                            <a href="#"><img src="/public/img/pen-icon.png" /></a>
                          </div>
                        </div>
                      </li>
                      <li className="drop-down no-arrow">
                        <div className="filter-markup">
                          <i className="fa fa-text" aria-hidden="true" />
                        </div>
                      </li>
                      <li className="drop-down no-arrow" data-toggle="modal" data-target="#quick-look-ex">
                        <div className="filter-markup">
                          <i className="fa fa-attach" aria-hidden="true" />
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="app-bottom-section">
                    <div className="col-md-9 text-xs-center">
                      <div className="row">
                        <div className="white-board-dev">
                          <form action="/file-upload" className="dropzone" id="pop-drop">
                            <div className="dz-default dz-message">
                              <h2 className="hidden-md-down">Drop a file here</h2>
                              <span className="or hidden-md-down">or</span>
                              <span className="btn btn-primary">Choose a local file</span>
                              <div className="extra-link-block">
                                <span>You can also choose it from</span>
                                <ul className="list-inline list-click-able">
                                  <li className="list-inline-item"><a href="#">Arbitary links</a></li>
                                  <li className="list-inline-item"><a href="#">Url Screenshot</a></li>
                                  <li className="list-inline-item"><a href="#">Google Drive</a></li>
                                  <li className="list-inline-item"><a href="#">One Drive</a></li>
                                  <li className="list-inline-item"><a href="#">Box</a></li>
                                  <li className="list-inline-item"><a href="#">facebook</a></li>
                                  <li className="list-inline-item"><a href="#">Flickr</a></li>
                                </ul>
                              </div>
                            </div>
                            <div className="fallback">
                              <input name="file" type="file" />
                            </div>
                          </form>
                          <div style={{display: 'none'}} className="library-block">
                            <h4>Recent Images Library <i className="fa fa-times float-xs-right" data-click-tab=".dropzone" data-click-hide=".library-block" /></h4>
                            <div className="text-xs-left library-filters">
                              <a href="#" className="d-inline-block"><i className="fa fa-filter" /> <i className="fa fa-th-list" /></a>
                              <form action="#" className="d-inline-block">
                                <div className="input-group">
                                  <input type="text" className="form-control" placeholder="Search" />
                                  <span className="input-group-btn">
                                    <button className="btn" type="button"><i className="fa fa-search" /></button>
                                  </span>
                                </div>
                              </form>
                            </div>
                            <div className="row">
                              <div className="col-md-3 col-xs-6">
                                <label href="#" className="library-item">
                                  <img src="/public/img/kim.jpg" alt="#" />
                                  <div className="library-item-header text-xs-left">
                                    <span className="input-span">
                                      <input type="checkbox" name id className="filled-in" />
                                      <label htmlFor="checkbox1" /></span>
                                    <span className="float-xs-right text-xs-right">
                                      <span> Today at 2:21 PM  <br /> @johndoe                                                                            </span>
                                    </span>
                                  </div>
                                  <div className="library-item-footer text-xs-left">
                                    <span>first name</span>
                                    <span className="float-xs-right">Main tag</span>
                                  </div>
                                </label>
                              </div>
                              <div className="col-md-3 col-xs-6">
                                <label href="#" className="library-item">
                                  <img src="/public/img/kim.jpg" alt="#" />
                                  <div className="library-item-header text-xs-left">
                                    <span className="input-span">
                                      <input type="checkbox" name id className="filled-in" />
                                      <label htmlFor="checkbox1" /></span>
                                    <span className="float-xs-right text-xs-right">
                                      <span> Today at 2:21 PM  <br /> @johndoe                                                                            </span>
                                    </span>
                                  </div>
                                  <div className="library-item-footer text-xs-left">
                                    <span>first name</span>
                                    <span className="float-xs-right">Main tag</span>
                                  </div>
                                </label>
                              </div>
                              <div className="col-md-3 col-xs-6">
                                <label href="#" className="library-item">
                                  <img src="/public/img/kim.jpg" alt="#" />
                                  <div className="library-item-header text-xs-left">
                                    <span className="input-span">
                                      <input type="checkbox" name id className="filled-in" />
                                      <label htmlFor="checkbox1" /></span>
                                    <span className="float-xs-right text-xs-right">
                                      <span> Today at 2:21 PM  <br /> @johndoe                                                                            </span>
                                    </span>
                                  </div>
                                  <div className="library-item-footer text-xs-left">
                                    <span>first name</span>
                                    <span className="float-xs-right">Main tag</span>
                                  </div>
                                </label>
                              </div>
                              <div className="col-md-3 col-xs-6">
                                <label href="#" className="library-item">
                                  <img src="/public/img/kim.jpg" alt="#" />
                                  <div className="library-item-header text-xs-left">
                                    <span className="input-span">
                                      <input type="checkbox" name id className="filled-in" />
                                      <label htmlFor="checkbox1" /></span>
                                    <span className="float-xs-right text-xs-right">
                                      <span> Today at 2:21 PM  <br /> @johndoe                                                                            </span>
                                    </span>
                                  </div>
                                  <div className="library-item-footer text-xs-left">
                                    <span>first name</span>
                                    <span className="float-xs-right">Main tag</span>
                                  </div>
                                </label>
                              </div>
                              <div className="col-md-3 col-xs-6">
                                <label href="#" className="library-item">
                                  <img src="/public/img/kim.jpg" alt="#" />
                                  <div className="library-item-header text-xs-left">
                                    <span className="input-span">
                                      <input type="checkbox" name id className="filled-in" />
                                      <label htmlFor="checkbox1" /></span>
                                    <span className="float-xs-right text-xs-right">
                                      <span> Today at 2:21 PM  <br /> @johndoe                                                                            </span>
                                    </span>
                                  </div>
                                  <div className="library-item-footer text-xs-left">
                                    <span>first name</span>
                                    <span className="float-xs-right">Main tag</span>
                                  </div>
                                </label>
                              </div>
                              <div className="col-md-3 col-xs-6">
                                <label href="#" className="library-item">
                                  <img src="/public/img/kim.jpg" alt="#" />
                                  <div className="library-item-header text-xs-left">
                                    <span className="input-span">
                                      <input type="checkbox" name id className="filled-in" />
                                      <label htmlFor="checkbox1" /></span>
                                    <span className="float-xs-right text-xs-right">
                                      <span> Today at 2:21 PM  <br /> @johndoe                                                                            </span>
                                    </span>
                                  </div>
                                  <div className="library-item-footer text-xs-left">
                                    <span>first name</span>
                                    <span className="float-xs-right">Main tag</span>
                                  </div>
                                </label>
                              </div>
                              <div className="col-md-3 col-xs-6">
                                <label href="#" className="library-item">
                                  <img src="/public/img/kim.jpg" alt="#" />
                                  <div className="library-item-header text-xs-left">
                                    <span className="input-span">
                                      <input type="checkbox" name id className="filled-in" />
                                      <label htmlFor="checkbox1" /></span>
                                    <span className="float-xs-right text-xs-right">
                                      <span> Today at 2:21 PM  <br /> @johndoe                                                                            </span>
                                    </span>
                                  </div>
                                  <div className="library-item-footer text-xs-left">
                                    <span>first name</span>
                                    <span className="float-xs-right">Main tag</span>
                                  </div>
                                </label>
                              </div>
                              <div className="col-md-3 col-xs-6">
                                <label href="#" className="library-item">
                                  <img src="/public/img/kim.jpg" alt="#" />
                                  <div className="library-item-header text-xs-left">
                                    <span className="input-span">
                                      <input type="checkbox" name id className="filled-in" />
                                      <label htmlFor="checkbox1" /></span>
                                    <span className="float-xs-right text-xs-right">
                                      <span> Today at 2:21 PM  <br /> @johndoe                                                                            </span>
                                    </span>
                                  </div>
                                  <div className="library-item-footer text-xs-left">
                                    <span>first name</span>
                                    <span className="float-xs-right">Main tag</span>
                                  </div>
                                </label>
                              </div>
                              <div className="col-md-3 col-xs-6">
                                <label href="#" className="library-item">
                                  <img src="/public/img/kim.jpg" alt="#" />
                                  <div className="library-item-header text-xs-left">
                                    <span className="input-span">
                                      <input type="checkbox" name id className="filled-in" />
                                      <label htmlFor="checkbox1" /></span>
                                    <span className="float-xs-right text-xs-right">
                                      <span> Today at 2:21 PM  <br /> @johndoe                                                                            </span>
                                    </span>
                                  </div>
                                  <div className="library-item-footer text-xs-left">
                                    <span>first name</span>
                                    <span className="float-xs-right">Main tag</span>
                                  </div>
                                </label>
                              </div>
                              <div className="col-md-3 col-xs-6">
                                <label href="#" className="library-item">
                                  <img src="/public/img/kim.jpg" alt="#" />
                                  <div className="library-item-header text-xs-left">
                                    <span className="input-span">
                                      <input type="checkbox" name id className="filled-in" />
                                      <label htmlFor="checkbox1" /></span>
                                    <span className="float-xs-right text-xs-right">
                                      <span> Today at 2:21 PM  <br /> @johndoe                                                                            </span>
                                    </span>
                                  </div>
                                  <div className="library-item-footer text-xs-left">
                                    <span>first name</span>
                                    <span className="float-xs-right">Main tag</span>
                                  </div>
                                </label>
                              </div>
                              <div className="col-md-3 col-xs-6">
                                <label href="#" className="library-item">
                                  <img src="/public/img/kim.jpg" alt="#" />
                                  <div className="library-item-header text-xs-left">
                                    <span className="input-span">
                                      <input type="checkbox" name id className="filled-in" />
                                      <label htmlFor="checkbox1" /></span>
                                    <span className="float-xs-right text-xs-right">
                                      <span> Today at 2:21 PM  <br /> @johndoe                                                                            </span>
                                    </span>
                                  </div>
                                  <div className="library-item-footer text-xs-left">
                                    <span>first name</span>
                                    <span className="float-xs-right">Main tag</span>
                                  </div>
                                </label>
                              </div>
                              <div className="col-md-3 col-xs-6">
                                <label href="#" className="library-item">
                                  <img src="/public/img/kim.jpg" alt="#" />
                                  <div className="library-item-header text-xs-left">
                                    <span className="input-span">
                                      <input type="checkbox" name id className="filled-in" />
                                      <label htmlFor="checkbox1" /></span>
                                    <span className="float-xs-right text-xs-right">
                                      <span> Today at 2:21 PM  <br /> @johndoe                                                                            </span>
                                    </span>
                                  </div>
                                  <div className="library-item-footer text-xs-left">
                                    <span>first name</span>
                                    <span className="float-xs-right">Main tag</span>
                                  </div>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 right-side-section">
                      <div className="upload-lib upload-attachment-side-link  ">
                        <div className="upload-new-sec" data-toggle="modal" data-target="#quick-look-ex">
                          <i className="fa fa-cloud-upload" aria-hidden="true" /><br />
                          Attach New
                        </div>
                        <div className="upload-new-sec" data-click-tab=".library-block" data-click-hide=".dropzone">
                          <input type="file" name="library-new" />
                          <i className="fa fa-hdd-o" aria-hidden="true" /><br />
                          Library
                        </div>
                      </div>
                      <div className="white-board-sec">
                        <a href="#">Add a Whiteboard</a>
                      </div>
                      <div className="img-repeat-sec">
                        <ul>
                          <li><a href="#"><img src="/public/img/kim.jpg" /></a></li>
                          <li><a href="#"><img src="/public/img/second-image.png" /></a></li>
                          <li><a href="#"><img src="/public/img/third-image.png" /></a></li>
                          <li><a href="#"><img src="/public/img/fifth-image.png" /></a></li>
                          <li><a href="#"><img src="/public/img/fifth-image.png" /></a></li>
                          <li><a href="#"><img src="/public/img/fifth-image.png" /></a></li>
                          <li><a href="#"><img src="/public/img/fifth-image.png" /></a></li>
                          <li><a href="#"><img src="/public/img/fifth-image.png" /></a></li>
                          <li><a href="#"><img src="img/fifth-image.png" /></a></li>
                        </ul>
                        <div className="bottom-arrow-fun">
                          <a href="#"><i className="fa fa-caret-down" aria-hidden="true" /></a>
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
      <PopUpEditorContent model={this} />
      </Dialog>
      </div>
    </MuiThemeProvider>

    )
  }
}
function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(PopUpEditorContent);
