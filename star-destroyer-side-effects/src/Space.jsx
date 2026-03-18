import { useState, useEffect, useRef } from "react";
import Star from "./Star";
import styles from "./Space.module.css";

const starSize = 40;

function Space() {
  const [stars, setStars] = useState([]);
  const spaceRef = useRef(null);

  function idGenerator() {
    return Date.now() * Math.random();
  }

  function locationGenerator() {
    if (!spaceRef.current) return { x: 0, y: 0 };
    const spaceRect = spaceRef.current.getBoundingClientRect();
    return {
      x: Math.random() * (spaceRect.width - starSize),
      y: Math.random() * (spaceRect.height - starSize),
    };
  }

  function starDestroyer(id) {
    setStars((prevStars) => prevStars.filter((star) => star.id !== id));
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (spaceRef.current) {
        const position = locationGenerator();

        setStars((prevStars) => [
          ...prevStars,
          { id: idGenerator(), position },
        ]);
      }
    }, 2500);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={styles.space} ref={spaceRef}>
      {stars.map((star) => (
        <Star key={star.id} star={star} starDestroyer={starDestroyer} />
      ))}
    </div>
  );
}
export default Space;
