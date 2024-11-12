import Image from "next/image"

export default function Projects(){
    return(
        <div>
            <h1 className="text-4xl font-bold text-blue-950 underline text-center">PROJECTS</h1>
   <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">OUR Projects</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Creating and delivering projects are important elements in business growth and development
       in a range of industries, including academia, engineering and marketing. For lengthy and highly detailed projects, introductions can provide readers
        with helpful context and background knowledge. If your profession requires you to complete research projects or submit proposals, understanding best practices for project introductions can help you create effective content that reflects positively on you or your business.</p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="p-4 lg:w-1/2">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <Image alt="board" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="/images/mood123.png"
          width={200}
          height={300}/>
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-lg text-gray-900">Mood Board</h2>
            <h3 className="text-gray-500 mb-3">HTML/CSS</h3>
            <p className="mb-4">a collage of images that can include different styles, trends, colors, fabrics, and more</p>
            <span className="inline-flex">
              <a className="text-gray-500">
               
              </a>
              <a className="ml-2 text-gray-500">
                
              </a>
              <a className="ml-2 text-gray-500">
                
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/2">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <Image alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="/images/project 1.png"
          width={200}
          height={300}/>
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-lg text-gray-900">Form</h2>
            <h3 className="text-gray-500 mb-3">HTML/CSS</h3>
            <p className="mb-4">to fill the required information according to your skills.</p>
            <span className="inline-flex">
              <a className="text-gray-500">
                
              </a>
              <a className="ml-2 text-gray-500">
                
              </a>
              <a className="ml-2 text-gray-500">
                
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/2">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <Image alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="/images/project 2.png"
          width={200}
          height={300}/>
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-lg text-gray-900">Fahion Website</h2>
            <h3 className="text-gray-500 mb-3">Web Developer</h3>
            <p className="mb-4">the process of building, designing, testing, and maintaining websites and web applications. </p>
            <span className="inline-flex">
              <a className="text-gray-500">
                
              </a>
              <a className="ml-2 text-gray-500">
                
              </a>
              <a className="ml-2 text-gray-500">
               
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/2">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <Image alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="/images/project 4.png"
          width={200}
          height={300}/>
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-lg text-gray-900">Fashion Website</h2>
            <h3 className="text-gray-500 mb-3">UI Designer</h3>
            <p className="mb-4">In life I want to become a fashion designer.
                 My goals are to create clothing that is for all sizes, ages,
                and genders. In my clothing I want t show a creative side of my
                art ability and I want to make my clothing affordable for all
                as well. </p>
            <span className="inline-flex">
              <a className="text-gray-500">
                
              </a>
              <a className="ml-2 text-gray-500">
                
              </a>
              <a className="ml-2 text-gray-500">
               
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        </div>
    )
}