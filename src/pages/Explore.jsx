import React from "react";
import Card from "../components/Card";
import { data } from "../assets/data";

const Explore = () => {
  const sneakers = data.sneakers;

  const filteredItems = sneakers.filter(
    (s) => s.retail_price_cents !== null && s.story_html !== null
  );

  const items = filteredItems.map((item) => {
    return { ...item, qty: 1 };
  });

  return (
    <div className="">
      <div className="w-full min-h-fit p-10 md:p-20 grid grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-6 lg:grid-cols-3 lg:gap-8 xl:grid-cols-4 xl:gap-10mx-auto ">
        {items.map((shoe, idx) => (
          <Card key={shoe.id} shoe={shoe} />
        ))}
      </div>
    </div>
  );
};

export default Explore;
