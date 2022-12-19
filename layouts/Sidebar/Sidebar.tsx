import styles from "./Sidebar.module.css";
import sidebarConfig from "../../config/sidebar";
import Link from "next/link";
import { useRouter } from "next/router";


const Sidebar = () => {

  const { pathname } = useRouter()

  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <img src="/logo.svg"></img>
      </div>
      <nav>
        <ul>
          {sidebarConfig?.main?.map((item) => (
            <Link key={item.title} href={item.route}>
              <li className={pathname == item.route ? styles.active_link : styles.link}>
                <div className={styles.img}>
                  {pathname == item.route ? item.activeIcon : item.defaultIcon}
                </div>
                {item.title}
              </li>
            </Link>
          ))}
        </ul>
        <ul>
          {sidebarConfig?.other?.map((item) => (
            <Link key={item.title} href={item.route}>
              <li className={pathname == item.route ? styles.active_link : styles.link}>
                <div className={styles.img}>
                  {pathname == item.route ? item.activeIcon : item.defaultIcon}
                </div>
                {item.title}
              </li>
            </Link>
          ))}
        </ul>
      </nav>
      <div></div>
    </aside>
  );
};

export default Sidebar;
