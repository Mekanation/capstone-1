import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CartCard from './CartCard';
import NumberFormat from 'react-number-format';
import CardDeck from 'react-bootstrap/CardDeck';
import useForceUpdate from 'use-force-update';
import PurchaseModal from './PurchaseModal';


function CartModal(props) {
  const [show, setShow] = useState(false);
  const forceUpdate = useForceUpdate();
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
        <div className="cart-number">{props.props.cart.length}</div>

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
              <h3>Total:<NumberFormat value={total} displayType={'text'} thousandSeparator={true} prefix={'$'} renderText={value => <div>{value}</div>} /></h3>
              <Button variant="secondary" onClick={() => forceUpdate()}>
                Get Total
          </Button>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-danger" onClick={handleClose}>
              Close
          </Button>
            <PurchaseModal total={total} />
          </Modal.Footer>
        </Modal>
      </>

    </div>
  );
}

export default CartModal;