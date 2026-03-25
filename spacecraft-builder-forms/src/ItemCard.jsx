import styles from "./ItemCard.module.css";

function ItemCard({ item }) {
  const { name, qty, purpose } = item;
  return (
    <div className={styles.card}>
      <h3>{name}</h3>
      <p>Quantity: {qty}</p>
      <p>Purpose: {purpose}</p>
    </div>
  );
}
export default ItemCard;
