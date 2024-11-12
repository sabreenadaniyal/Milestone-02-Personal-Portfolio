import Image from "next/image"
import React from "react"
import Link from "next/link";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

export default function Footer(){
    return(
        <div>
            <footer className="text-gray-600 body-font ">
  <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-slate-400">
        
        <span className="ml-3 text-xl">SD de-Designer</span>
      </a>
      <p className="mt-2 text-sm text-gray-500">Theres vintage, and then theres archive</p>
    </div>
    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">POPULAR FEATURES</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">product features</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">shop all</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Careers</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Vibes</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CUSTOMER</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">Start a Return</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Return Policy</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">FAQs</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Catelogue & Mailers</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">COMPANY</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">About us</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Sunstainibility</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Discover Reviews</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Terms</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">COMPANY-2</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">Privacy Policy</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Accessibility</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">About Group Gifting</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Do Not Sell My Info</a>
          </li>
        </nav>
      </div>
    </div>
  </div>
  <div className="bg-gray-100">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-gray-500 text-sm text-center sm:text-left">©2024-25 SD —
        <a href="https://twitter.com/" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@Sabreena</a>
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
      
        <Link className="text-gray-500" href="https://github.com/sabreenadaniyal" target="_blank"><FaGithubSquare /></Link>
        <Link href="https://instagram.com/sabreenadaniyal"target="_blank" className="ml-3 text-gray-500"><FaInstagramSquare /></Link>
        <Link href="https://facebook.com/sabreena.ali.96" target="_blank" className="ml-3 text-gray-500"><FaFacebook /></Link>
        <Link href="https://twitter.com/sabreenaali" target="_blank" className="ml-3 text-gray-500"><FaSquareTwitter /></Link>
        <Link href="https://www.linkedin.com/in/sabreena-zahid-ali-1343a8198/" target="_blank" className="ml-3 text-gray-500"><FaLinkedin /></Link>
      </span>
    </div>
  </div>
</footer>
        </div>
    )
}