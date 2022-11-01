import React from "react";
import { Navbar } from "../components/Navbar";
import { MiddleSection } from "../Sections/MiddleSection";
import { Uppersection } from "../Sections/Uppersection";


export const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Uppersection />
      <MiddleSection/>
    </div>
  );
};
