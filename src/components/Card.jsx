import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/slices/CartSlice";
import toast from "react-hot-toast";

const Card = ({ shoe }) => {
  const { cart } = useSelector((state) => state);

  const img = shoe.original_picture_url;
  const price = shoe.retail_price_cents;
  const desc = shoe.story_html;

  const dispatch = useDispatch();

  const add = () => {
    dispatch(addToCart(shoe));
    toast.success("Added to cart");
  };

  const remove = (itemIdx) => {
    dispatch(removeFromCart(itemIdx));
    toast.error("Removed item from cart");
  };

  return (
    <div className="w-[300px] h-[420px] shadow-sm rounded-2xl p-4 bg-slate-50 border border-slate-100 outline outline-slate-100 hover:shadow-2xl ">
      <div className=" flex flex-col gap-6">
        <img
          src={img}
          width={200}
          height={200}
          alt="shoe"
          className="mx-auto"
        />
        <p className="text-base font-medium max-h-[96px] overflow-y-hidden">
          {desc.split(" ").slice(0, 20).join(" ") + "..."}
        </p>
        <div className="flex  items-center justify-between">
          {cart.some((item) => item.id === shoe.id) ? (
            <button
              onClick={() => remove(shoe.id)}
              className="bg-red-400 text-white p-2 rounded-md text-sm "
            >
              Remove Item
            </button>
          ) : (
            <button
              onClick={add}
              className="bg-black text-white p-2 rounded-md text-sm "
            >
              Add to Cart
            </button>
          )}
          <span className="text-xl font-semibold">₹ {price}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
