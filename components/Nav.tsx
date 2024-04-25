import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { RiMenu3Line } from "react-icons/ri";
import { GoPerson } from "react-icons/go";
import Image from 'next/image'
import Logo from '../public/moonLogo.jpeg';
import { CiStreamOn } from "react-icons/ci";
import Link from "next/link";

export default function Nav(){

    return(
      <div className="navbar bg-base-100 ">
      <div className="navbar-start ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg> */}
            <Sheet>
  <SheetTrigger><RiMenu3Line /></SheetTrigger>
  <SheetContent>
    <SheetHeader>
  
      
      <SheetTitle className='ml-4'>Nome do usuario</SheetTitle>
      <SheetDescription>
      <div className='mt-5 ml-4'>
      
      <ul>
        <li className ='mt-3'> <Link  href="/" > Sobre</Link></li>
        <li className ='mt-3'> <Link  href="/" > Perfil</Link></li>
        <li className ='mt-3'> <Link  href="/" > Programacao</Link></li>
        <li className ='mt-3'> <Link  href="/" > Meus Servicos</Link></li>
        <li className ='mt-3'> <Link  href="/" > Definicoes</Link></li>
      </ul>
    </div>
      </SheetDescription>
      < Image
      className="justify-center mt-9"
      src={Logo}
      alt="Logo Moon"
      width={150} 
      // height={500} automatically provided
      // blurDataURL="data:..." automatically provided
      // placeholder="blur" // Optional blur-up while loading
    />
    </SheetHeader>
  </SheetContent>

</Sheet>

 
          </div>
        </div>
        <div className='flex'> <h2 className=" ml-2 btn btn-outline btn-error btn-xs"><Link href='/'>Live</Link> </h2> </div>
      </div>
      
      <div className="navbar-center">
        <a className="btn btn-ghost text-xl"><Image
      src={Logo}
      alt="Logo Moon"
      width={150} 
      // height={500} automatically provided
      // blurDataURL="data:..." automatically provided
      // placeholder="blur" // Optional blur-up while loading
    /></a>
      </div>
      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        </button>
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>
      </div>
    </div>
    )
}