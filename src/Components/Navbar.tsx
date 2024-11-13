import Image from "next/image";
import Link from "next/link";

export default function Navbar(){
  return(
    <div className="z-50 sticky top-0">
      <header className="text-gray-700 bg-black body-font">
      <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
      <Image className="rounded-3xl" src="/images/S.gif" alt="logo"
      width={55}
      height={50} />

        <a className="flex title-font font-medium items-center text-gray-700 mb-4 md:mb-0">
        <span className="ml-3 text-xl text-slate-400">SABZ</span>
        </a>
        
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <Link className="mr-5 hover:text-white" href="/">HOME</Link>
        <Link className="mr-5 hover:text-white" href="/about">ABOUT us</Link>
        <Link className="mr-5 hover:text-white" href="/gallery">GALLERY</Link>
        <Link className="mr-5 hover:text-white" href="/career">CAREER</Link>
        <Link className="mr-5 hover:text-white" href="/projects">PROJECTS</Link>
        <Link className="mr-5 hover:text-white" href="/contact">CONTACT</Link>
        </nav>

        <Link href="/images/cv.png" download={"/images/cv.png"}>
        <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 
        focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0">
        My Resume
        </button>
        </Link>
    </div>
    </header>

    </div>

  )
}
