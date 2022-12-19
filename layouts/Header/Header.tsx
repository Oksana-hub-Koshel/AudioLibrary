import { Icon } from "@iconify/react";
import { useState, FC, ReactNode } from "react";
import SignUp from "../SignUp/SignUp";
import styles from "./Header.module.css";

const Header: FC<{heading: any}> = ({heading})  => {
  const isAuth = false;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <header className={styles.header}>
      <div>{heading}</div>
      <div>
        <div>{/* Search */}</div>
        {isAuth ? (
          <div className={styles.user_profile}>
            <div className={styles.user_profile__info}>
              <h4>Dmitry Sergeev</h4>
              <p>example@domain.com</p>
            </div>
            <div className={styles.user_profile__image}>
              <img></img>
            </div>
            <div className={styles.user_profile__button}>
              <Icon icon="akar-icons:chevron-down" />
            </div>
          </div>
        ) : (
          <div className={styles.user_profile}>
            <div className={styles.user_profile__info}>
              {/* <div className={styles.namepage}>
                <h4>Top 100</h4>
                <span className={styles.releases}>New releases</span>
              </div> */}
              <button onClick={openModal} className="action_button">Sign In</button>
            </div>
            <SignUp modalIsOpen={modalIsOpen} closeModal={closeModal}/>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
