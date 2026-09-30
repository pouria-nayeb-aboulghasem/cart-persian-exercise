import type { CartItemType } from "@/types/cartItem";
import { RiAddLine, RiDeleteBin6Line, RiSubtractLine } from "@remixicon/react";
import { priceFormatter } from "@/utils/price";

type CartItemProps = {
  item: CartItemType;
  handleIncrement: (id: number) => void;
  handleDecrement: (id: number, quantity: number) => void;
};

function CartItem({ item, handleIncrement, handleDecrement }: CartItemProps) {
  const { id, image, title, feature, quantity, price } = item;

  return (
    <li className="grid md:grid-cols-4 gap-3 items-center py-4 cart-item relative">
      <figure>
        <img
          src={`/src/assets/${image}`}
          alt={`${title}`}
          width="128"
          height="91"
          className="rounded-lg"
        />
      </figure>

      <div>
        <p className="font-bold">{title}</p>
        {feature ? <p className="text-gray-400">{feature}</p> : ""}
      </div>

      <div className="flex gap-2 items-center md: justify-self-center order-2 md:order-1">
        <button
          onClick={() => handleIncrement(id)}
          className="w-8 h-8 flex justify-center items-center rounded-lg bg-gray-200 cursor-pointer"
        >
          <RiAddLine size={16} />
        </button>

        <span>{quantity.toLocaleString("fa-IR")}</span>

        <button
          onClick={() => handleDecrement(id, quantity)}
          className="w-8 h-8 flex justify-center items-center rounded-lg bg-gray-200 cursor-pointer"
        >
          {quantity === 1 ? (
            <RiDeleteBin6Line size={16} color="red" />
          ) : (
            <RiSubtractLine size={16} />
          )}
        </button>
      </div>

      <div className="order-1 md:order-2">{priceFormatter(price)} تومان</div>
    </li>
  );
}

export default CartItem;
