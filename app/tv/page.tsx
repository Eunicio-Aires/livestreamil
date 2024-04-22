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


export default function TvStream(){

    return (

      <div className=" ">
        <Nav />
        
        {/* <div className="flex justify-center  h-screen">
        
  <div className="w-[97%] max-h-[450px] flex border-10 border-black p-4 rounded-sm">
  <MuxPlayer 
    streamType="live"
    playbackId="jWf63QkG8mqkn6BHWCcSzjuukCbunYa9wi6wRh02DwoU"
    metadataVideoTitle="Placeholder (optional)"
    metadataViewerUserId="Placeholder (optional)"
    primaryColor="#FFFFFF"
    secondaryColor="#000000"
  />
  </div>
</div> */}

<section className="w-99% h-500px flex p-3">
  <div className="w-[74%] border"> 
  <MuxPlayer 
    streamType="live"
    playbackId="02a01NjB00dm02Wg426KR8aMKnkZD538JnG7YQZmkoNoebc"
    metadataVideoTitle="Placeholder (optional)"
    metadataViewerUserId="Placeholder (optional)"
    primaryColor="#FFFFFF"
    secondaryColor="#000000"
  /></div>


  <div className="w-1/4 border rounded-sm p-2">
    <h3 className=""> <CiStreamOn /></h3>



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

  </div>
</section>

<div className="p-2 max-w-48 ">
<MuxPlayer
className=""
  streamType="on-demand"
  playbackId="YD4ez8yyV4DFuA8misyZlPoAhdavnBaOL27zSZRgIPA"
  metadataVideoTitle="Placeholder (optional)"
  metadataViewerUserId="Placeholder (optional)"
  primaryColor="#FFFFFF"
  secondaryColor="#000000"
/>
</div>

  </div>

  
 


            
     
      
       
    
  
    
    )
}
