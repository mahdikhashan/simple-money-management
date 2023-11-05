import React from "react";

import Logo from "@Components/common/logo";

import useDarkMode from "@Hooks/useDarkMode";

import { Link, useLocation } from "react-router-dom";

import { withTranslation } from "react-i18next";

import "./style.css";
import "@Styles/router-link-button-override.css";

function Navigation(props) {
  const { t } = props;

  let location = useLocation();

  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className="top-wrapper">
      <Logo />
      <div className="btn-wrapper">
        <Link
          className="router-link-btn router-link-btn__medium"
          to={"/transaction/new"}
          state={{ backgroundLocation: location }}
        >
          {t("new-transaction-btn")}
        </Link>
        <img
          onClick={toggleDarkMode}
          src={
            darkMode
              ? require("../../../assets/icons/moon-white-regular.png")
              : require("../../../assets/icons/sun-white-filled-regular.png")
          }
          alt="dark-mode-icon"
        />
      </div>
    </div>
  );
}

export default withTranslation()(Navigation);
