import React from "react";
import styles from "./Member.module.scss";

function Member({ name, title }) {
  return (
    <div className={styles.MemberName}>
      {name}
      <div className={styles.MemberNameDesc}>{title}</div>
    </div>
  );
}

export default Member;
