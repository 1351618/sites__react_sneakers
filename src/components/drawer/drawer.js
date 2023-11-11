// drawer.tsx

import React, { useState, useContext, useEffect } from "react";
import CrossSVG from "./cross.svg";
import RightArrowSVG from "./right_arrow.svg";
import LeftArrowSVG from "./left_arrow.svg";
import BoxSVG from "./box.svg";
import { MainContext } from "../../context/MainContext";

function Drawer(props) {
  const { inBtnAdd, updateInBtnAdd, SectionDisplay } = useContext(MainContext);
  const [isTotal, setTotal] = useState(0);

  useEffect(() => {
    const totalObjects = inBtnAdd.reduce((total, obj) => {
      const price = parseInt(obj.price.replace(/\D/g, ""), 10);
      return total + price;
    }, 0);
    setTotal(totalObjects);
  }, [inBtnAdd]);

  const onClickPlus = (id) => {
    updateInBtnAdd(id);
  };

  const clickOffCloseCart = () => {
    props.offCloseCart();
  };

  const checkout = () => {
    SectionDisplay("window__placing-an-order");
    props.offCloseCart();
  };

  function GoToTheStore() {
    SectionDisplay("window__app");
    props.offCloseCart();
  }

  return (
    <div className="drawer">
      <div className="drawerBlock">
        <div className="drawerBlock__exit">
          <h2>Корзина</h2>
          <button onClick={clickOffCloseCart}>
            <img
              src={CrossSVG}
              alt="CrossSVG"
              style={{ width: 12, height: 12 }}
            />
          </button>
        </div>

        <div className="drawerBlock__content">
          {inBtnAdd.length === 0 ? (
            <div className="drawerBlock__empty-cart">
              <img src={BoxSVG} alt="box" style={{ width: 150, height: 150 }} />
              <h2>Корзина пуста</h2>
              <p>Добавьте хотябы одну пару кросовок, чтобы сделать заказ.</p>
              <button className="btn-Green" onClick={GoToTheStore}>
                <img
                  src={LeftArrowSVG}
                  alt="LeftArrowSVG"
                  style={{ width: 18, height: 18 }}
                />
                Перейти в магазин
              </button>
            </div>
          ) : (
            <div className="drawerBlock__list">
              {/* ======================================== */}
              {inBtnAdd.map((foundItem) => {
                // console.log(foundItem);
                return (
                  <div className="cartItem" key={foundItem.id}>
                    <img src={`./image/${foundItem.imgURL}`} />
                    <div>
                      <p>{foundItem.title}</p>
                      <b>{foundItem.price}</b>
                    </div>
                    <button onClick={() => onClickPlus(foundItem)}>
                      <img
                        src={CrossSVG}
                        alt="CrossSVG"
                        style={{ width: 12, height: 12 }}
                      />
                    </button>
                  </div>
                );
              })}

              {/* ======================================== */}
            </div>
          )}

          <div className="result">
            <div className="price-container">
              <p>Итого:</p>
              <span></span>
              <b>{isTotal.toLocaleString()} руб.</b>
            </div>
            <div className="price-container">
              <p>Налог 5%:</p>
              <span></span>
              <b>{(isTotal + (isTotal * 5) / 100).toLocaleString()} руб.</b>
            </div>
            <button
              className={`btn-Green ${inBtnAdd.length > 0 ? "" : "btn-off"}`}
              onClick={checkout}
            >
              Оформить заказ
              <img
                src={RightArrowSVG}
                alt="RightArrowSVG"
                style={{ width: 18, height: 18 }}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
