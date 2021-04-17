import React from 'react';
import './video_item.css';

const VideoItem = ({ video, video: { snippet }, onVideoClick }) => (
  <li className='video' onClick={() => onVideoClick(video)}>
    <img
      className='thumbnail'
      src={snippet.thumbnails.medium.url}
      alt='video thumbnail'
    />
    <div>
      <p className='title'>{snippet.title}</p>
      <p className='channel'>{snippet.channelTitle}</p>
      <p className='count'>32만회</p>
    </div>
  </li>
);

export default VideoItem;
