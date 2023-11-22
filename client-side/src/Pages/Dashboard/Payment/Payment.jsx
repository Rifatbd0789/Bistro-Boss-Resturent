import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../componenets/Sectiontitle/Sectiontitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutFrom from "./CheckOutFrom";
// publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_PK);

const Payment = () => {
  return (
    <div>
      <SectionTitle heading="Payment" subHeading="Please pay to eat" />
      <div>
        <Elements stripe={stripePromise}>
          <CheckOutFrom />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
