import Image from "next/image"
import { FaHandHoldingHeart } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { LuMessageCircle } from "react-icons/lu";

export default function Career(){
    return(
        <div>
          <h1 className="text-4xl text-blue-950 underline text-center font-bold">CAREER</h1>
<section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <Image alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="/images/career 3.jpg"
      width={400}
      height={200}/>
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">Fashion Designing</h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">TOUR OF FASHION DESIGNER WORK AND RESPONSIBILITIES!</h1>
        <div className="flex mb-4">
          <span className="flex items-center">
           
            <span className="text-gray-600 ml-3">4 Reviews</span>
          </span>
          <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
            <a className="text-gray-500">
            <FaFacebookF />
            </a>
            <a className="text-gray-500">
            <FaTwitter />
            </a>
            <a className="text-gray-500">
            <LuMessageCircle />
            </a>
          </span>
        </div>
        <p className="leading-relaxed">
            Fashion Designers perform both independently or directly for an apparel company,
            developing different apparel designs that trance to consumers. They frequently
            sketch their designs and then pick out styles and fabrics that complement the
            designs.
            Many Fashion Designers tour alternate exhibits to accumulate the material and
            fabric required to lay out their new style pieces. They’ll additionally collaborate
            with different designers to create prototypes for their thoughts. Fashion Designers
            frequently present their designs to Creative Directors and might additionally be
            requested to present their designs at fashion shows.</p>
        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
          <div className="flex">
            <span className="mr-3">Color</span>
            <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
            <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
            <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
          </div>
          <div className="flex ml-6 items-center">
            <span className="mr-3">Size</span>
            <div className="relative">
              <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                <option>SM</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
              <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
              </span>
            </div>
          </div>
        </div>
        <div className="flex">
          <span className="title-font font-medium text-2xl text-gray-900">$58.00</span>
          <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Submit</button>
          <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
          <FaHandHoldingHeart />
          </button>
        </div>
      </div>
    </div>
  </div>
</section>
        </div>
    )
}