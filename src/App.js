import React, { useEffect, useState } from 'react';
import Search_bar from './components/search_bar/search_bar';
import VideoList from './components/video_list/video_list';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {}, []);

  return (
    <>
      <Search_bar />
      <VideoList videos={videos} />
    </>
  );
}

export default App;
