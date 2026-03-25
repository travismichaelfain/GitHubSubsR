import styles from "./ItemAction.module.css";

function ItemAction({ itemId, onRemove, onEdit }) {
  return (
    <div className={styles.action}>
      <button onClick={() => onEdit(itemId)}>Edit</button>
      <button onClick={() => onRemove(itemId)}>Remove</button>
    </div>
  );
}

export default ItemAction;
