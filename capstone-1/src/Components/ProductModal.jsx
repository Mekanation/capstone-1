import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



function ProductModal(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow} className="mb-2">
                View Details
        </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                centered
                size="lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title className="text-center"></Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-center">
                    <h1 className="text-success">{props.product.product_name}</h1>
                    <img src={props.product.image_url}></img>
                    <h4>Price: ${props.product.price}</h4>
                    <h4 className="text-danger">Available Quantity: {props.product.quantity}</h4>
                    <p className="text-muted">Serial#: {props.product.serial_number}</p>
                    <p className="text-muted">Manufacturer: {props.product.manufacturer}</p>
                    {props.product.tags}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
            </Button>

                </Modal.Footer>
            </Modal>
        </>
    );
}
export default ProductModal;