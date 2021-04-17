import React from 'react';
import VideoItem from '../video_item/video_item';
import './video_list.css';

const VideoList = ({ videos, onVideoClick }) => (
  <div className='content'>
    <div className='content_poster'>
      <button className='content_poster_delete'>X</button>
      <button className='content_poster_wacth'>지금보기</button>
      <img src='/images/youtube-posters.png' alt='' />
    </div>
    <div className='content_video'>
      {videos.map((video) => (
        <VideoItem key={video.id} video={video} onVideoClick={onVideoClick} />
      ))}
    </div>
  </div>
);

export default VideoList;
