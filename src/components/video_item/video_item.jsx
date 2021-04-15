import React from 'react';
import './video_item.css';

const VideoItem = ({ video: { snippet } }) => (
  <li className='video'>
    <img
      className='thumbnail'
      src={snippet.thumbnails.medium.url}
      alt='video thumbnail'
    />
    <div>
      <p className='title'>{snippet.title}</p>
      <p className='channel'>{snippet.channelTitle}</p>
    </div>
  </li>
);

export default VideoItem;
