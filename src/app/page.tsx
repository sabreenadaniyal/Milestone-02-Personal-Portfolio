import React from "react";
import Hero from "../Components/Hero";
import About from "./about/page";
import Gallery from "./gallery/page";
import Career from "./career/page";
import Projects from "./projects/page";
import Contact from "./contact/page";


export default function Home() {
  return (
    <div>
        
        <Hero />
        <About />
        <Gallery />
        <Career />
        <Projects />
        <Contact />

    </div>
  )

}
