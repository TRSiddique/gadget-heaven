import React, { useState, useEffect } from "react";
import Gadget from "../Gadget/Gadget";

const Gadgets = () => {
  const [gadgets, setGadgets] = useState([]);
  const [filteredGadgets, setFilteredGadgets] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    fetch("./gadgetData.json")
      .then((res) => res.json())
      .then((data) => {
        setGadgets(data);
        setFilteredGadgets(data);
      });
  }, []);

  const handleFilter = (category) => {
    setActiveCategory(category);
    if (category === "all") {
      setFilteredGadgets(gadgets);
    } else {
      const filtered = gadgets.filter(
        (item) => item.category.toLowerCase() === category.toLowerCase()
      );
      setFilteredGadgets(filtered);
    }
  };

  return (
    <div className="px-4 py-6">
      <h2 className="text-2xl font-bold text-center my-8">
        Explore Cutting-Edge Gadgets
      </h2>

      <div className="flex flex-col lg:flex-row gap-6 w-full max-w-7xl mx-auto">
        {/* Left Side: Buttons */}
        <div className="w-full lg:w-1/4 flex flex-row lg:flex-col gap-2 lg:pr-4 justify-center lg:justify-start">
          <button
            onClick={() => handleFilter("all")}
            className={`px-4 py-2 rounded ${
              activeCategory === "all"
                ? "bg-purple-600 text-white"
                : "bg-gray-200"
            }`}
          >
            All Products
          </button>
          <button
            onClick={() => handleFilter("phone")}
            className={`px-4 py-2 rounded ${
              activeCategory === "phone"
                ? "bg-purple-600 text-white"
                : "bg-gray-200"
            }`}
          >
            Phone
          </button>
          <button
            onClick={() => handleFilter("laptop")}
            className={`px-4 py-2 rounded ${
              activeCategory === "laptop"
                ? "bg-purple-600 text-white"
                : "bg-gray-200"
            }`}
          >
            Laptop
          </button>
          <button
            onClick={() => handleFilter("watch")}
            className={`px-4 py-2 rounded ${
              activeCategory === "watch"
                ? "bg-purple-600 text-white"
                : "bg-gray-200"
            }`}
          >
            Watch
          </button>
        </div>

        {/* Right Side: Gadgets Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredGadgets.map((gadget) => (
            <Gadget key={gadget.product_id} gadget={gadget} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gadgets;
