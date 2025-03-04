// AboutMe.js
import React from "react";
import './AboutMe.css'; // Optional: create custom styling for this page

const AboutMe = () => {
  return (
    <div className="about-me">
      <h2>About Me</h2>
      <p>
        Hello! I'm Yusuf Ünal, and I'm passionate about frontend development. 
        I created this simple movie search site to train my skills in React programming. <br></br> <br></br>
        The movie data is fetched from https://www.omdbapi.com/, where you can get free api keys. <br></br> <br></br>
        You can contact me at{" "}
        <a href="mailto:yusuf.ue@protonmail.com" className="email-link">
          yusuf.ue@protonmail.com
        </a>
      </p>

    </div>
  );
};

export default AboutMe;