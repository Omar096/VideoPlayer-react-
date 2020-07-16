import React from "react";
import './VideoItem.css'

const VideoItem=({Video,onVideoSelect})=>{

  return(
  <div onClick={(e)=>{onVideoSelect(Video)}} className= ' Video-Item item' id="dd">
     <img className='ui image' src={Video.snippet.thumbnails.medium.url}/>
     <div className='content'>
      <div className='header'> {Video.snippet.title}</div>
       </div>
     </div>
     )
}

export default VideoItem