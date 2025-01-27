import React from "react";
import Landing from "../components/Landing";
import Clients from "../components/Clients";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Testimonials from "../components/Testimonials";
import Team from "../components/Team";
import Extra from "../components/Extra";

function Home() {
  return (
    <>
      <Landing />
      <Clients />
      <Services />
      <Projects />
      <Testimonials />
      <Team />
      <Extra />
    </>
  );
}

export default Home;
