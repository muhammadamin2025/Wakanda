import { Button, Container } from "@mui/material";
import React from "react";
import heroImg from "../../public/image.png";

export default function Hero() {
  return (
    <div className="py-8">
      <Container>
        <div className="flex items-center">
          <div className=" flex flex-col items-start gap-4">
            <h2 className="font-bold text-5xl">Recruit top talented freelancer for your business</h2>
            <p className="text-base">
              Connect you to thoudsands of talented freelancer from any
              industry. You can have the best people in just few simple steps.
            </p>
            <Button variant="contained">Get Started</Button>
          </div>
          <img width={667} height={787} className="object-cover" src={heroImg} alt="" />
        </div>
      </Container>
    </div>
  );
}
