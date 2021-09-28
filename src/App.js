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
      title: "w3school - CSS",
      link: "https://www.w3schools.com/css/default.asp",
    },
    {
      title: "w3school - JavaScript",
      link: "https://www.w3schools.com/js/default.asp",
    },
    {
      title: "w3school - ",
      link: "https://www.w3schools.com/js/default.asp",
    },
  ],
  css: [
    {
      title: "w3school - HTML",
      link: "https://www.w3schools.com/html/default.asp",
    },
    {
      title: "w3school - CSS",
      link: "https://www.w3schools.com/css/default.asp",
    },
    {
      title: "w3school - JavaScript",
      link: "https://www.w3schools.com/js/default.asp",
    },
    {
      title: "w3school - ",
      link: "https://www.w3schools.com/js/default.asp",
    },
  ],
  javaScript: [
    {
      title: "w3school - HTML",
      link: "https://www.w3schools.com/html/default.asp",
    },
    {
      title: "w3school - CSS",
      link: "https://www.w3schools.com/css/default.asp",
    },
    {
      title: "w3school - JavaScript",
      link: "https://www.w3schools.com/js/default.asp",
    },
    {
      title: "w3school - ",
      link: "https://www.w3schools.com/js/default.asp",
    },
  ],
  python: [
    {
      title: "w3school - HTML",
      link: "https://www.w3schools.com/html/default.asp",
    },
    {
      title: "w3school - CSS",
      link: "https://www.w3schools.com/css/default.asp",
    },
    {
      title: "w3school - JavaScript",
      link: "https://www.w3schools.com/js/default.asp",
    },
    {
      title: "w3school - ",
      link: "https://www.w3schools.com/js/default.asp",
    },
  ],
  'c++': [
    {
      title: "w3school - HTML",
      link: "https://www.w3schools.com/html/default.asp",
    },
    {
      title: "w3school - CSS",
      link: "https://www.w3schools.com/css/default.asp",
    },
    {
      title: "w3school - JavaScript",
      link: "https://www.w3schools.com/js/default.asp",
    },
    {
      title: "w3school - python",
      link: "https://www.w3schools.com/js/default.asp",
    },
  ],
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
            <p className="container-text">Keywords</p>
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
          </div>
          <div className="links-container">
            {resourcesDb[resources].map((el) => {
              return (
                <>
                  <div className="link-box">
                        <a href="{el.link}"><h3>{el.title}</h3> </a>
                        <a href="{el.link}"><span><i class="fas fa-link"></i></span> </a>
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
