
import React from 'react';

function Modal({ header, container, footer,onClose }) {
    return (
        <>

            <div className="modal-container">
                <div className="modal-content">
                    <div className='header'>
                        <h1>
                            {header ? header : "Header"}
                        </h1>
                        <span className='modal-icon' onClick={onClose}>&times;</span>
                    </div>
                    <div className="body-container">
                        <div><p>{container ? container : "This is our content."}</p></div>
                    </div>
                    <div className="footer">

                        <h2>
                            {
                                footer ? footer : "Footer"

                            }
                        </h2>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Modal;
