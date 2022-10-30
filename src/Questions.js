import React from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { useState } from "react";

import styles from "./Accordion.module.css";

function Questions({ title, info }) {
  const [toggle, setToggle] = useState(false);

  const toggleBtn = () => {
    setToggle(!toggle);
  };

  return (
    <article className={styles.list}>
      <header>
        <h3>{title}</h3>
        <button>
          {toggle ? (
            <FaCaretUp onClick={toggleBtn} className={styles.list_btn} />
          ) : (
            <FaCaretDown onClick={toggleBtn} className={styles.list_btn} />
          )}
        </button>
      </header>
      {toggle && <p>{info}</p>}
    </article>
  );
}

export default Questions;
