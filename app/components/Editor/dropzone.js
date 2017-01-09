import React from 'react';
import ReactDOMServer from 'react-dom/server';
import DropzoneComponent from 'react-dropzone-component';


class DropZone extends React.Component {
    constructor(props) {
        super(props);

        // For a full list of possible configurations,
        // please consult http://www.dropzonejs.com/#configuration
        this.djsConfig = {
            addRemoveLinks: true,
            acceptedFiles: "image/jpeg,image/png,image/gif",
            dictDefaultMessage:"",
            previewTemplate: ReactDOMServer.renderToStaticMarkup(
              <div className="dz-preview asdf dz-processing dz-success dz-complete dz-image-preview">
                <div  className="dz-image">
                  <img data-dz-thumbnail="" alt="" src="" />
                </div>
                <div className="dz-details" >
                  <div > Markup </div>
                </div>
                <div className="dz-progress">
                  <span className="dz-upload" data-dz-uploadprogress="" ></span>
                </div>
                <div className="dz-error-message">
                  <span data-dz-errormessage=""></span>
                </div>
                <div className="dz-success-mark">      </div>
                <div className="dz-error-mark">     </div>
              </div>
            )
        };

        this.componentConfig = {
            iconFiletypes: ['.jpg', '.png', '.gif'],
            showFiletypeIcon: true,
            postUrl: '/uploadHandler',
        };

        // If you want to attach multiple callbacks, simply
        // create an array filled with all your callbacks.
        this.callbackArray = [() => console.log('Hi!'), () => console.log('Ho!')];

        // Simple callbacks work too, of course
        this.callback = (e) => {
          const ths = this;
          e.previewElement.addEventListener("click", (e) => {
            this.props.open(true);
            this.props.imageEdit(e.target.parentElement.parentElement.querySelector('.dz-image').children[0].getAttribute('src'));
          })
        }

        this.success = file => console.log('uploaded', file);

        this.removedfile = file => console.log('removing...', file);

    }

    render() {
        const config = this.componentConfig;
        const djsConfig = this.djsConfig;
        //console.log( this.dropzone );

        // For a list of all possible events (there are many), see README.md!
        const eventHandlers = {
            init: dz => this.dropzone = dz,
            drop: this.callbackArray,
            addedfile: this.callback,
            success: this.success,
            removedfile: this.removedfile,
            thumbnail: (e, data) => {

            }
        }

        return (
            <DropzoneComponent config={config} eventHandlers={eventHandlers} djsConfig={djsConfig} >
                  <div className="dz-default dz-message">
                    <strong data-action="owl-prev-btn" aria-hidden="true">Or</strong>
                    <i className="fa fa-cloud-upload main-icon" aria-hidden="true"></i>
                    <h2>Drag n Drop</h2>
                    <h3>your Images here &amp; you can markup images too.</h3>
                    <ul className="list-inline upload-links">
                      <li className="list-inline-item"><a href="javascript:void(0)"><i className="fa fa-upload"></i></a></li>
                      <li className="list-inline-item"><a href="javascript:void(0)"><i className="fa fa-dropbox"></i></a></li>
                      <li className="list-inline-item"><a href="javascript:void(0)"><img src="/public/img/g-drive.svg" alt="" /></a></li>
                      <li className="list-inline-item"><a href="javascript:void(0)"><i className="fa fa-cloud-download" aria-hidden="true"></i></a></li>
                      <li className="list-inline-item"><a href="javascript:void(0)"><img src="/public/img/box-logo.svg" alt="" /></a></li>
                      <li className="list-inline-item"><a href="javascript:void(0)"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                      <li className="list-inline-item"><a href="javascript:void(0)"><i className="fa fa-external-link" aria-hidden="true"></i></a></li>
                      <li className="list-inline-item"><a href="javascript:void(0)"><i className="fa fa-book" aria-hidden="true"></i></a></li>
                    </ul>
                  </div>
            </DropzoneComponent>
            )
    }
}
export default DropZone;