import { ReactNode } from "react";
import Player from "../components/shared/Player/Player";
import SSRPlayer from "../components/shared/Player/SSRPlayer";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import styles from './Layout.module.css'
import Sidebar from "./Sidebar/Sidebar";

const Layout = ({ heading, children }:{ children: ReactNode, heading?: ReactNode }) => {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <main className={styles.main}>
        <Header heading={heading}/>
        <section>
        {children}
        </section>
        <Footer/>
      </main>
    </div>
  )
};

export default Layout;
