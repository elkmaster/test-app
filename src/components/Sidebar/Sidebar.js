import React from "react";
import { CSSTransition } from "react-transition-group";

import styles from "./Sidebar.module.scss";
import { withSidebar } from "../../store/SidebarStore";
import { withTeam } from "../../store/TeamStore";
import connect from "../../store/connect";
import TeamName from "../TeamName/TeamName";
import "./Animation.css";

function Sidebar({
  isSidebarOpen,
  toggleSidebar,
  selectedTeam,
  teams,
  selectTeam
}) {
  const renderTeam = team => {
    const selected = teams[selectedTeam].id === team.id;
    return (
      <div
        key={team.id}
        style={!selected ? { backgroundColor: "transparent" } : {}}
        className={styles.TeamListItem}
        onClick={() => {
          selectTeam(team.id);
          toggleSidebar();
        }}
      >
        <TeamName name={team.name} />
      </div>
    );
  };

  return (
    <CSSTransition
      in={isSidebarOpen}
      timeout={200}
      unmountOnExit
      classNames="sidebar"
    >
      <div className={styles.Sidebar}>
        <div className={styles.SidebarContent}>
          <div className={styles.SidebarTitle}>Choose Your Side</div>
          <div className={styles.TeamList}>
            {Object.values(teams).map(team => renderTeam(team))}
          </div>
        </div>

        <div className={styles.SidebarShade} onClick={toggleSidebar} />
      </div>
    </CSSTransition>
  );
}

export default connect(Sidebar)(withSidebar, withTeam);
