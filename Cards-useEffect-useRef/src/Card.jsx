import styles from "./Card.module.css";
function Card({ image, alt }) {
  return <img className={styles.card} src={image} alt={alt} />;
}

export default Card;
