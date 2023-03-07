import React from "react";
import { AboutUsCard } from "../components/AboutUsCard";
import AboutUsHeader from "../components/AboutUsHeader";
import "./AboutPage.css";

export const AboutPage = () => {
  return (
    <main className="main-about-us">
      <AboutUsHeader />
      <AboutUsCard />
    </main>
  );
};
