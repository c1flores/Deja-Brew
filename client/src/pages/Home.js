import React from "react";
import Parallax from "../components/Parallax";
import ParallaxImg1 from "../assets/cover.jpg";


const Home = () => {
  return (
    <div className="container">
      <Parallax image={ParallaxImg1}>
        <h1 className="main-title">Deja Brew, Inc.</h1>
        <p className="subtitle">Serving only the best since like a week ago</p>
      </Parallax>
    </div>
  );
};

export default Home;
