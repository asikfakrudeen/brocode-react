import { useMemo, useState } from "react";

const ShoppingCart = () => {
  const [items, setItems] = useState([
    { id: 1, price: 200, qty: 2 },
    { id: 2, price: 300, qty: 1 }
  ]);

  const totalAmount = useMemo(() => {
    return items.reduce((sum, item) => sum + item.price * item.qty, 0);
  }, [items]);

  return (
    <>
      <h3>Total: {totalAmount}</h3>
    </>
  );
}

export default ShoppingCart;