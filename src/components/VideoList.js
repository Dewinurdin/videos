import React from 'react';
import VideoItem from './VideoItem';

// passing videos as props 
const VideoList = ({ videos }) => {
  const renderedList = videos.map((video) => {
    // passed video as props = videos.map
    return <VideoItem video={video} />;
  });

  return (
    <div className="ui relaxed divided list">
      {renderedList}
    </div>
  )
};

export default VideoList;