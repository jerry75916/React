import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

import { BUTTON_TYPE_CLASSES } from "../buttons/button.component";

import {
  FormContainer,
  PaymentFormContainer,
  PaymentButton,
} from "./paymant-form.style";
import { useState } from "react";
import { selectCartTotal } from "../../store/cart/cart.selector";
import { selectcurrentUser } from "../../store/user/user.selector";
import { useSelector } from "react-redux";

const PaymentForm = () => {
  const [isProcessingPayment, SetisProcessingPayment] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const amount = useSelector(selectCartTotal);
  const CurrentUser = useSelector(selectcurrentUser);
  const PayMentFormAndSubmit = async (event) => {
    event.preventDefault();

    if (elements == null || stripe == null) {
      return;
    }
    SetisProcessingPayment(true); //isloading
    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: amount * 100 }),
    }).then((res) => {
      return res.json();
    });
    const {
      paymentIntent: { client_secret },
    } = response;

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: CurrentUser ? CurrentUser.displayName : "Guest",
        },
      },
    });
    SetisProcessingPayment(false);
    if (paymentResult.error) {
      alert(paymentResult.error);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert("Payment Successful");
      }
    }
    // const { error, paymentMethod } = await stripe.createPaymentMethod({
    //   type: "card",
    //   card: elements.getElement(CardElement),
    // });
    // console.log(paymentMethod);
  };
  return (
    <PaymentFormContainer>
      <h2>Credit Card Payment:</h2>
      <FormContainer onSubmit={PayMentFormAndSubmit}>
        <CardElement />
        <PaymentButton
          isLoading={isProcessingPayment}
          disable={isProcessingPayment}
          childern={"Pay Now"}
          buttonType={BUTTON_TYPE_CLASSES.inverted}
        />
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
