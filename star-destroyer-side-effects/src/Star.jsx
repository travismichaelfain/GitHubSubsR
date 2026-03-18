import { useEffect, useRef } from "react";
import styles from "./Star.module.css";

function Star({ star, starDestroyer }) {
  const {
    id,
    position: { x, y },
  } = star;
  const starRef = useRef(null);

  useEffect(() => {
    if (starRef.current) {
      starRef.current.focus();
    }
  }, []);

  return (
    <div
      className={styles.star}
      style={{ position: "absolute", left: `${x}px`, top: `${y}px` }}
      onClick={() => starDestroyer(id)}
      ref={starRef}
      tabIndex={0}
    ></div>
  );
}
export default Star;
