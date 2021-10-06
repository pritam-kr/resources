import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { useState } from "react";
import { resourcesDb } from "./components/Data/Database";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";

const language = Object.keys(resourcesDb);

function App() {
  const [resources, setResources] = useState("html");

  function linkHandler(links) {
    setResources(links);
  }

  var url = "https://learning-resources-links.netlify.app/";

  return (
    <>
      <Nav language={resources} />
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
            <div className="about-info">
              <h5 className="container-text">Share</h5>
              <span className="share_icon">
                <FacebookShareButton url={url}>
                  <FacebookIcon size={30} round={true} />
                </FacebookShareButton>
              </span>
              <span className="share_icon">
                <TwitterShareButton url={url}>
                  <TwitterIcon size={30} round={true} />
                </TwitterShareButton>
              </span>
              <span className="share_icon">
                <LinkedinShareButton url={url}>
                  <LinkedinIcon size={30} round={true} />
                </LinkedinShareButton>
              </span>
            </div>
          </div>
          <div className="links-container">
            <h5 className="container-text">Resources for {resources}</h5>
            {resourcesDb[resources].map((el) => {
              return (
                <>
                  <div className="link-box">
                    <h3>
                      {" "}
                      <a href={el.link} target="_blank" rel="noreferrer">
                        {el.title}{" "}
                      </a>
                    </h3>
                    <p className="type"><b>Content type:</b> {el.type}</p>
                    <p>{el.des}</p>{" "}
                    <span>
                      <a href={el.link} target="_blank" rel="noreferrer">
                        <i className="fas fa-link"></i>
                      </a>
                    </span>{" "}
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
