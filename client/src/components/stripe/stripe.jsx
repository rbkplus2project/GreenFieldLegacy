import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price,userid }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51HoFgjCxgtcfoZwvsKFbfVjfG9zEtZV8SlBCIQ9gziIN1dFFj5WbV4vgjHGQslUdfoenn0j5bGqHu9fwKBVb8WvB0077gk8H7w';

  const onToken = token => {
    console.log(token);
    fetch('http://127.0.0.1:5000/payment', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: price,//priceForStripe,
        token: token,
        userid:userid
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        alert('Payment Succesful!');
      })
      .catch((error) => {
        console.log('Payment error: ', error)
        alert('Payment Not Succesful!');
      });
  }

  return (
    <StripeCheckout
      label='Pay Now'
      name='HotelCom Ltd.'
      billingAddress
      // shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
