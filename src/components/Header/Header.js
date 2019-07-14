import React from "react";
import connect from "../../store/connect";
import style from "./Header.module.scss";
import TeamName from "../TeamName/TeamName";
import { withSidebar } from "../../store/SidebarStore";
import { withTeam } from "../../store/TeamStore";

function Header({ toggleSidebar, selectedTeam, teams }) {
  return (
    <header className={style.Header} onClick={toggleSidebar}>
      <TeamName name={teams[selectedTeam].name} />
    </header>
  );
}

export default connect(Header)(withSidebar, withTeam);
