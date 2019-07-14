import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Sidebar from "../../components/Sidebar/Sidebar";
import styles from "./Layout.module.scss";

function Layout(props) {
  return (
    <div className={styles.Layout}>
      <Header />
      {props.children}
      <Footer />
      <Sidebar />
    </div>
  );
}

export default Layout;
