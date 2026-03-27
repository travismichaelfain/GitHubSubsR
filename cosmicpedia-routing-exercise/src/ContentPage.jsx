import data from "./content";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./ContentPage.module.css";

function ContentPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const content = data.find((item) => item.id === id);

  if (!content) {
    return <h2>Content not found</h2>;
  }

  return (
    <div className={styles.contentPage}>
      <button onClick={() => navigate(-1)}>Go Back</button>

      <h1>{content.title}</h1>
      <p>{content.description}</p>
    </div>
  );
}

export default ContentPage;
