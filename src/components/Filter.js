import React, { useEffect } from "react";

const Filter = ({ setActiveCategory, activeCategory, setFiltered, data }) => {
  useEffect(() => {
    if (activeCategory === "all") {
      setFiltered(data);
      return;
    }
    const filtered = data.filter((movie) =>
      movie.category.includes(activeCategory)
    );
    setFiltered(filtered);
  }, [activeCategory]);
  return (
    <div className='p-[8px] rounded-[15px] border-none cursor-pointer bg-[#fff] text-[#fff]' >
      <button
        className={activeCategory === "all" ? "active" : ""}
        onClick={() => setActiveCategory("all")}
      >
        All
      </button>
      <button
        className={activeCategory === "smartphones" ? "active" : ""}
        onClick={() => setActiveCategory("smartphones")}
      >
        Smart Phone
      </button>
      <button
        className={activeCategory === "laptops" ? "active" : ""}
        onClick={() => setActiveCategory("laptops")}
      >
        Laptop
      </button>
      <button
        className={activeCategory === "fragrances" ? "active" : ""}
        onClick={() => setActiveCategory("fragrances")}
      >
        Fragrances
      </button>
      <button
        className={activeCategory === "skincare" ? "active" : ""}
        onClick={() => setActiveCategory("skincare")}
      >
        Skin Care
      </button>
      <button
        className={activeCategory === "groceries" ? "active" : ""}
        onClick={() => setActiveCategory("groceries")}
      >
        Groceries
      </button>
      <button
        className={activeCategory === "home-decoration" ? "active" : ""}
        onClick={() => setActiveCategory("home-decoration")}
      >
        Home Decoration
      </button>
    </div>
  );
};

export default Filter;

