import React from "react";
import styles from "./TeamName.module.scss";

function TeamName({ name }) {
  return (
    <div className={styles.TeamName}>
      <div className={styles.TeamNameLogo} />
      <div className={styles.TeamNameLabel}>{name}</div>
    </div>
  );
}

export default TeamName;
