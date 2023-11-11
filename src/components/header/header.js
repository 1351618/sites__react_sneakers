import React, { useState, useContext, useEffect } from "react";
import ShoeSvg from "./shoe_icon.svg";
import CartSvg from "./cart.svg";
import UserSvg from "./user.svg";
import Drawer from "../drawer/drawer";
import HeartSvg from "./heart.svg";
import AtomicSvg from "./atomic_987o0ti74d8x.svg";
import { MainContext } from "../../context/MainContext";


function Header() {
  const { inFavorites, inBtnAdd, SectionDisplay } = useContext(MainContext);

  const [isOnOffDdrawer, useOnOffDdrawer] = useState(false);

  function OnDdrawer() {
    useOnOffDdrawer(true);
  }
  function OffDdrawer() {
    useOnOffDdrawer(false);
  }

  return (
    <div className="header">
      <div className="made-with-react">
        <img src={AtomicSvg}></img>
        <p>
          made
          <br />
          with
          <br />
          react
        </p>
      </div>

      <div
        className="headerLeft cp"
        onClick={() => {
          SectionDisplay("window__app");
        }}
      >
        <img src={ShoeSvg} alt="ShoeIcon" style={{ width: 40, height: 40 }} />

        <div className="headerInfo">
          <h3>React Sneakers</h3>
          <p>Магазин лучших кроссовок</p>
        </div>
      </div>

      <ul className="headerRight">
        <li className={` ${inFavorites.length > 0 ? "" : "hidden"}`}>
          <button
            onClick={() => {
              SectionDisplay("window__featured-products");
            }}
          >
            <img src={HeartSvg} alt="ShoeIcon" />
          </button>
        </li>
        <li>
          <button onClick={() => OnDdrawer()}>
            <b className={`${inBtnAdd.length > 0 ? "" : "hidden"}`}>
              {inBtnAdd.length}
            </b>
            <img src={CartSvg} alt="ShoeIcon" />
          </button>
        </li>

        <li>
          <span>1205 руб.</span>
        </li>
        <li>
          <img src={UserSvg} alt="ShoeIcon" style={{ width: 18, height: 18 }} />
        </li>
      </ul>

      <div
        className={`drawer-widows ${isOnOffDdrawer === false ? "hidden" : ""}`}
      >
        <Drawer offCloseCart={() => OffDdrawer()} />
      </div>
    </div>
  );
}

export default Header;
