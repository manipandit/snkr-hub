import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/slices/CartSlice";
import toast from "react-hot-toast";

const PreviewCard = ({ shoe }) => {
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const add = () => {
    const shoeInCart = cart.some((item) => item.id === shoe.id);
    if (shoeInCart) {
      toast.error("You've Already Added This Item");
    } else {
      dispatch(addToCart(shoe));
      toast.success("Added to cart");
    }
  };

  const img = shoe.original_picture_url;
  const price = shoe.retail_price_cents;
  const desc = shoe.story_html;
  const name = shoe.name;
  const brand = shoe.brand_name;
  const gender = shoe.gender[0];

  // const sizeRange = shoe.size_range.sort((a, b) => a - b);
  // const sizes = sizeRange.filter((size) => Math.floor(size) === size);

  // // console.log(sizes);

  return (
    <div>
      <main className="grid place-items-center min-h-[1300px] md:min-h-screen bg-gray-50 dark:bg-[#121212]">
        <section className="flex flex-col md:flex-row gap-11 py-10 px-5 bg-white dark:bg-[#1f1b24] dark:hover:bg-[#121015]  rounded-xl shadow-xl hover:shadow-2xl  w-3/4 md:max-w-2xl">
          <div className="text-gray-500 dark:text-white flex flex-col justify-between">
            <img
              src={img}
              alt="shoe"
              className="mx-auto md:h-[350px] md:w-[350px] object-cover"
            />
            <div className="">
              <small className="uppercase">choose size</small>
              <div className="flex flex-wrap md:flex-nowrap gap-1">
                <a
                  href="#"
                  className="grid place-items-center border px-3 py-2 hover:bg-gray-500 hover:text-white transition"
                >
                  <small>5</small>
                </a>
                <a
                  href="#"
                  className="grid place-items-center border px-3 py-2 cursor-not-allowed text-gray-300 transition"
                >
                  <small>6</small>
                </a>
                <a
                  href="#"
                  className="grid place-items-center border px-3 py-2 hover:bg-gray-500 hover:text-white transition"
                >
                  <small>7</small>
                </a>
                <a
                  href="#"
                  className="grid place-items-center border px-3 py-2 cursor-not-allowed text-gray-300 transition"
                >
                  <small>8</small>
                </a>
                <a
                  href="#"
                  className="grid place-items-center border px-3 py-2 cursor-not-allowed text-gray-300 transition"
                >
                  <small>9</small>
                </a>
                <a
                  href="#"
                  className="grid place-items-center border px-3 py-2 hover:bg-gray-500 hover:text-white transition"
                >
                  <small>10</small>
                </a>
                <a
                  href="#"
                  className="grid place-items-center border px-3 py-2 hover:bg-gray-500 hover:text-white transition"
                >
                  <small>11</small>
                </a>
                <a
                  href="#"
                  className="grid place-items-center border px-3 py-2 hover:bg-gray-500 hover:text-white transition"
                >
                  <small>12</small>
                </a>
              </div>
            </div>
          </div>
          <main className="text-gray-500 dark:text-white">
            <small className="uppercase">
              {gender}'s {brand}
            </small>
            <h3 className="uppercase text-black dark:text-white text-2xl font-semibold">
              {name}
            </h3>
            <h3 className="text-2xl font-semibold mb-7 dark:text-white">
              ₹ {price}
            </h3>
            <small className="text-black  dark:text-white text-sm">
              {desc}
            </small>
            <div className="flex gap-0.5 mt-4">
              <button
                id="addToCartButton"
                className="bg-[#2a2a2a] hover:bg-black focus:outline-none transition text-white uppercase px-8 py-3"
                onClick={add}
              >
                add to cart
              </button>
              <button
                id="likeButton"
                className="bg-[#2a2a2a] hover:bg-black focus:outline-none transition text-white uppercase p-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  fill="currentColor"
                  className="bi bi-suit-heart-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z" />
                </svg>
              </button>
            </div>
          </main>
        </section>
      </main>
    </div>
  );
};

export default PreviewCard;
