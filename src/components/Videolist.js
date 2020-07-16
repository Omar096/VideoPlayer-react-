import React from "react";
import VideoItem from './VideoItem'
class VideoList extends React.Component{
  render(){
    const videos=this.props.Video
    const onVideoSelect=this.props.onVideoSelect
    const RenderList=videos.map((video)=>{
      return <VideoItem Video={video} onVideoSelect={onVideoSelect}/>
    })
    return(  <div className="ui relaxed divided list">{RenderList}</div> )
  }

}
export default VideoList