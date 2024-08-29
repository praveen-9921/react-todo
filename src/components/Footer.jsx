import React from "react";
import styles from "./footer.module.css";
export default function footer({
  completedTodos,
  totalTodos,
  uncompletedTodos
}) {
  return (
    <div className={styles.footer}>
      <span className={styles.item}>Total Todos:{totalTodos}</span>
      <span className={styles.item}>Completed Todos:{completedTodos}</span>
      <span className={styles.item}>Uncompleted Todos:{uncompletedTodos}</span>
    </div>
  );
}
