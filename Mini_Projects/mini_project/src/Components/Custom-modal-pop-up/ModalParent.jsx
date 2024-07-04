
import React, { useState } from 'react';
import Modal from './Modal';
import "./styles.css";

function ModalParent() {

    const [showModel, setShowModel] = useState(false);

    // To toggle model
    const handleShowClick = () => {
        setShowModel(!showModel);
    };
    // To close pop model
    const handleClose = () => {
        setShowModel(false);
    };


    return (
        <>
            <div className='btn-container'>
                <button onClick={handleShowClick}>Show Pop Up</button>

                {
                    showModel &&

                    <Modal
                        header={"Customized Header"}
                        container={"Customized Body"}
                        footer={"Customized Footer"}
                        onClose={handleClose}
                    />
                }

            </div>
        </>
    );
}

export default ModalParent;
