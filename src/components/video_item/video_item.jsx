import React from 'react';
import { useHistory } from 'react-router';
import './video_item.css';

const VideoItem = ({ video, video: { snippet }, onVideoClick }) => {
  const history = useHistory();
  // props.history.push('/videodetail')
  return (
    <li
      className='video'
      onClick={() => onVideoClick(history.push('/videodetail'))}
    >
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
};

export default VideoItem;
