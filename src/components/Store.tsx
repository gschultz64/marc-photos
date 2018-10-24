import * as React from "react";
import { Elements, StripeProvider } from "react-stripe-elements";
import CheckoutForm from "./CheckoutForm";

class Store extends React.Component {
  public render() {
    return (
      <div>
        <h1>Marc Schultz Photography Store</h1>
        <StripeProvider apiKey="pk_test_gzR7GGsqA6KtTBRSWimc493D">
          <div className="example">
            <h2>React Stripe Elements Example</h2>
            <Elements>
              <CheckoutForm />
            </Elements>
          </div>
        </StripeProvider>
      </div>
    );
  }
}

export default Store;
