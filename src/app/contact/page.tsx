"use client";
import AOS from "aos"
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Contact() {
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
            <h1 className="text-center text-blue-950 text-4xl font-bold underline">CONTACT US</h1>
            <section className="text-gray-600 body-font relative">
                <div className="absolute inset-0 bg-gray-300">
                    <iframe width="100%" height="100%" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57950.62430042423!2d67.06778664999999!3d24.79839755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33cf02eda6f15%3A0x937892677f0377a2!2sDefence%20Housing%20Authority%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2075500!5e0!3m2!1sen!2s!4v1731266057831!5m2!1sen!2s" className="filter: grayscale(1) contrast(1.2) opacity(0.4);"></iframe>
                </div>

                <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
                <div className="container px-5 py-24 mx-auto flex">
                    <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
                        <h2 className="text-gray-900 text-lg mb-1 font-bold title-font ">Get Connected</h2>
                        <p className="leading-relaxed mb-5 text-gray-600">Post-ironic portland Zamzama park, banjo fashion axe</p>
                        <div className="relative mb-4">
                            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                            <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                            <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                        </div>
                        <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
                        <p className="text-xs text-gray-500 mt-3">You can do the rest after submitting, but you need to update both.</p>
                    </div>
                </div>
                </div>
            </section>
        </div>
    )
}
