import React from 'react';
import VideoItem from '../video_item/video_item';
import './video_list.css';

const VideoList = (props) => (
  <div className='content'>
    <div className='content_poster'>
      <button className='content_poster_delete'>X</button>
      <button className='content_poster_wacth'>지금보기</button>
      <img src='/images/youtube-posters.png' alt='' />
    </div>
    <div className='content_video'>
      {props.videos.map((video) => (
        <VideoItem key={video.id} video={video} />
      ))}
    </div>
  </div>
);

export default VideoList;
