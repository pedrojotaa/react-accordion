import React from "react";
import accordions from "./data";

import { useState, useEffect } from "react";

import styles from "./Accordion.module.css";

function According() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className={styles.container}>
      <div>questions and answers about login</div>
      <ul>
        {accordions.map((accordion) => {
          return (
            <li>
              <h4>{accordion.title}</h4>
              <p>{accordion.info}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default According;
