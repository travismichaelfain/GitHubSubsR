import { useState, useReducer } from "react";
import InventoryDisplay from "./InventoryDisplay";
import ItemForm from "./ItemForm";
import styles from "./SpaceCraftBuilder.module.css";

function reducer(state, action) {
  switch (action.type) {
    case "add-item":
      return { items: [...state.items, action.payload] };
    case "remove-item":
      return {
        items: state.items.filter((item) => item.id !== action.payload),
      };
    case "update-item":
      return {
        items: state.items.map((item) =>
          item.id === action.payload.id ? action.payload : item,
        ),
      };
    default:
      return state;
  }
}

function SpaceCraftBuilder() {
  const [{ items }, dispatch] = useReducer(reducer, {
    items: [],
  });
  const [editingItem, setEditingItem] = useState(null);

  const addItem = (item) => {
    dispatch({ type: "add-item", payload: item });
  };

  const removeItem = (id) => {
    dispatch({ type: "remove-item", payload: id });
  };

  const updateItem = (item) => {
    dispatch({ type: "update-item", payload: item });
  };

  const handleEdit = (id) => {
    setEditingItem(id);
  };

  const finishEdit = () => {
    setEditingItem(null);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>SpaceCraft Builder</h1>
      {editingItem === null && <ItemForm onAdd={addItem} />}
      <InventoryDisplay
        items={items}
        onRemove={removeItem}
        onUpdate={updateItem}
        editingItem={editingItem}
        onEdit={handleEdit}
        onFinish={finishEdit}
      />
    </div>
  );
}

export default SpaceCraftBuilder;
