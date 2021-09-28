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
    {
      title: "MDN - JavaScript",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
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
    {
      title: "MDN - Learn reactJs",
      link: "https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started",
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
  ],
  openSource: [{}],
  projects: [
    {
      title: "JavaScript Projects for Beginners",
      link: "https://skillcrush.com/blog/projects-you-can-do-with-javascript/",
    },
    {
      title: "40 JavaScript Projects for Beginners",
      link: "https://www.freecodecamp.org/news/javascript-projects-for-beginners/",
    },
    {
      title: "30 Day Vanilla JS Coding Challenge",
      link: "https://javascript30.com/",
    },
    {
      title: "freecodecamp - Vanilla JavaScript Course",
      link: "https://www.youtube.com/watch?v=3PHXvlpOkf4",
    },
    {
      title:
        "florin pop - 10 JavaScript Projects in 10 Hours - Coding Challenge 🔥",
      link: "https://www.youtube.com/watch?v=dtKciwk_si4",
    },
    {
      title:
        "florin pop - 10 JavaScript Projects in 1 Hours - Coding Challenge 🔥",
      link: "https://www.youtube.com/watch?v=8GPPJpiLqHk",
    },
  ],
  bootstrap: [
    {
      title: "official doc - Learn Bootstrap",
      link: "https://getbootstrap.com/",
    },
    {
      title: "Traversy media - Bootstrap 5 Crash Course",
      link: "https://www.youtube.com/watch?v=4sosXZsdy-s",
    },
  ],
  CLI: [
    {
      title: "First CLI App: Intro to programming",
      link: "https://www.youtube.com/watch?v=_L-UszPmy2A",
    },
  ],
  nodejs: [{}],
  extensions: [{}],
  blog: [
    {
      title: "hashnode.com",
      link: "https://hashnode.com/",
    },
    {
      title: "DEV community",
      link: "https://dev.to/",
    },
    {
      title: "Daily dev",
      link: "https://daily.dev/",
    },
    {
      title: "freecodecamp blog",
      link: "https://www.freecodecamp.org/news/tag/blog/",
    },
    {
      title: "medium.com",
      link: "https://medium.com/",
    },
  ],
};

const language = Object.keys(resourcesDb);

function App() {
  const [resources, setResources] = useState("html");

  // console.log(resourcesDb[resources]);

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
              <p>You can get all usefull resources.</p>
            </div>
          </div>
          <div className="links-container">
            <h5 className="container-text">Resources for {resources}</h5>
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
                        <i className="fas fa-link"></i>
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
