import React from "react";
import accordions from "./data";

import styles from "./Accordion.module.css";

import Questions from "./Questions";

function According() {
  return (
    <div className={styles.container}>
      <h3>questions and answers about login</h3>
      <div>
        {accordions.map((accordion) => {
          return <Questions key={accordion.id} {...accordion} />;
        })}
      </div>
    </div>
  );
}

export default According;
