// import React from 'react';
// import StripeCheckout from 'react-stripe-checkout';

// const StripeCheckoutButton = ({ price }) => {
//   const priceForStripe = price * 100;
//   const publishableKey = 'pk_test_51GxtUTApAe5coPHVgXRO8WL0t0z9AUXrMptXCxw0sLemC8eqrl02JQEbhtHqRrBMRmn1whKa6Enjk9hQZCg8Rkon001rO1SoSm';

//   const onToken = token => {
//     console.log(token);
//     alert('Payment Succesful!');
//   };

//   return (
//     <StripeCheckout
//       label='Pay Now'
//       name='HotelCom Ltd.'
//       billingAddress
//       shippingAddress
//       image='https://svgshare.com/i/CUz.svg'
//       description={`Your total is $${price}`}
//       amount={priceForStripe}
//       panelLabel='Pay Now'
//       token={onToken}
//       stripeKey={publishableKey}
//     />
//   );
// };

// export default StripeCheckoutButton;

import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
// import axios from 'axios';
const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51HoFgjCxgtcfoZwvsKFbfVjfG9zEtZV8SlBCIQ9gziIN1dFFj5WbV4vgjHGQslUdfoenn0j5bGqHu9fwKBVb8WvB0077gk8H7w';
  const onToken = token => {
    console.log(token);
    // axios({
    //   url: '/payment',
    //   method: 'post',
    //   responseType: "json",
    //   data: {
    //     amount: priceForStripe,
    //     token: token
    //   }
    // }).then(response => {
    //   alert('Payment successful')
    // }).catch(error => {
    //   console.log('Payment error: ', error)
    //   alert('Payment Not Succesful!');
    // })
    //   axios.post('/payment', {
    //     name: "",
    //     parts: ""
    //   })
    //     .then(response => {
    //       console.log(response)
    //     })
    //     .catch(error => {
    //       console.log(error.response)
    //     });
    // };
    fetch('http://127.0.0.1:5000/payment', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: 15000,//priceForStripe,
        token: token
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
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
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