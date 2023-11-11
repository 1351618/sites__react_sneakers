// todo placing_an_order.js

import React, { useContext, useEffect, useState } from "react";
import DeleteSVG from "./delete_ekhgbr1m69ep.svg";
import emptiBoxSVG from "./box.svg";

import { MainContext } from "../../context/MainContext";

function PlacingAnOrder() {
  const { inBtnAdd, updateInBtnAdd, SectionDisplay } = useContext(MainContext);
  const [isTotal, setTotal] = useState(0);

  useEffect(() => {
    const total = inBtnAdd.reduce((ac, val) => {
      return parseInt(val.price.replace(/\D/g, "")) + ac;
    }, 0);

    setTotal(total);
  }, [inBtnAdd]);

  function dilite(value) {
    updateInBtnAdd(value);
  }

  return (
    <div className="placing-an-order">
      <div>
        <div className="p-a-o__info">
          <h1>Оформить заказ</h1>
          <div className="p-a-o__total">
            <div>
              <p>Итого</p>
              <span></span>
              <b>{isTotal.toLocaleString()}</b>
            </div>
            <div>
              <p>Налог_5%</p>
              <span></span>
              <b>{(isTotal + (isTotal * 5) / 100).toLocaleString()}</b>
            </div>
          </div>
          <button
            className={`p-a-o__pay btn-Green ${isTotal > 0 ? "" : "btn-off"}`}
          >
            Оплатить
          </button>
        </div>

        <div className="p-a-o__content">
          {inBtnAdd.length > 0 ? (
            <div className="p-a-o__cards">
              {inBtnAdd.map((value) => {
                return (
                  <div className="card-product" key={value.id}>
                    <img src={"./image/" + value.imgURL} alt="ImageBoots"></img>
                    <p>{value.title}</p>
                    <div className="content__price">
                      <div>
                        <span>Цена</span>
                        <b>{value.price}</b>
                      </div>

                      <button
                        className="card-product__delite cp"
                        onClick={() => {
                          dilite(value);
                        }}
                      >
                        <img
                          src={DeleteSVG}
                          style={{ height: "20px", width: "20px" }}
                        />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="p-a-o__empti-box">
              <h1>Tоваров нет</h1>
              <h3>
                Добавьте хотябы одну пару кросовок,
                <br /> чтобы сделать заказ.
              </h3>
              <img src={emptiBoxSVG}></img>
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

export default PlacingAnOrder;
