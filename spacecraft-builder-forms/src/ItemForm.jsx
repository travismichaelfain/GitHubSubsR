import { useState } from "react";
import styles from "./ItemForm.module.css";

const initialState = {
  name: "",
  qty: "",
  purpose: "",
};

const initialInvalidState = {
  name: false,
  qty: false,
  purpose: false,
};

function ItemForm({ onAdd }) {
  const [formData, setFormData] = useState(initialState);
  const [invalidFields, setInvalidFields] = useState(initialInvalidState);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    setInvalidFields({
      ...invalidFields,
      [name]: false,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newInvalidFields = {
      name: formData.name.trim() === "",
      qty: formData.qty === "" || Number(formData.qty) <= 0,
      purpose: formData.purpose.trim() === "",
    };

    setInvalidFields(newInvalidFields);

    const hasErrors = Object.values(newInvalidFields).some((value) => value);

    if (hasErrors) return;

    onAdd(formData);
    setFormData(initialState);
    setInvalidFields(initialInvalidState);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={invalidFields.name ? styles.invalid : ""}
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Item Name"
      />

      <input
        className={invalidFields.qty ? styles.invalid : ""}
        type="number"
        name="qty"
        value={formData.qty}
        onChange={handleChange}
        placeholder="Quantity"
      />

      <input
        className={invalidFields.purpose ? styles.invalid : ""}
        type="text"
        name="purpose"
        value={formData.purpose}
        onChange={handleChange}
        placeholder="Purpose"
      />

      <button type="submit">Add Item</button>
    </form>
  );
}

export default ItemForm;
