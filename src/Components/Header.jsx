import { Button, Container } from "@mui/material";
import React from "react";
import logo from "../../public/logo.svg";

export default function Header() {
  return (
    <div className="py-3">
      <Container maxWidth="lg">
        <nav className="flex justify-between items-center">
          <a className="flex items-center gap-2" href="/">
            <img src={logo} alt="" />
            <h1 className="font-bold text-2xl">Wakanda</h1>
          </a>
          <div className="flex items-center gap-12">
            <ul className="flex font-medium gap-8">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">About us</a>
              </li>
              <li>
                <a href="">How it works</a>
              </li>
              <li>
                <a href="">For Freelancer</a>
              </li>
            </ul>
            <Button variant="contained">Get Started</Button>
          </div>
        </nav>
      </Container>
    </div>
  );
}
