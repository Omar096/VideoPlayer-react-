import React from "react";
const VideoDet = ({ video }) => {
  if (!video) {
    return (
      <div className='ui '>
      <div className="ui active centered inline loader"></div>
      </div>
    );
  }
  const VideoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div>
      <div className="ui embed">
        <iframe src={VideoSrc} />
      </div>
      <div className="ui segment">
        <h3 className="ui header">{video.snippet.title}</h3>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};
export default VideoDet;
