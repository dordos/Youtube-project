import React from 'react';
import './video_item.css';

const VideoItem = ({ video }) => (
  <li className='video'>
    <img
      className='thumbnail'
      src={video.snippet.thumbnails.medium.url}
      alt='video thumbnail'
    />
    <div>
      <p className='title'>{video.snippet.title}</p>
      <p className='channel'>{video.snippet.channelTitle}</p>
      <p className='count'>{video.statistics.viewCount}</p>
    </div>
  </li>
);

export default VideoItem;
