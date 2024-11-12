import Image from "next/image"
import React from "react"

export default function Gallery(){
    return(
        <div>
            <h1 className="text-4xl text-blue-950 font-bold text-center underline"> GALLERY...</h1>
 <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="lg:w-2/3 mx-auto">
      <div className="flex flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4">
        <Image alt="gallery" className="w-full object-cover h-full object-center block absolute inset-0" src="/images/women 6.jpg"
        width={600}
        height={200}/>
        <div className="text-center relative z-10 w-full">
          <h2 className="text-2xl text-gray-950 font-medium title-font mb-2">Bridal Wear</h2>
          <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
          </a>
        </div>
      </div>

      <div className="flex flex-wrap -mx-2">
        <div className="px-2 w-1/2">
          <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
            <Image alt="gallery" className="w-full object-cover h-full object-center block absolute inset-0" src="/images/kids 1.jpg"
            width={600}
            height={300}/>
            <div className="text-center relative z-10 w-full">
              <h2 className="text-2xl text-gray-950 font-medium title-font mb-2">Kids Wear</h2>
              <p className="leading-relaxed">a broad category of clothing, footwear, and accessories for children</p>
              <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
              </a>
            </div>
          </div>
        </div>

        <div className="px-2 w-1/2">
          <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
            <Image alt="gallery" className="w-full object-cover h-full object-center block absolute inset-0" src="/images/jewellery 2.jpg"
            width={600}
            height={200}/>
            <div className="text-center relative z-10 w-full">
              <h2 className="text-2xl text-gray-950 font-medium title-font mb-2">Accessories</h2>
              <p className="leading-relaxed">items that are carried or worn on a single part of the body, and are usually not considered clothing</p>
              <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
               
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        </div>
    )
}