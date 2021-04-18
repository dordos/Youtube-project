import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Search_bar from './components/search_bar/search_bar';
import SideBar from './components/side_bar/side_bar';
import VideoDetail from './components/video_detail/video_detail';
import VideoList from './components/video_list/video_list';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = (video) => {
    setSelectedVideo(video);
    console.log(setSelectedVideo(video));
  };

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

  return (
    <>
      <Search_bar onSearch={search} />
      <div className='contentBox'>
        <BrowserRouter>
          <Switch>
            <Route path={('', '/')} exact>
              <SideBar />
              <VideoList videos={videos} onVideoClick={selectVideo} />
            </Route>
            <Route path='/videodetail'>
              {/* <VideoDetail /> */}
              {selectedVideo && <VideoDetail video={selectedVideo} />}
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
