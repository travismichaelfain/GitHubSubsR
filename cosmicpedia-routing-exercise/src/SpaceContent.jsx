import { Link, Outlet } from "react-router-dom";
import data from "./content";
import styles from "./SpaceContent.module.css";

function SpaceContent() {
  return (
    <div className={styles.spaceContent}>
      <h1>Space Content</h1>
      <ul>
        {data.map(({ id, title }) => (
          <li key={id}>
            <Link to={id}>{title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SpaceContent;
