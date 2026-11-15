
import Badge from "./Badge";

function ProductItem({ product, onBuy }) {
  const { id, name, price, discount, image, inStock } = product;

  // Tính giá sau khi giảm
  const finalPrice = price - (price * discount) / 100;

  // Định dạng tiền Việt Nam
  const formatPrice = (value) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(value);
  };

  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden">
      {/* Product image */}
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover"
        />

        {discount > 0 && (
          <div className="top-3 left-3 absolute">
            <Badge color="red">Giảm {discount}%</Badge>
          </div>
        )}

        {!inStock && (
          <div className="top-3 right-3 absolute">
            <Badge color="gray">Hết hàng</Badge>
          </div>
        )}
      </div>

      {/* Product information */}
      <div className="p-4">
        <h2 className="font-bold text-gray-800 text-lg">
          {name}
        </h2>

        <div className="mt-3">
          <p className="font-bold text-red-600 text-xl">
            {formatPrice(finalPrice)}
          </p>

          {discount > 0 && (
            <p className="text-gray-400 text-sm line-through">
              {formatPrice(price)}
            </p>
          )}
        </div>

        <button
          disabled={!inStock}
          onClick={() => onBuy({ id, name, finalPrice })}
          className={`w-full mt-4 py-2 rounded-lg font-semibold text-white transition ${
            inStock
              ? "bg-blue-600 hover:bg-blue-700"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          {inStock ? "Mua ngay" : "Hết hàng"}
        </button>
      </div>
    </div>
  );
}

export default ProductItem;
