import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const navTags = links.map(link => <a href = {`#${link}`} key={link}>{link}</a>)
  
  return <nav>{navTags}</nav>;
}

export default NavBar;
