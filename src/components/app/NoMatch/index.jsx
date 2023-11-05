import React from "react";

import { Link } from "react-router-dom";

import { withTranslation } from "react-i18next";

function NoMatch(props) {
  const { t } = props;

  return (
    <div>
      <h2>{t("nothing-to-see-here")}</h2>
      <p>
        <Link to="/">{t("go-to-home-page")}</Link>
      </p>
    </div>
  );
}

export default withTranslation()(NoMatch);
