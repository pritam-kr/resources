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

import { CopyToClipboard } from "react-copy-to-clipboard";

const language = Object.keys(resourcesDb);
var color = "#0f66d8";

function App() {
  const [resources, setResources] = useState("html");

  function linkHandler(e, links) {
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
                  onClick={(e) => linkHandler(e, eachLang)}
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
            <h5 className="container-text">
              Resources for <span style={{ color: color }}>{resources}</span>
            </h5>
            {resourcesDb[resources].map((el) => {
              return (
                <>
                  <div className="link-box">
                    <div className="link-box-header">
                      <h3>
                        {" "}
                        <a href={el.link} target="_blank" rel="noreferrer">
                          {el.title}{" "}
                        </a>
                      </h3>
                      <CopyToClipboard text={el.link} onCopy={() => {}}>
                        <span className="btn-copy">
                          <i className="fas fa-copy"></i>
                        </span>
                      </CopyToClipboard>
                    </div>
                    <p className="type">
                      <b> {el.type}</b>
                    </p>
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
