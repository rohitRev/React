/*
 *
 * Order
 *
 */

import React from 'react';
import { connect } from 'react-redux';



export class OrderBody extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
<div className="order-page-bg">
        <div className="container container-sm">
          <div className="order-page-block">
            <h1 className="order-heading text-xs-center">New Custom Embroidery Digitizing Order Form</h1>
            <div className="order-form-slider upload-block-parent">
              <form action className="order-upload-block ">
                <div className="file-attachment" data-toggle="modal" data-target="#attachment-pop-up">
                  <div>
                    <i className="fa fa-paperclip" aria-hidden="true" />
                    <span>Add Attachment</span>
                  </div>
                </div>
                <a href="#" className="list-link">List of formats we accept</a>
              </form>
              <div className="slider-container upload-container hidden-sm-down">
                <form action="/file-upload" className="dropzone dz-clickable">
                  <div className="dz-default dz-message">
                    <strong data-action="owl-prev-btn" aria-hidden="true">Or</strong>
                    <i className="fa fa-cloud-upload main-icon" aria-hidden="true" />
                    <h2>Drag n Drop</h2>
                    <h3>your Images here &amp; you can markup images too.</h3>
                    <ul className="list-inline upload-links">
                      <li className="list-inline-item"><a href="#"><i className="fa fa-upload" /></a></li>
                      <li className="list-inline-item"><a href="#"><i className="fa fa-dropbox" /></a></li>
                      <li className="list-inline-item"><a href="#"><img src="img/g-drive.svg" alt /></a></li>
                      <li className="list-inline-item"><a href="#"><i className="fa fa-cloud-download" aria-hidden="true" /></a></li>
                      <li className="list-inline-item"><a href="#"><img src="img/box-logo.svg" alt /></a></li>
                      <li className="list-inline-item"><a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
                      <li className="list-inline-item"><a href="#"><i className="fa fa-external-link" aria-hidden="true" /></a></li>
                      <li className="list-inline-item"><a href="#"><i className="fa fa-book" aria-hidden="true" /></a></li>
                    </ul>
                  </div>
                </form>
              </div>
            </div>
            <form className="form-inline-fields">
              <div className="form-group row">
                <label className="col-sm-3 col-xs-3 col-sm-3 col-form-label text-xs-right">Design Name:</label>
                <div className="col-sm-9 col-xs-9">
                  <input className="form-control" type="text" />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-xs-3 col-sm-3 col-form-label text-xs-right as-per-label">Colors:</label>
                <div className="col-xs-9 col-sm-9">
                  <div className="row">
                    <div className="col-sm-5 col-md-4">
                      <span className="as-per-btn">
                        <input defaultChecked className="filled-in" id="checkbox1" type="checkbox" />
                        <label htmlFor="checkbox1">
                          <span className="tag-styled">As Per My Artwork</span>
                        </label>
                      </span>
                    </div>
                    <div className="col-sm-7 col-md-8 small-label-block">
                      <label className="active">Or</label>
                      <textarea placeholder="Define Specific Colors e.g." className="md-textarea" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-xs-3 col-form-label text-xs-right">Sizes:</label>
                <div className="col-xs-9">
                  <div className="small-custom-select">
                    <div className="select-wrapper mdb-select small-input"><span className="caret">▼</span><input className="select-dropdown" readOnly="true" data-activates="select-options-3336212c-f145-1ed3-ac8c-51c6f0f60b1e" defaultValue="Inch" type="text" /><ul id="select-options-3336212c-f145-1ed3-ac8c-51c6f0f60b1e" className="dropdown-content select-dropdown "><li className><span>Inch</span></li><li className><span>Pixel</span></li><li className><span>Inch</span></li><li className><span>Pixel</span></li></ul><select className="mdb-select small-input initialized">
                        <option value={1}>Inch</option>
                        <option value={2}>Pixel</option>
                        <option value={1}>Inch</option>
                        <option value={2}>Pixel</option>
                      </select></div>
                  </div>
                </div>
              </div>
              <div className="form-group row size-append-able">
                <label className="col-xs-3 col-form-label text-xs-right">Size-<span>1</span>:</label>
                <div className="col-xs-9">
                  <div className="row">
                    <div className="col-md-3 col-xs-6">
                      <div className="md-form">
                        <span className="label-fixed"><span className="badge-round">W</span></span>
                        <input className="form-control" placeholder="Width" type="text" />
                      </div>
                    </div>
                    <div className="col-md-3 col-xs-6">
                      <div className="md-form">
                        <span className="label-fixed"><span className="badge-round">H</span></span>
                        <input className="form-control" placeholder="Height" type="text" />
                      </div>
                    </div>
                    <div className="col-md-6 col-xs-12">
                      <input className="form-control" placeholder="Size Notes if any..." type="text" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-xs-3 col-form-label text-xs-right" />
                <div className="col-xs-9">
                  <div className="plus-row">
                    <a className="add-more" href="javascript:void(null);">ADD MORE SIZES</a> &nbsp; <a className="del-sec" style={{display: 'none'}} href="javascript:void(null);">DELETE LAST SIZE</a>
                  </div>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-xs-3 col-sm-3 col-form-label text-xs-right">Format: <br /> <small>Formats list we provide</small></label>
                <div className="col-xs-9 col-sm-9">
                  <div className="select-full sky-blue">
                    <select name className="select-format select2-hidden-accessible" multiple tabIndex={-1} style={{}} aria-hidden="true">
                      <option value="DST">AI</option>
                      <option value="#">EPS</option>
                      <option value="#">CDR</option>
                      <option value="#">PSD</option>
                      <option value="#">PDF</option>
                      <option value="#">SVG</option>
                    </select><span className="select2 select2-container select2-container--default" dir="ltr" style={{width: 57}}><span className="selection"><span className="select2-selection select2-selection--multiple" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex={-1}><ul className="select2-selection__rendered"><li className="select2-search select2-search--inline"><input className="select2-search__field" tabIndex={0} autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false" role="textbox" aria-autoComplete="list" placeholder="e.g. AI, EPS, CDR, PSD, PDF, SVG etc." style={{width: 578}} type="search" /></li></ul></span></span><span className="dropdown-wrapper" aria-hidden="true" /></span>
                  </div>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-xs-3 col-form-label text-xs-right">Fabric:</label>
                <div className="col-xs-9">
                  <div className="select-full light-pink">
                    <select name className="select-fabric select2-hidden-accessible" multiple tabIndex={-1} style={{}} aria-hidden="true">
                      <option value="DST">Pique Polo</option>
                      <option value="#">Cotton</option>
                      <option value="#">Denim</option>
                      <option value="#">Canvas</option>
                    </select><span className="select2 select2-container select2-container--default" dir="ltr" style={{width: 95}}><span className="selection"><span className="select2-selection select2-selection--multiple" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex={-1}><ul className="select2-selection__rendered"><li className="select2-search select2-search--inline"><input className="select2-search__field" tabIndex={0} autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false" role="textbox" aria-autoComplete="list" placeholder="e.g. Pique Polo, Cotton, Denim, Canvas, etc." style={{width: 578}} type="search" /></li></ul></span></span><span className="dropdown-wrapper" aria-hidden="true" /></span>
                  </div>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-xs-3 col-form-label text-xs-right">Location:</label>
                <div className="col-xs-9">
                  <div className="select-full green">
                    <select name className="select-location select2-hidden-accessible" multiple tabIndex={-1} style={{}} aria-hidden="true">
                      <option value="DST">Left Chest</option>
                      <option value="#">Cap Front</option>
                      <option value="#">Jacket Bag</option>
                      <option value="#">Bag</option>
                    </select><span className="select2 select2-container select2-container--default" dir="ltr" style={{width: 96}}><span className="selection"><span className="select2-selection select2-selection--multiple" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex={-1}><ul className="select2-selection__rendered"><li className="select2-search select2-search--inline"><input className="select2-search__field" tabIndex={0} autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false" role="textbox" aria-autoComplete="list" placeholder="e.g. Left Chest, Cap Front, Jacket Back, Bag, etc." style={{width: 578}} type="search" /></li></ul></span></span><span className="dropdown-wrapper" aria-hidden="true" /></span>
                  </div>
                </div>
              </div>
              <div className="form-group row">
                <div className="advance-form">
                  <label className="col-xs-3 col-form-label text-xs-right" />
                  <div className="col-xs-12 col-sm-9">
                    <h6 className="text-xs-center" data-toggle="collapse" data-target=".inner-block-form">Advance Details <span>(Optional) <i className="fa fa-minus-circle" aria-hidden="true" /></span></h6>
                    <div className="inner-block-form collapse">
                      <div className="block">
                        <span className="heading-block">Turanround Time</span>
                        <ul className="list-inline price-list">
                          <li className="list-inline-item">
                            <div className="label-box">
                              <input defaultChecked className="filled-in" id="time-1" name="time" type="radio" />
                              <label htmlFor="time-1">8-24 Hours <span>(Normal)</span></label>
                            </div>
                          </li><li className="list-inline-item">
                            <div className="label-box">
                              <input className="filled-in" id="time-2" name="time" type="radio" />
                              <label htmlFor="time-2">6-14 Hours <span>(Urgent)</span></label>
                            </div>
                            <span className="additional">$10 <span>additional</span></span>
                          </li><li className="list-inline-item">
                            <div className="label-box">
                              <input className="filled-in" id="time-3" name="time" type="radio" />
                              <label htmlFor="time-3">2-6 Hours <span>(Top Urgent)</span></label>
                            </div>
                            <span className="additional">$30 <span>additional</span></span>
                          </li>
                        </ul>
                      </div>
                      <div className="block">
                        <span className="heading-block">Machine Trims Settings</span>
                        <div className="range-slider">
                          <div className="slider slider-horizontal" id style={{marginBottom: 0}}><div className="slider-track"><div className="slider-track-low" style={{left: 0, width: '0%'}} /><div className="slider-selection tick-slider-selection" style={{left: '0%', width: '50%'}} /><div className="slider-track-high" style={{right: 0, width: '50%'}} /></div><div className="tooltip tooltip-main top hide" role="presentation" style={{left: '50%', marginLeft: 0}}><div className="tooltip-arrow" /><div className="tooltip-inner">3</div></div><div className="tooltip tooltip-min top hide" role="presentation" style={{}}><div className="tooltip-arrow" /><div className="tooltip-inner" /></div><div className="tooltip tooltip-max top hide" role="presentation" style={{}}><div className="tooltip-arrow" /><div className="tooltip-inner" /></div><div className="slider-tick-label-container" style={{marginLeft: 0}}><div className="slider-tick-label" style={{width: 0}}>Trim all</div><div className="slider-tick-label" style={{width: 0}}>1mm</div><div className="slider-tick-label" style={{width: 0}}>2mm</div><div className="slider-tick-label" style={{width: 0}}>3mm</div><div className="slider-tick-label" style={{width: 0}}>No Trim</div></div><div className="slider-tick-container"><div className="slider-tick round in-selection" style={{left: '0%'}} /><div className="slider-tick round in-selection" style={{left: '25%'}} /><div className="slider-tick round in-selection" style={{left: '50%'}} /><div className="slider-tick round" style={{left: '75%'}} /><div className="slider-tick round" style={{left: '100%'}} /></div><div className="slider-handle min-slider-handle round" role="slider" aria-valuemin={1} aria-valuemax={5} style={{left: '50%'}} aria-valuenow={3} tabIndex={0} /><div className="slider-handle max-slider-handle round hide" role="slider" aria-valuemin={1} aria-valuemax={5} style={{left: '0%'}} aria-valuenow={1} tabIndex={0} /></div><input name="somename" data-provide="slider" data-slider-ticks="[1, 2, 3, 4, 5]" data-slider-ticks-labels={"&quot;Trim all","1mm","2mm","3mm","No Trim"} data-slider-min={1} data-slider-max={5} data-slider-step={1} data-slider-value={3} data-slider-tooltip="hide" style={{display: 'none'}} data-value={3} defaultValue={3} type="text" />
                        </div>
                        <div className="clearfix" />
                      </div>
                      <div className="block">
                        <span className="heading-block">Actual Embroidery Sample</span>
                        <span className="yes-no-switch">
                          <label className="yes" htmlFor="sample-no"><input id="sample-no" defaultChecked name="sample" className="browser-default" type="radio" /><span>NO</span></label>
                          <label className="no" htmlFor="sample-yes"><input id="sample-yes" name="sample" className="browser-default" type="radio" /><span>Yes</span></label>
                        </span>
                      </div>
                      <div className="block">
                        <span className="heading-block">Embroidery Thread Brand Preference in color sequence chart</span>
                        <div className="small-input select2-style">
                          <select className="select2-size select2-hidden-accessible" tabIndex={-1} style={{}} aria-hidden="true">
                            <option value defaultValue>Any</option>
                            <option value={2}>Option 2</option>
                            <option value={3}>Option 3</option>
                          </select><span className="select2 select2-container select2-container--default" dir="ltr" style={{width: 'auto'}}><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex={0} aria-labelledby="select2-hux5-container"><span className="select2-selection__rendered" id="select2-hux5-container" title="Any">Any</span><span className="select2-selection__arrow" role="presentation"><b role="presentation" /></span></span></span><span className="dropdown-wrapper" aria-hidden="true" /></span>
                        </div>
                      </div>
                      <div className="block">
                        <span className="heading-block">Do you want customized mockup of your Digitized Design?</span>
                        <div className="clearfix" />
                        <div className="row-half row">
                          <div className="col-md-4 col-sm-6 col-xs-4">
                            <span className="yes-no-switch">
                              <label className="yes" htmlFor="sample-no-"><input id="sample-no-" defaultChecked name="sample-" className="browser-default" type="radio" /><span>NO</span></label>
                              <label className="no" htmlFor="sample-yes-"><input id="sample-yes-" name="sample-" className="browser-default" type="radio" /><span>Yes</span></label>
                            </span>
                          </div>
                          <div className="col-md-8 col-sm-6 col-xs-8">
                            <input placeholder="e.g. Display mockup on Tshirts, cap, jacket, bags, etc" type="text" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-xs-3 col-form-label text-xs-right">Special Notes <span className="hidden-xs-down">(If any):</span> <small className="hidden-sm-up">(If any):</small></label>
                <div className="col-xs-9">
                  <input placeholder="e.g. No Running Stitches, 3D puff design, applique design etc." type="text" />
                </div>
              </div>
              <div className="form-group row ">
                <label className="col-xs-12 col-sm-3  col-form-label text-sm-right price-box-label">Choose Price:</label>
                <div className="col-xs-12 col-sm-9">
                  <div className="row-half row">
                    <div className="col-xs-4">
                      <label className="price-box text-xs-center">
                        <div className="checkbox-cont">
                          <input id="price" className="filled-in" type="checkbox" />
                          <label htmlFor="price" />
                        </div>
                        <div className="title">
                          $20
                        </div>
                        <div className="pack-name">
                          (Standard Size)
                        </div>
                        <div className="description">
                          upto 4 inch
                          <span>either width or height</span>
                        </div>
                      </label>
                      <div className="qty-box">
                        QTY: <input defaultValue={1} type="number" />
                      </div>
                    </div>
                    <div className="col-xs-4">
                      <label className="price-box text-xs-center">
                        <div className="checkbox-cont">
                          <input id="price2" className="filled-in" type="checkbox" />
                          <label htmlFor="price2" />
                        </div>
                        <div className="title">
                          $30
                        </div>
                        <div className="pack-name">
                          (Portrait Size)
                        </div>
                        <div className="description">
                          4 inch - 8 inch
                          <span>either width or height</span>
                        </div>
                      </label>
                      <div className="qty-box">
                        QTY: <input defaultValue={1} type="number" />
                      </div>
                    </div>
                    <div className="col-xs-4">
                      <label className="price-box text-xs-center">
                        <div className="checkbox-cont">
                          <input id="price3" className="filled-in" type="checkbox" />
                          <label htmlFor="price3" />
                        </div>
                        <div className="title">
                          $45
                        </div>
                        <div className="pack-name">
                          (Full Size)
                        </div>
                        <div className="description">
                          Above 8 inch
                          <span>either width or height</span>
                        </div>
                      </label>
                      <div className="qty-box">
                        QTY: <input defaultValue={1} type="number" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-group row ">
                <label className="col-xs-12 col-sm-3 col-form-label text-sm-right">Order Summary:</label>
                <div className="col-xs-12 col-sm-9">
                  <ul className="total-price-left">
                    <li>$20<span>(Standard Size)</span>
                    </li>
                    <li className="action">+</li>
                    <li>$30<span>(Portrait Size)</span>
                    </li>
                    <li className="action">+</li>
                    <li>$45<span>(Full Size)</span>
                    </li>
                    <li className="action">+</li>
                    <li>$10<span>(Full Size)</span>
                    </li>
                    <li className="action">+</li>
                    <li>$20<span>(Actual Embroidered Sample)</span>
                    </li>
                    <li className="action">=</li>
                    <li>$125<span>(Total)</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="form-group row ">
                <label className="col-xs-3 col-form-label text-xs-right price-box-label" />
                <div className="col-sm-9 col-xs-12">
                  <div className="row-half row">
                    <div className="col-xs-4">
                      <a href="#" className="btn btn-primary btn-block waves-effect waves-light">Save For Later</a>
                      <span className="btn-tip">we will not process until you order</span>
                    </div>
                    <div className="col-xs-4">
                      <a href="#" className="btn btn-purple btn-block waves-effect waves-light">Get Quote</a>
                      <span className="btn-tip">If design is too much complex &amp; takes longer than 6 hours digitizing. or Get a stitch estimate &amp; price.</span>
                    </div>
                    <div className="col-xs-4">
                      <a href="#" className="btn btn-orange btn-block waves-effect waves-light">Add to Cart</a>
                      <span className="btn-tip">
                        Place order right away &amp; recieve downloadable files.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

    );
  }
}


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(OrderBody);