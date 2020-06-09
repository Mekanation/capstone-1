import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CartCard from './CartCard';

import CardDeck from 'react-bootstrap/CardDeck'


function CartModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const total = props.props.cart.reduce((prev, next) => prev + (next.products.price * next.products.reserved_quantity), 0);
  const isEmpty = props.props.cart.length;
  let emptyText;
  if (isEmpty === 0) {
    emptyText = <h2>Add something to your cart!</h2>

  }
  return (
    <div className="CartModal">
      <>
        <Button variant="outline-success" onClick={handleShow}>
          Cart
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
            <Modal.Title>Your Cart</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="container">
              <div className="row">
                <div className="col d-flex align-content-start flex-wrap" >
                  {emptyText}
                  <CardDeck>
                    <CartCard props={props.props} />
                  </CardDeck>
                </div>
              </div>
            </div>
            <div>
              <h3>Total:{total}</h3>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-danger" onClick={handleClose}>
              Close
          </Button>
            <Button variant="outline-success">Purchase</Button>
          </Modal.Footer>
        </Modal>
      </>

    </div>
  );
}

export default CartModal;