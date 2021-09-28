import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { useState } from "react";

const resourcesDb = {
  html: [
    {
      title: "w3school - HTML",
      link: "https://www.w3schools.com/html/default.asp",
    },
    {
      title: "neogcamp - Getting started with HTML5",
      link: "https://www.youtube.com/watch?v=No8qdcVYiQw",
    },
    {
      title: "traversy media - HTML Crash Course For Absolute Beginners",
      link: "https://www.youtube.com/watch?v=UB1O30fR-EE",
    },
    {
      title: "Programming with mosh - HTML Crash Course",
      link: "https://www.youtube.com/watch?v=qz0aGYrrlhU",
    },
    {
      title: "MDN - Learn HTML",
      link: "https://developer.mozilla.org/en-US/docs/Learn/HTML",
    },
    {
      title: "Tutorialspoint - HTML Tutorial",
      link: "https://www.tutorialspoint.com/html/index.htm",
    },
  ],
  css: [
    {
      title: "w3school - CSS",
      link: "https://www.w3schools.com/css/default.asp",
    },
    {
      title: "neogcamp - Getting started with CSS3",
      link: "https://www.youtube.com/watch?v=u6_a0d94A1Q",
    },
    {
      title: "MDN - Learn CSS",
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
  ],
  javaScript: [
    {
      title: "w3school - JavaScript",
      link: "https://www.w3schools.com/js/default.asp",
    },
    {
      title: "neogcamp - JavaScript in the browser!",
      link: "https://www.youtube.com/watch?v=yLZazznWoAs",
    },
  ],
  reactjs: [
    {
      title: "neogcamp - Introduction to ReactJS library",
      link: "https://www.youtube.com/watch?v=KUJsaM-hAjs&t=6273s",
    },
    {
      title: "official docs - learn reactjs",
      link: "https://reactjs.org/",
    },
    {
      title: "w3school - Learn reactJs",
      link: "https://www.w3schools.com/REACT/DEFAULT.ASP",
    },
  ],
  roadmap: [
    {
      title: "roadmap - Developer Roadmaps",
      link: "https://roadmap.sh/",
    },
  ],
  reppository: [
    {
      title: "microsoft - Web Development for Beginners",
      link: "https://github.com/microsoft/Web-Dev-For-Beginners",
    },
  ]
};

const language = Object.keys(resourcesDb);

function App() {
  const [resources, setResources] = useState("html");

  console.log(resourcesDb[resources]);

  function linkHandler(links) {
    setResources(links);
  }

  return (
    <>
      <Nav />
      <main id="main-section">
        <div className="resources-container">
          <div className="keywords-container">
            <h5 className="container-text">Keywords</h5>
            {language.map((eachLang) => {
              return (
                <button
                  className="btn-lang"
                  onClick={() => linkHandler(eachLang)}
                >
                  {eachLang}
                </button>
              );
            })}
            <div className="about-info">
              <h5 className="container-text">About</h5>
              <p>
                You can get all usefull resources.
              </p>
            </div>
          </div>
          <div className="links-container">
            <h5 className="container-text">Resources of {resources}</h5>
            {resourcesDb[resources].map((el) => {
              return (
                <>
                  <div className="link-box">
                    <a href={el.link} target="_blank" rel="noreferrer">
                      <h3>{el.title}</h3>{" "}
                    </a>
                    <p> {el.link}</p>
                    <a href={el.link} target="_blank" rel="noreferrer">
                      <span>
                        <i class="fas fa-link"></i>
                      </span>{" "}
                    </a>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
