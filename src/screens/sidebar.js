import React, { useState } from "react";

import logo from "../ui/logo-udemy.svg";

function Sidebar() {
  const [nav, setNav] = useState([
    { label: "Home", slug: "/", icon: "icon-home" },
    { label: "Discover", slug: "discover", icon: "icon-ul" },
    { label: "Categories", slug: "discover", icon: "icon-tag" },
    { label: "My Courses", slug: "my-course", icon: "icon-briefCase" },
  ]);

  const [currentPage, setCurrentPage] = useState("/");

  var navigation = [];
  for (let i = 0; i < nav.length; i++) {
    navigation.push(
      <li key={"nav-" + i + "-" + nav[i].slug}>
        <a
          href={nav[i].slug}
          className={
            "link noul flex c333 aic" +
            (currentPage == nav[i].slug ? " on" : "")
          }
        >
          <div className={"ico s20" + nav[i].icon} />
          <h2 className="lbl s20">{nav[i].label}</h2>
        </a>
      </li>
    );
  }
  return (
    <>
      <div className="sidebar fixed">
        <a href="#" className="logo bl">
          <img src={logo} className="bl" />
        </a>
        <ul className="nav">{navigation}</ul>

        <div className="updated-course flex aic">
          <div className="icon-lamp-bright ico cfff"></div>
          <div className="lbl s15 fontb c333">
            Upadeted Course
            <h2 className="author s13 c777">by Isha Paghdal</h2>
          </div>
        </div>

        <div className="stats flex aic">
          <div className="stats-box flex">
            <div className="ico ico-points s24 icon-shield"></div>
            <h2 className="val s15 c333 fontb">1800</h2>
            <h2 className="lbl s13 c777">Point</h2>
          </div>

          <div className="stats-box flex">
            <div className="ico s24 icon-battery icon-shield"></div>
            <h2 className="val s15 s15 c333 fontb">45.3%</h2>
            <h2 className="lbl s13 c777">Complate</h2>
          </div>
        </div>

        <div className="me flex aic ">
          <div className="photo s24 cfff">
            <img src={logo} className="lbl" alt="" />
          </div>
          <div className="lbl s15 fontb c333">
            Upadeted Course
            <h2 className="uname s13 c777">@ishapaghdal</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
