import { useState } from "react";
import styles from "./EditItem.module.css";

function EditItem({ item, onUpdate, onFinish }) {
  const { name, qty, purpose } = item;
  const initialState = { name, qty, purpose };
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate({ ...item, ...formData });
    onFinish();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="number"
        name="qty"
        value={formData.qty}
        onChange={handleChange}
      />
      <input
        type="text"
        name="purpose"
        value={formData.purpose}
        onChange={handleChange}
      />
      <button type="submit">Update Item</button>
    </form>
  );
}

export default EditItem;
