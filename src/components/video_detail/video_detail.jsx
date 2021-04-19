import React from 'react';
import VideoItem from '../video_item/video_item';
import './video_detail.css';

const VideoDetail = ({ video, videos_item }) => {
  return (
    <>
      {/* <div className='detail_video_container'> */}
      <iframe
        className='detail_video'
        type='text/html'
        width='100%'
        height='500px'
        src={`https://www.youtube.com/embed/${video.id}`}
      ></iframe>

      <div className='detail_video_list'>
        {videos_item.map((video) => (
          <VideoItem key={video.id} video={video} />
        ))}
      </div>
      {/* <div className='detail_video_ifo'>
          <h1>dfsdfdfsdfdfsdfdfsdfdfsdf</h1>
          <h1>dfsdf</h1>
          <h1>dfsdf</h1>
          <h1>dfsdf</h1>
        </div> */}
      {/* </div> */}
    </>
  );
};

export default VideoDetail;
