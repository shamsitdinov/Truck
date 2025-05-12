import React, { useEffect, useState } from "react";
import { trucks } from "../data";
import Logo from "../assets/logo.png";
import Labo from "../assets/labo.png";
import Bongo from "../assets/bongo.png";
import Changan from "../assets/changan.png";
import Zil from "../assets/zil-Photoroom.png";
import Gaz from "../assets/53-Photoroom.png";

const Cards = () => {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    setCars(trucks);
  }, []);

  const selectType = (type) => {
    if (type === "all") {
      setCars(trucks);
    } else {
      let newTrucks = trucks.filter((item) => item.model === type);
      setCars(newTrucks);
    }
  };

  return (
    <div className="py-8 w-[90vw] my-0 mx-auto">
      <div className="flex max-sm:flex-wrap mb-6 items-center gap-10 ">
        <div onClick={() => selectType("all")} className="cursor-pointer flex flex-col items-center gap-2 border-gray-400 border-2 hover:border-gray-800 border-bold p-2 rounded-md duration-300 bg-gray-400">
          <p className="text-center">Barcha yuk mashinalari</p>
        </div>
        <div className="flex gap-3 max-sm:overflow-auto w-full ">
          <div onClick={() => selectType("Labo")} className="cursor-pointer flex flex-col items-center gap-2 border-gray-400 border-2 hover:border-gray-800 border-bold p-2 rounded-md duration-300">
            <img className="w-20 h-10" src={Labo} alt={Labo} srcset="" />
            <p>Labo</p>
          </div>
          <div onClick={() => selectType("Changan")} className="cursor-pointer flex flex-col items-center gap-2 border-gray-400 border-2 hover:border-gray-800 border-bold p-2 rounded-md duration-300">
            <img className="w-20 h-10" src={Changan} alt={Changan} srcset="" />
            <p>Changan</p>
          </div>
          <div onClick={() => selectType("Bongo")} className="cursor-pointer flex flex-col items-center gap-2 border-gray-400 border-2 hover:border-gray-800 border-bold p-2 rounded-md duration-300">
            <img className="w-20 h-10" src={Bongo} alt={Bongo} srcset="" />
            <p>Bongo</p>
          </div>
          <div onClick={() => selectType("Zil")} className="cursor-pointer flex flex-col items-center gap-2 border-gray-400 border-2 hover:border-gray-800 border-bold p-2 rounded-md duration-300">
            <img className="w-20 h-10" src={Zil} alt={Zil} srcset="" />
            <p>Zil</p>
          </div>
          <div onClick={() => selectType("Gaz 53")} className="cursor-pointer flex flex-col items-center gap-2 border-gray-400 border-2 hover:border-gray-800 border-bold p-2 rounded-md duration-300">
            <img className="w-20 h-10" src={Gaz} alt={Gaz} srcset="" />
            <p>Gaz 53</p>
          </div>
        </div>
      </div>
      <div className="min-h-[75vh] grid grid-cols-4  gap-4 max-md:grid-cols-2 max-lg:grid-cols-3">
        {cars.map((item, index) => (
          <div className="hover:shadow-gray-400 duration-300  cursor-pointer shadow-gray-300 p-4 rounded-lg hover:scale-[1.01] max-md:min-h-[35vh] max-h-[38vh] text-sm shadow-[inset_-12px_-8px_40px_#46464620]" key={index}>
            <img src={item.img} className="w-40 h-20" alt="" srcset="" />
            <h2>Haydovchi ismi: {item.driver}</h2>
            <p>Mashina raqami: {item.number}</p>
            <p>Telefon raqami: {item.phone}</p>
            <p>Chegaralangan yuk og'irligi: {item.maxWeight}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
