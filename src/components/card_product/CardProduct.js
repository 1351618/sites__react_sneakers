import React, { useContext, useEffect } from "react";
import HeartSvg from "./heart.svg";
import HeartOznySvg from "./heart_ozny.svg";
import PlusSvg from "./plus.svg";
import CheckmarkSvg from "./checkmark.svg";

import { MainContext } from "../../context/MainContext";

function CardProduct(props) {
  const { inFavorites, updateFavorites, inBtnAdd, updateInBtnAdd } =
    useContext(MainContext);

  const onClickToFavorites = () => {
    updateFavorites(props);
  };

  // function onClickPlus(){
  //   updateInBtnAdd(props);
  // };

  return (
    <div className="card-product">
      {/* кнопка фаворит (сердце) */}
      <button onClick={onClickToFavorites}>
        <img
          src={
            inFavorites.find((item) => item.id === props.id)
              ? HeartSvg
              : HeartOznySvg
          }
          alt="ShoeIcon"
          style={{ width: 20, height: 20 }}
        />
      </button>

      {/* изображение товара */}
      <img src={"./image/" + props.imgURL} alt="ImageBoots" />
      <h5>{props.title}</h5>
      <div className="content__price">
        <div>
          <span>Цена:</span>
          <b>{props.price} руб.</b>
        </div>

        {/*  кнопка добавления в корзину */}
        <button
          onClick={() => {
            updateInBtnAdd(props);
          }}
        >
          {inBtnAdd.find((item) => item.id === props.id) ? (
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
}

export default CardProduct;
