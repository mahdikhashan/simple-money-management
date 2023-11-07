import React from "react";

import LogoSrc from "@Assets/image/logo-small.png";

import "./style.css";

const Logo = () => {
  return <img className={"small-logo"} src={LogoSrc} alt="logo" />;
};

export default Logo;
