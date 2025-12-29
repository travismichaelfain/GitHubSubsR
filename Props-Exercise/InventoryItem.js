function InventoryItem({ name, type, quantity = 0, price }) {
  const lowStockThreshold = 5;
  const valueThreshold = 1000;
  const totalValue = quantity * price;
  return (
    <div>
      <h2>
        {name} ({type})
      </h2>
      {quantity < lowStockThreshold && (
        <Message>
          <p>
            <span>⚠️</span> Low Stock! {quantity} remained.
          </p>
        </Message>
      )}
      {totalValue > valueThreshold && (
        <Message>
          <p>
            <span>💰</span> High value - consider extra protection!
          </p>
        </Message>
      )}
    </div>
  );
}
