const stripe = require('stripe')('sk_test_51Gsc5TAMt0yCDpQk2KqTumrrUoFSKJpj3nrosfrTPTrwBT1w5b48630axO5KfEwf6lzBcetfFqLQm5UOPLuWELMH002BrTyyOh')

async function postCharge(req, res) {
    try {
        const { amount, source, receipt_email } = req.body

        const charge = await stripe.charges.create({
            amount,
            currency: 'usd',
            source,
            receipt_email
        })

        if (!charge) throw new Error('charge unsuccessful')

        res.status(200).json({
            message: 'charge posted successfully',
            charge
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

module.exports = postCharge