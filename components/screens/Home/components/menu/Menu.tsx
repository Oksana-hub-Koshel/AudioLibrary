import styles from "./Menu.module.css";
import { Icon } from "@iconify/react";

const Menu = ({ state, setState }: any) => {
  return (
    <div className={styles.container}>
      <div className={styles.container_head}>
        <div className={styles.text}>View all</div>
        <Icon
          icon="radix-icons:caret-right"
          color="white"
          vFlip={true}
          width={25}
          height={25}
          className={styles.radix_icon}
        />
      </div>
      <div className={styles.icons}>
        <Icon
          icon="mdi:view-list"
          color="white"
          vFlip={true}
          className={styles.icon1_module}
          onClick={() => {
            setState("line");
          }}
        />
        <Icon
          icon="mdi-light:view-module"
          color="white"
          vFlip={true}
          className={styles.icon2_module}
          onClick={() => {
            setState("modal");
          }}
        />
      </div>
    </div>
  );
};
export default Menu;
