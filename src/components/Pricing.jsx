import React from "react";
import PricingCard from "./PricingCard";

const Pricing = () => {
  return (
    <div>
      <div className="text-center mt-10">
        <h1 className="text-5xl font-bold">Simple, Transparent Pricing</h1>
        <p className="text-lg mt-3">
          <small>
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </small>
        </p>
      </div>
      <PricingCard/>
    </div>
  );
};

export default Pricing;
