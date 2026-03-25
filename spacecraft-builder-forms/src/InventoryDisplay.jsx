import { useState } from "react";
import EditItem from "./EditItem";
import ItemCard from "./ItemCard";
import ItemAction from "./ItemAction";
import styles from "./InventoryDisplay.module.css";

const InventoryDisplay = ({
  items,
  onRemove,
  onUpdate,
  editingItem,
  onEdit,
  onFinish,
}) => {
  return (
    <div className={styles.inventoryDisplay}>
      {items.map((item) => (
        <div key={item.id}>
          {editingItem === item.id ? (
            <EditItem item={item} onUpdate={onUpdate} onFinish={onFinish} />
          ) : (
            <>
              <ItemCard item={item} />
              <ItemAction
                itemId={item.id}
                onRemove={onRemove}
                onEdit={onEdit}
                onFinish={onFinish}
              />
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default InventoryDisplay;
