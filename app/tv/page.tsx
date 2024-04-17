"use client"
import MuxPlayer from "@mux/mux-player-react"; 
import Nav from '@/components/Nav'
export default function TvStream(){

    return (

      <div className=" ">
        <Nav/>
        <div className="flex justify-center  h-screen min-w-[600px]">
  <div className="w-[550px] max-h-[450px] flex border-10 border-black p-4">
  <MuxPlayer 
    streamType="live"
    playbackId="02a01NjB00dm02Wg426KR8aMKnkZD538JnG7YQZmkoNoebc"
    metadataVideoTitle="Placeholder (optional)"
    metadataViewerUserId="Placeholder (optional)"
    primaryColor="#FFFFFF"
    secondaryColor="#000000"
  />
  

  </div>
</div>

  
  
  
  </div>

  
 


            
     
      
       
    
  
    
    )
}