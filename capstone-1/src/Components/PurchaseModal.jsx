import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Purchase from './Purchase';
function PurchaseModal(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="outline-success" onClick={handleShow}>
                Purchase
            </Button>

            <Modal show={show} onHide={handleClose} backdrop="static" size="lg">

                <Purchase total={props.total} />
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>
        </>
    );
}

export default PurchaseModal;