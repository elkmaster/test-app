import React from "react";
import style from "./Footer.module.scss";

import connect from "../../store/connect";
import { withTeam } from "../../store/TeamStore";

function Footer({ selectedTeam, teams }) {
  return <footer className={style.Footer}>{teams[selectedTeam].name}</footer>;
}

export default connect(Footer)(withTeam);
