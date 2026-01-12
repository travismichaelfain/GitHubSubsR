import { useState } from "react";
import styles from "./SpaceBattleSimulator.module.css";
import SpaceCraft from "./SpaceCraft.jsx";

const SpaceBattleSimulator = () => {
  const [playerHealth, setPlayerHealth] = useState(100);
  const [enemyHealth, setEnemyHealth] = useState(100);
  const [gameStatus, setGameStatus] = useState("playing");

  const handleFire = () => {
    const playerDamage = Math.floor(Math.random() * 20) + 5;
    const enemyDamage = Math.floor(Math.random() * 20) + 5;

    const newEnemyHealth = enemyHealth - playerDamage;
    const newPlayerHealth = playerHealth - enemyDamage;

    setEnemyHealth(newEnemyHealth);
    setPlayerHealth(newPlayerHealth);

    if (newEnemyHealth <= 0 && newPlayerHealth <= 0) {
      setGameStatus("draw");
    } else if (newEnemyHealth <= 0) {
      setGameStatus("won");
    } else if (newPlayerHealth <= 0) {
      setGameStatus("lost");
    }
  };

  const handleRestart = () => {
    setPlayerHealth(100);
    setEnemyHealth(100);
    setGameStatus("playing");
  };

  return (
    <div className={styles.battleSimulator}>
      <h2>Space Battle Simulator</h2>

      {gameStatus === "playing" ? (
        <button onClick={handleFire}>Fire</button>
      ) : (
        <button onClick={handleRestart}>Restart</button>
      )}

      <div className={styles.spaceCrafts}>
        <SpaceCraft label="Player" currentHealth={playerHealth} />
        <SpaceCraft label="Enemy" currentHealth={enemyHealth} />
      </div>
      <div className={styles.gameStatus}>
        {gameStatus === "draw" && <p>It's a draw!</p>}
        {gameStatus === "playing" && <p>Battle in progress...</p>}
        {gameStatus === "won" && <p>You won the battle!</p>}
        {gameStatus === "lost" && <p>You lost the battle!</p>}
      </div>
    </div>
  );
};

export default SpaceBattleSimulator;
