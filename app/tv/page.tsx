"use client"
import MuxPlayer from "@mux/mux-player-react"; 
import Nav from '@/components/Nav'
import { RiMenu3Line } from "react-icons/ri";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { CiStreamOn } from "react-icons/ci";
import programacao from "../../public/programacao.jpeg"
import Image from 'next/image'
import afterp from '../../public/afterp.jpeg'
import dudas from '../../public/dudas.jpeg'
import ultima from '../../public/ultima.jpeg'
import BlinkingButton from "@/components/Blinkbutton"
import SearchBar from "@/components/SearchBar"


export default function TvStream(){

    return (

      <div className="bg-base-100 ">
        <Nav />
        
{/* <SearchBar /> */}

<section className="w-99% h-100vh flex p-3 mt-3 bg-base-100">
  {/* <BlinkingButton/> */}
  <div className=" lg:w-[74%] w-full  mr-1 bg-base-100"> 
  <MuxPlayer 
    streamType="live"
    playbackId="02a01NjB00dm02Wg426KR8aMKnkZD538JnG7YQZmkoNoebc"
    metadataVideoTitle="Placeholder (optional)"
    metadataViewerUserId="Placeholder (optional)"
    primaryColor="#FFFFFF"
    secondaryColor="#000000"
  /></div>


  <div className=" hidden lg:block w-1/4 border max-h-[380px]  overflow-y-auto rounded-sm p-2 ml-1 bg-transparent">
    <h3 className="text-red-700">  Lives  </h3>



<div className="card lg:card-side bg-base-100 shadow-xl max-h-30 mt-2">
 
  < Image
      className="justify-center mt-9"
      src={dudas}
      alt="Logo Moon"
      width={110} 
      // height={500} automatically provided
      // blurDataURL="data:..." automatically provided
      // placeholder="blur" // Optional blur-up while loading
    />
  <div className="">
    <h2 className="">New album is released!</h2>
    {/* <p>Click the button to listen on Spotiwhy app.</p> */}
    {/* <div className="card-actions justify-end">
      <button className="btn btn-primary">Listen</button>
    </div> */}
  </div>
</div>

<div className="card lg:card-side bg-base-100 shadow-xl max-h-30 mt-2">
  <figure className="w-28">< Image
      className="justify-center mt-9"
      src={programacao}
      alt="Logo Moon"
      width={110} 
      height={250} 
      // blurDataURL="data:..." automatically provided
      // placeholder="blur" // Optional blur-up while loading
    /></figure>
  {/* <div className="card-body"> */}
    {/* <h2 className="card-title">New album is released!</h2>
    <p>Click the button to listen on Spotiwhy app.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Listen</button>
    </div> */}
  {/* </div> */}
</div>

<div className="card lg:card-side bg-base-100 shadow-xl max-h-30 mt-2">
  <figure className="w-28"><img src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album"/></figure>
  <div className="card-body">
    {/* <h2 className="card-title">New album is released!</h2>
    <p>Click the button to listen on Spotiwhy app.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Listen</button>
    </div> */}
  </div>
</div>

<div className="card h-28 bg-base-100 shadow-xl image-full">
  <figure className='h-28'><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="">
    <h2 className="">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
   
  </div>
</div>

  </div>
</section>

{/* <div className="p-2 max-w-48 ">
<MuxPlayer
className=""
  streamType="on-demand"
  playbackId="YD4ez8yyV4DFuA8misyZlPoAhdavnBaOL27zSZRgIPA"
  metadataVideoTitle="Placeholder (optional)"
  metadataViewerUserId="Placeholder (optional)"
  primaryColor="#FFFFFF"
  secondaryColor="#000000"
/>
</div> */}

<h2 className="text-center"> Programacao</h2>

<div className="flex overflow-x-auto rounded-sm max-w-full bg-slate-100  m-2">
  <div className="flex-none w-1/3 sm:w-auto md:w-auto lg:w-auto xl:w-auto p-3">
    <div className="max-w-[150]">
    < Image
      className="justify-center mt-9"
      src={programacao}
      alt="Logo Moon"
      width={150} 
      // height={500} automatically provided
      // blurDataURL="data:..." automatically provided
      // placeholder="blur" // Optional blur-up while loading
    />

    <h2 className="text-lg">Comedia</h2>
    <p className="text-xs">Nao perca momentos de <br />stand up comedy</p>

    </div>
  
  </div>
 

  

</div>
  </div>

  
 


            
     
      
       
    
  
    
    )
}
