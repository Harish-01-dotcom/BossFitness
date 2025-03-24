const express = require('express');
const cors = require('cors');
const Stripe = require('stripe');
const app = express();

app.use(cors());
app.use(express.json());

const stripe = Stripe(
  'sk_test_51R4ivuKab62F1Or88BCxHbhmMETMrTacMTWCjwZqAyWpCZ2008OLQJlakhVZ66iU4cxzscNqjPXNFJ7tmxOG7uOp00MBgXUQDX',
);

app.post('/create-payment-intent', async (req, res) => {
  console.log('📡 Received payment intent request:', req.body);
  const {amount} = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'gbp',
      payment_method_types: 'card',
    });

    res.send({clientSecret: paymentIntent.client_secret});
  } catch (err) {
    res.status(400).send({error: err.message});
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));
