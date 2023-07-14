import "./Navbar.scss";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
// Component(s)
import Sidebar from "../Sidebar/Sidebar";
// Translator
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation();
  const historyContainerRef = useRef();
  const [showSidebar, setShowSidebar] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [showMore, setShowMore] = useState({ isVisible: true });

  const links = [
    { title: "home", href: "www.home.com", time: "" },
    { title: "home", href: "www.home.com", time: "" },
    { title: "home", href: "www.home.com", time: "" },
    { title: "home", href: "www.home.com", time: "" },
    { title: "home", href: "www.home.com", time: "" },
    { title: "home", href: "www.home.com", time: "" },
    { title: "home", href: "www.home.com", time: "" },
    { title: "home", href: "www.home.com", time: "" },
    { title: "home", href: "www.home.com", time: "" },
    { title: "home", href: "www.home.com", time: "" },
    { title: "home", href: "www.home.com", time: "" },
    { title: "home", href: "www.home.com", time: "" },
    { title: "home", href: "www.home.com", time: "" },
    { title: "home", href: "www.home.com", time: "" },
    { title: "home", href: "www.home.com", time: "" },
    { title: "home", href: "www.home.com", time: "" },
    { title: "home", href: "www.home.com", time: "" },
    { title: "home", href: "www.home.com", time: "" },
    { title: "home", href: "www.home.com", time: "" },
    { title: "home", href: "www.home.com", time: "" },
    { title: "home", href: "www.home.com", time: "" },
    { title: "home", href: "www.home.com", time: "" },
    { title: "home", href: "www.home.com", time: "" },
    { title: "home", href: "www.home.com", time: "" },
    { title: "home", href: "www.home.com", time: "" },
  ];

  useEffect(() => {
    const handleClickOutsideHistoryContainer = (event) => {
      //ref is undefined???
      console.log("clicked: ", historyContainerRef);
      if (
        historyContainerRef.current &&
        !historyContainerRef.current.contains(event.target)
      ) {
        console.log("false");
        setShowHistory(false);
      } else {
        console.log("true");
        setShowHistory(true);
      }
    };

    document.addEventListener("mousedown", handleClickOutsideHistoryContainer);
  });

  console.log("current tab: ", window.location);

  return (
    <nav>
      <div className="navbar">
        <div className="history-btn" onClick={() => setShowHistory(true)}>
          History
          {showHistory && (
            <div
              className={`history-links-container ${
                !showMore.isVisible && "expanded-history-links-container"
              }`}
            >
              <div className="history-content">
                <div
                  className={`links-container ${
                    !showMore.isVisible && "expanded-links-container"
                  }`}
                >
                  {links?.map((item, index) => (
                    <Link
                      className="link"
                      to={item.href}
                      key={index}
                      onClick={() => setShowHistory(false)}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
                {showMore.isVisible && (
                  <div
                    className="show-more-btn"
                    onClick={() => setShowMore({ isVisible: false })}
                  >
                    show more
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
        {!showSidebar && (
          <button className="nav-btn" onClick={() => setShowSidebar(true)}>
            {t("nav_btn")}
          </button>
        )}
      </div>
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
    </nav>
  );
};

export default Navbar;
