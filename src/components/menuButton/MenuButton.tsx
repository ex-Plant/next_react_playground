import styles from "./menuButton.module.css";
import { useGlobalStore } from "../../../app/store/global";
import { useState } from "react";

export const MenuButton = () => {
  function onClick() {
    setOpen((c) => !c);
    console.log(`Hi mark!`);
  }
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className={`center z-[101] ml-auto cursor-pointer md:hidden`}>
        <button
          onClick={onClick}
          className={styles.navBtn}
          aria-label="menu"
          aria-controls="primary-navigation"
          aria-expanded={open ? "true" : "false"}
        >
          <svg
            stroke="white"
            fill="none"
            className={styles.hamburger}
            viewBox="-10 -10 120 120"
            width="40"
          >
            <path
              className={styles.line}
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m 20 40 h 60 a 1 1 0 0 1 0 20 h -60 a 1 1 0 0 1 0 -40 h 30 v 70"
            ></path>
          </svg>
        </button>
      </div>
    </>
  );
};
