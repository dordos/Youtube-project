import React, { useEffect, useState } from 'react';
import Search_bar from './components/search_bar/search_bar';
import SideBar from './components/side_bar/side_bar';
import VideoList from './components/video_list/video_list';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const search = (query) => {
    youtube
      .search(query) //
      .then((videos) => setVideos(videos));
  };

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
  }, []);

  console.log(videos);

  return (
    <>
      <Search_bar onSearch={search} />
      <div className='contentBox'>
        <SideBar />
        <VideoList videos={videos} />
      </div>
    </>
  );
}

export default App;
