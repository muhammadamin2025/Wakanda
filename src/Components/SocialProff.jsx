import { Container } from "@mui/material";
import React from "react";

import airbnb from "../../public/SocialProf/airbnb.svg";
import google from "../../public/SocialProf/google.svg";
import slack from "../../public/SocialProf/slack.svg";
import netflex from "../../public/SocialProf/netflex.svg";
import amazon from "../../public/SocialProf/amazon.svg";

export default function SocialProff() {
  return (
    <div className="py-12">
      <Container>
        <ul className="flex justify-between items-center">
          <li>
            <img src={airbnb} alt="" />
          </li>
          <li>
            <img src={google} alt="" />
          </li>
          <li>
            <img src={slack} alt="" />
          </li>
          <li>
            <img src={netflex} alt="" />
          </li>
          <li>
            <img src={amazon} alt="" />
          </li>
        </ul>
      </Container>
    </div>
  );
}
