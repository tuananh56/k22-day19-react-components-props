
import ProductItem from "./ProductItem";

function ProductList({ products }) {
  const handleBuy = (product) => {
    alert(
      `Bạn đã chọn ${product.name}\nGiá: ${new Intl.NumberFormat(
        "vi-VN",
        {
          style: "currency",
          currency: "VND",
        }
      ).format(product.finalPrice)}`
    );
  };

  return (
    <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          onBuy={handleBuy}
        />
      ))}
    </div>
  );
}

export default ProductList;
