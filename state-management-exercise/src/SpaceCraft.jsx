import styles from "./SpaceCraft.module.css";

const SpaceCraft = ({ label, currentHealth }) => {
  return (
    <div className={styles.spaceCraft}>
      <h3>{label}</h3>
      <p>Health: {Math.max(currentHealth, 0)}</p>
    </div>
  );
};
export default SpaceCraft;
