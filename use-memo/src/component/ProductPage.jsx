import { useState, useMemo, memo } from "react";

const ProductDetails = memo(function ProductDetails({ config }) {
  console.log("ProductDetails rendered");
  return <pre>{JSON.stringify(config, null, 2)}</pre>;
});

const ProductPage = () => {

  const [count, setCount] = useState(0);

  const config = useMemo(() => ({
    currency: "USD",
    theme: "dark"
  }), []);

  return (
    <>
      <button onClick={() => setCount((c) => c + 1)}>Re-render</button>
      <ProductDetails config={config} />
    </>
  );
}

export default ProductPage;