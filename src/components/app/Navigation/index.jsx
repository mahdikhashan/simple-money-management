import React from "react";

import { Link, useLocation } from "react-router-dom";

import { withTranslation } from "react-i18next";

import "./style.scss";
import "@Styles/router-link-button-override.css";

function Navigation(props) {
  const { t } = props;

  let location = useLocation();

  return (
    <div className="top-wrapper" data-testid="main-navigation">
      <div className="btn-wrapper">
        <Link
          className="router-link-btn router-link-btn__medium"
          to={"/transaction/new"}
          state={{ backgroundLocation: location }}
          data-testid="add-new-transaction-button"
        >
          {t("new-transaction-btn")}
        </Link>
      </div>
    </div>
  );
}

export { Navigation };
export default withTranslation()(Navigation);
