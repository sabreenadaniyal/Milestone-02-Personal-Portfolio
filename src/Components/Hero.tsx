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
      <section className="text-gray-600 body-font">
        <div className="container mx-full flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-slate-300 md:ml-14 text-center">I am </h1>

            <div data-aos="zoom-in-right">
            <h1 className="hidden lg:inline-block text-4xl font-bold font-serif text-purple-950">SABREENA DANIYAL!</h1>
            </div>

            <p className="mb-0 leading-relaxed text-slate-800 text-3xl ml-[8%]">Fashion Designer..</p>
            <p className="mb-8 leading-relaxed text-slate-300 text-sm ml-[8%]">de-designer Couture Villas..</p>

          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image className="rounded-3xl object-contain object-center" src="/images/IMG-2024.jpg" alt="hero"
              width={300}
              height={100}
            />
          </div>
        </div>
      </section> <br />
    </div>
  )
}
