class Youtube {
  constructor(key) {
    thks.key = key;
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
  }

  mostPopular() {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=bts&type=video&key=${this.key}`,
      this.requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items));
  }
}

export default Youtube;
