import { useState, useEffect, useRef } from "react";
import Card from "./Card";
import styles from "./Deck.module.css";

function Deck() {
  const [deckId, setDeckId] = useState(null);
  const [cards, setCards] = useState([]);
  const [isShuffling, setIsShuffling] = useState(true);
  const [cardsRemaining, setCardsRemaining] = useState(null);
  const [drawing, setDrawing] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    async function fetchDeck() {
      const response = await fetch(
        "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1",
      );
      const { deck_id, remaining } = await response.json();
      setDeckId(deck_id);
      setCardsRemaining(remaining);
      setIsShuffling(false);
    }

    fetchDeck();

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  async function draw() {
    if (!deckId || cardsRemaining === 0) return;
    const response = await fetch(
      `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`,
    );
    const { cards: newCards, remaining } = await response.json();
    setCardsRemaining(remaining);
    setCards((prevCards) => [...prevCards, ...newCards]);
    if (remaining === 0) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      setDrawing(false);
      setTimeout(() => {
        alert("That was the last card!");
      }, 500);
    }
  }

  function manualDraw() {
    if (!deckId || cardsRemaining === 0 || drawing) return;
    draw();
  }

  function autoDraw() {
    if (drawing) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      setDrawing(false);
    } else {
      setDrawing(true);
      intervalRef.current = setInterval(() => {
        draw();
      }, 1000);
    }
  }

  async function handleShuffle() {
    setCards([]);
    setIsShuffling(true);
    const response = await fetch(
      `https://deckofcardsapi.com/api/deck/${deckId}/shuffle/`,
    );
    const { remaining } = await response.json();
    setCardsRemaining(remaining);
    setIsShuffling(false);
  }

  return (
    <section className={styles.wrapper}>
      {isShuffling && <p className={styles.status}>Shuffling...</p>}

      <div className={styles.controls}>
        <button
          className={styles.button}
          onClick={manualDraw}
          disabled={isShuffling || cardsRemaining === 0 || drawing}
        >
          {cardsRemaining === 0 ? "No Cards Left" : "Draw Card"}
        </button>

        <button
          className={styles.button}
          onClick={autoDraw}
          disabled={isShuffling || cardsRemaining === 0}
        >
          {drawing ? "Stop Auto-Draw" : "Auto-Draw"}
        </button>

        <button
          className={styles.button}
          onClick={handleShuffle}
          disabled={isShuffling || !deckId || drawing}
        >
          Shuffle Deck
        </button>
      </div>

      <div className={styles.meta}>
        Cards Remaining: {cardsRemaining ?? "--"}
      </div>

      <div className={styles.deck}>
        {cards.map(({ code, image, value, suit }) => (
          <Card key={code} image={image} alt={`${value} of ${suit}`} />
        ))}
      </div>
    </section>
  );
}
export default Deck;
