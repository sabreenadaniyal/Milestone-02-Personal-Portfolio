"use client";
import AOS from "aos"
import "aos/dist/aos.css";
import { useEffect } from "react";
import React from "react";
import { FaEye } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa";

export default function About(){
  useEffect(() => {
    AOS.init({
      easing: "ease-out-back",
      duration: 1200,
      delay: 100,
      mirror: true,
      anchorPlacement: "bottom-bottom",
      offset: 160,
    });
    AOS.refresh();
  }, []);

    return(
        <div>
            <h1 className="text-center text-blue-950 text-4xl font-bold underline">About us</h1>
            <div data-aos="flip-down">
            <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="p-4 lg:w-1/3">

        <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Fashion Designer</h2>
          <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Overview</h1>
          <p className="leading-relaxed mb-3"> Highly creative and detail-oriented fashion designer with over four years of experience
             designing and developing womens apparel for high-end fashion brands. Skilled in creating
             technical sketches, fashion illustrations, and mood boards using Adobe Creative Suite.
             Proficient in pattern-making, draping and garment construction.</p>
          <a className="text-indigo-500 inline-flex items-center">Learn More
          <FaArrowRight />
          </a>

          <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
            <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
            <FaEye />1.2K
            </span>
            <span className="text-gray-400 inline-flex items-center leading-none text-sm">
            <FiMessageCircle />6
            </span>
          </div>
        </div>
      </div>
      
      <div className="p-4 lg:w-1/3">
        <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">SKILLS</h2>
          <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Good TO know..</h1>
          
          <ul className="leading-relaxed mb-3">
          <li><b>. </b>Trend forecasting</li>
                <li><b>. </b>Sustainable fashion design</li>
                <li><b>. </b>Sketching and illustration</li>
                <li><b>. </b>Fabric and material selection</li>
                <li><b>. </b>Collaboration and teamwork</li>
                <li><b>. </b>Networking and relationship building</li>
                <li><b>. </b>Presentation and communication</li>
                <li><b>. </b>Adobe Creative Suite (Illustrator, Photoshop, InDesign)</li>
                <li><b>. </b>Pattern making and draping</li>
                <li><b>. </b>Sewing and garment construction</li>
                <li><b>. </b>Brand development and marketing</li>
                <li><b>. </b>Social media engagement</li>
          </ul>
          <a className="text-indigo-500 inline-flex items-center">Learn More
          <FaArrowRight />
          </a>
          <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
            <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
            <FaEye />1.2K
            </span>
            <span className="text-gray-400 inline-flex items-center leading-none text-sm">
            <FiMessageCircle />6
            </span>
          </div>
        </div>
      </div>
      
      <div className="p-4 lg:w-1/3">
        <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">EDUCATION</h2>
          <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Presence-GIAIC</h1>
          <ul className="leading-relaxed mb-3">
          <li>
                    <b>. </b>Bachelors in Fashion Designing from
                    Jinnah University For Women, Karachi
                    2018
                </li>
                <li>
                    <b>. </b>Pre-Medical(intermediate) from
                    Govt. Girls Degree College Al-Noor, Karachi
                    2014
                </li>
                <li>
                    <b>. </b>Metric from
                    Metropolis School for Girls, Karachi
                    2012
                </li>
          </ul>
          <a className="text-indigo-500 inline-flex items-center">Learn More
          <FaArrowRight />
          </a>
          <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
            <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
            <FaEye />1.2K
            </span>
            <span className="text-gray-400 inline-flex items-center leading-none text-sm">
            <FiMessageCircle /> 6
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
        </div>
    )
}