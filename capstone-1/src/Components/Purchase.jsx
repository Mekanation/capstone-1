import React from 'react'
import { StripeProvider, Elements } from 'react-stripe-elements'
import PurchaseForm from './PurchaseForm'

const Purchase = (props) => {


    return (
        <StripeProvider apiKey="pk_test_51Gsc5TAMt0yCDpQkZxpKXdUoWixZkqYmPB7kpRJmJavk07sJSp5Zcn7Bxut37SappI3b5mEE7CNUfWXnZWGNbzRL00DL3yK0ua">
            <Elements>
                <PurchaseForm total={props.total} />
            </Elements>
        </StripeProvider>
    )
}

export default Purchase;