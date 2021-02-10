import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "components/Header";
import { SideMenu } from "components/SideMenu";
import VideoContainer from "components/VideoContainer";
import "styles/App.scss";

function App() {
  const [guide, setGuide] = useState({
    video: [],
    user: { username: null, img: null },
  });
  useEffect(() => {
    // load video
    if (guide.video.length === 0) {
      // after mount
      console.log("get guide data");
      axios.get("http://www.neotubei.kro.kr/neotubei/v1/guide").then((res) => {
        setGuide(res.data);
      });
    }
  }, []);

  return (
    <div className="App">
      <Header userInfo={guide.user} />
      <main>
        <SideMenu />
        <VideoContainer videoList={guide.video} />
      </main>
      <nav className="overlay"></nav>
    </div>
  );
}

export default App;
