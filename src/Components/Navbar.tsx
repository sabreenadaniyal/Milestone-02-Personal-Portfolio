import Image from "next/image";
import Link from "next/link";

export default function Navbar(){
  return(
    <div className="bg-slate-700 lg:w-full md:w-full ">
      <header className="text-gray-400 body-font lg:w-full md:w-full lg:h-16">
        
        <div className="container mx-full flex flex-wrap p-1 flex-col md:flex-row items-center">
         <Image className="md:ml-5"
         src="/images/S.gif" alt="logo"
         width={55}
         height={50} />
         
         <nav className="lg:ml-[30%] flex flex-wrap items-center md:flex justify-center ">
           <Link href="/" className="mr-7 text-lg md:text-sm font-bold hover:text-blue-900">HOME</Link>
           <Link href="/about" className="mr-7 text-lg md:text-sm font-bold hover:text-blue-900">ABOUT us</Link>
           <Link href="/gallery" className="mr-7 text-lg md:text-sm font-bold hover:text-blue-900">GALLERY</Link>
           <Link href="/career" className="mr-7 text-lg md:text-sm font-bold hover:text-blue-900">CAREER</Link>
           <Link href="/projects" className="mr-7 text-lg md:text-sm font-bold hover:text-blue-900">PROJECTS</Link>
           <Link href="/contact" className="mr-7 text-lg md:text-sm font-bold hover:text-blue-900">CONTACT</Link>
         </nav>

          <Link href={"/images/cv.png"}>
           <button className="items-center bg-gray-800 border-0 py-2 focus:outline-none hover:bg-red-700 rounded text-base mt-4 md:mt-0">
              Download CV
           </button></Link>
        </div>
      </header> 
    </div>
  );
};
