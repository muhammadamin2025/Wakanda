import { Container } from "@mui/material";
import React from "react";

import img_1 from "../../public/FeatureImg/img_1.svg";
import img_2 from "../../public/FeatureImg/img_2.svg";
import img_3 from "../../public/FeatureImg/img_3.svg";
import FeatureCard from "./FeatureCard";

export default function Feature() {
  return (
    <div className="bg-blue-600 text-white py-20">
      <Container maxWidth="lg">
        <h3 className="uppercase text-center font-semibold tracking-widest">
          Feature
        </h3>
        <h2 className="font-bold text-4xl text-center mb-16">
          The benefit of using <br /> our platform
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
          <FeatureCard
            image={img_1}
            title="Professional & Fast"
            description="Search and hire the most talented freelancers to match your needs. No matter what you need done, we've got the perfect freelancer for you."
          />
          <FeatureCard
            image={img_2}
            title="24/7 support"
            description="You have any concerns or questions? Don’t worry, we have our support team to help you at anytime and anywhere."
          />
          <FeatureCard
            image={img_3}
            title="Safe & Secure"
            description="We know that safety is the most important thing for our customer, so all of our payments are processed instantly and securely."
          />
        </div>
      </Container>
    </div>
  );
}
