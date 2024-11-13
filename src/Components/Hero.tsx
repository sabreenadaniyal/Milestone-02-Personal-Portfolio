"use client";
import AOS from "aos"
import "aos/dist/aos.css";
import { useEffect } from "react";
import Image from "next/image"

export default function Hero() {
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
  return (
    <div>
      <section className="text-gray-600 body-font mx-16 rounded-xl">
        <div className="container mx-auto flex px-15 py-10 md:flex-row flex-col items-center">

          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center
        text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 -mt-10 font-medium text-gray-400">I am</h1>

            <div data-aos="zoom-in-right">
            <h1 className="text-3xl text-blue-700 font-bold">SABREENA DANIYAL!</h1>
            </div>

            <p className="mb-0 mr-14 leading-relaxed text-purple-800">
            FASHION DESIGNER...
            </p>
            <p className="mb-8 mr-14 leading-relaxed text-gray-400">
            de-designer Couture Villas.
            </p>
          </div>

          <div className=" lg:max-w-lg lg:w-full md:w-1/2w-5/6 mb-10 md:mb-0">
            <Image className="rounded-2xl mx-auto" src="/images/IMG-2024.jpg" alt="profile"
            width={280}
            height={40}
            />
          </div>

        </div>

      </section> <br />
    </div>
  )
}
