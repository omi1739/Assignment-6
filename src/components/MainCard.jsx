import React, { use } from "react";
import DataCard from "./DataCard";

const MainCard = ({ dataPromice, carts, setCarts }) => {
  const datas = use(dataPromice);

  return (
    <div>
      <div className="text-center mt-20">
        <h1 className="text-5xl font-semibold">Premium Digital Tools</h1>
        <p className="mt-5 text-xm">
          Choose from our curated collection of premium digital products
          designed <br /> to boost your productivity and creativity.
        </p>
      </div>

      <div className="container w-[90%] grid mx-auto grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10 mt-10">
        {datas.map((card) => (
         <DataCard key={card.id} card={card} carts={carts} setCarts={setCarts}/>
        ))}
      </div>
    </div>
  );
};

export default MainCard;
