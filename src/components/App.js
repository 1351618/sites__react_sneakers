// App.tsx

import React, { useState, useEffect, useContext } from "react";
import CardProduct from "./card_product/CardProduct";
import Header from "./header/header";
import SearchSvg from "./search.svg";
import { MainContext } from "../context/MainContext";
import PlacingAnOrder from "../section/placing_an_order/placing_an_order";
import FeaturedProducts from "../section/featured_products/featured_products";

function App() {
  const { inSectionDisplay } = useContext(MainContext);
  const [sneakersData, setSneakersData] = useState([]);
  const [inSearchValue, setSearchValue] = useState("");

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    fetch(
      // log GitHub
      "https://651fd823906e276284c39af0.mockapi.io/api/miscellaneous/sneakersData"
    )
      .then((res) => res.json())
      .then((data) => {
        setSneakersData(data[0]);
      });
  }, []);

  return (
    <div className="App">
      <Header />

      <div className="content">
        {/* ========================================================= */}
        {/* ! секция 1 ============================================== */}
        {/* ========================================================= */}

        <div
          className={`window-app ${
            inSectionDisplay === "window__app" ? "" : "hidden"
          }`}
        >
          <div className="content_titl-search">
            {inSearchValue === "" ? (
              <h1>Все кроссовки</h1>
            ) : (
              <h1>Поиск по запросу: {inSearchValue}</h1>
            )}
            <div className="search-block">
              <img
                src={SearchSvg}
                alt="ShoeIcon"
                style={{ width: 20, height: 20 }}
              />
              <input placeholder="Поиск...." onChange={onChangeSearchInput} />
            </div>
          </div>

          <div className="product-gallery">
            {sneakersData
              .filter((value) =>
                value.title.toLowerCase().includes(inSearchValue.toLowerCase())
              )
              .map((value) => (
                <CardProduct
                  key={value.id}
                  id={value.id}
                  imgURL={value.imgURL}
                  title={value.title}
                  price={value.price}
                />
              ))}
          </div>
        </div>

        {/* ========================================================= */}
        {/* ! секция 2 ============================================== */}
        {/* ========================================================= */}

        <div
          className={`window-placing-an-order ${
            inSectionDisplay === "window__placing-an-order" ? "" : "hidden"
          }`}
        >
          <PlacingAnOrder />
        </div>

        {/* ========================================================= */}
        {/* ! секция 3 ============================================== */}
        {/* ========================================================= */}
        <div
          className={`window-featured-products  ${
            inSectionDisplay === "window__featured-products" ? "" : "hidden"
          }`}
        >
          <FeaturedProducts />
        </div>
      </div>
    </div>
  );
}

export default App;
