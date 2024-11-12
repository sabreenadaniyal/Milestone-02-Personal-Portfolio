import Image from "next/image";
import Link from "next/link";

export default function Navbar(){
  return(
    <div>
      <header className="text-gray-400 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">

         <Image className="md:ml-3"
         src="/images/S.gif" alt="logo"
         width={90}
         height={50} />
         
         <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
           <Link href="/" className="mr-5 text-xl font-bold hover:text-blue-900">HOME</Link>
           <Link href="/about" className="mr-5 text-xl font-bold hover:text-blue-900">ABOUT us</Link>
           <Link href="/gallery" className="mr-5 text-xl font-bold hover:text-blue-900">GALLERY</Link>
           <Link href="/career" className="mr-5 text-xl font-bold hover:text-blue-900">CAREER</Link>
           <Link href="/projects" className="mr-5 text-xl font-bold hover:text-blue-900">PROJECTS</Link>
           <Link href="/contact" className="mr-5 text-xl font-bold hover:text-blue-900">CONTACT</Link>
         </nav>

          <Link href={"/images/cv.png"}>
           <button className="inline-flex items-center bg-gray-800 border-0 py-2 px-5 focus:outline-none hover:bg-red-700 rounded text-base mt-4 md:mt-0">
              Download CV
           </button></Link>
        </div>
      </header> 
    </div>
  );
};
