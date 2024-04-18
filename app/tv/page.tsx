"use client"
import MuxPlayer from "@mux/mux-player-react"; 
import Nav from '@/components/Nav'
export default function TvStream(){

    return (

      <div className=" ">
        <Nav/>
        <div className="flex justify-center  h-screen">
  <div className="w-[97%] max-h-[450px] flex border-10 border-black p-4 rounded-sm">
  <MuxPlayer 
    streamType="live"
    playbackId="KJ9VPlYc600yPJfV5qcPU6KJ018erN4Y3x4vTn1nwpACM"
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
