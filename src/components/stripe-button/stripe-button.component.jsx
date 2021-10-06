import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100

  const publishableKey =
    'pk_test_51JhLSZEGu90u693ZJFEcI4JlBOvkdIb4SPru7Kpq5GfFoytkPVy3leFqE4AVqCj48o1oDTrBvwLkpskB1SlVDmps00NzcIy4Nm'

  const onToken = token => {
    console.log(token)
    alert('Payment Succesful!')
  }

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton
