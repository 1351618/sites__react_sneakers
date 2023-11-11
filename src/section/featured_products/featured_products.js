// todo featured_products.js

import React, { useContext } from "react";
import HurtSVG from "./hurt_mlcy980odrej.svg";
import HeartSvg from "./heart.svg";
import PlusSvg from "./plus.svg";
import CheckmarkSvg from "./checkmark.svg";

import { MainContext } from "../../context/MainContext";

function FeaturedProducts() {
  const {
    inFavorites,
    updateFavorites,
    inBtnAdd,
    updateInBtnAdd,
    SectionDisplay,
  } = useContext(MainContext);

  const onClickToFavorites = (value) => {
    updateFavorites(value);
  };

  const onClickPlus = (value) => {
    updateInBtnAdd(value);
  };

  return (
    <div className="featured-products">
      <div>
        <div className="featured-products__titel">
          <h1>Избранные товары</h1>
        </div>

        <div className="featured-products__content">
          {inFavorites.length > 0 ? (
            <div className="p-a-o__cards">
              {inFavorites.map((value) => {
                return (
                  <div className="card-product" key={value.id}>
                    {/* ============================================== */}

                    <button
                      onClick={() => {
                        onClickToFavorites(value);
                      }}
                    >
                      <img
                        src={HeartSvg}
                        alt="ShoeIcon"
                        style={{ width: 20, height: 20 }}
                      />
                    </button>

                    {/* ============================================== */}
                    <img src={"./image/" + value.imgURL} alt="ImageBoots"></img>
                    <p>{value.title}</p>
                    <div className="content__price">
                      <div>
                        <span>Цена</span>
                        <b>{value.price}</b>
                      </div>
                      <button
                        onClick={() => {
                          onClickPlus(value);
                        }}
                      >
                        {inBtnAdd.find((item) => item.id === value.id) ? (
                          <img
                            src={CheckmarkSvg}
                            alt="ShoeIcon"
                            style={{ width: 100, height: 100 }}
                          />
                        ) : (
                          <img
                            src={PlusSvg}
                            alt="ShoeIcon"
                            style={{ width: 12, height: 12 }}
                          />
                        )}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="p-a-o__empti-box">
              <h1>У вас пока нет избранного товара</h1>
              <h3>
                Добавьте хотя бы одну пару кроссовок
                <br /> в избранные.
              </h3>
              <img src={HurtSVG}></img>
              <button
                className="btn-Green"
                onClick={() => {
                  SectionDisplay("window__app");
                }}
              >
                Перейти в магазин
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default FeaturedProducts;
