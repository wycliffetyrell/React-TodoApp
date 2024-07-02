import styles from "./footer.module.css";
export const Footer = ({ completedTodos, totalsTodos }) => {
  return (
    <div className={styles.footer}>
      <span className={styles.item}>Completed Todos: {completedTodos}</span>
      <span className={styles.item}>Total Todos: {totalsTodos}</span>
    </div>
  );
};
