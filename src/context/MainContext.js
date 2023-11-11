// todo MainContext.js  файл сборщик контекстов

import React, { createContext, useState, useEffect } from "react";

export const MainContext = createContext();

export const MainProvider = ({ children }) => {
  const [inFavorites, setInFavorites] = useState(GetLocStorArr("favorites"));
  const [inBtnAdd, setInBtnAdd] = useState(GetLocStorArr("drawer"));
  const [inSectionDisplay, setSectionDisplay] = useState(
    localStorage.getItem("DisplayName") || "window__app"
  );

  function GetLocStorArr(StorageName) {
    const favoritesString = localStorage.getItem(StorageName);
    return favoritesString ? JSON.parse(favoritesString) : [];
  }

  useEffect(() => {
    const stringVariable = JSON.stringify(inBtnAdd);
    localStorage.setItem("drawer", stringVariable);
  }, [inBtnAdd]);

  useEffect(() => {
    const stringVariable = JSON.stringify(inFavorites);
    localStorage.setItem("favorites", stringVariable);
  }, [inFavorites]);

  const updateFavorites = (data) => {
    if (inFavorites.some((item) => item.id === data.id)) {
      setInFavorites((prevFavorites) =>
        prevFavorites.filter((item) => item.id !== data.id)
      );
    } else {
      setInFavorites((prevFavorites) => [...prevFavorites, data]);
    }
  };

  const updateInBtnAdd = (data) => {
    if (inBtnAdd.some((item) => item.id === data.id)) {
      setInBtnAdd((prevAdd) => prevAdd.filter((item) => item.id !== data.id));
    } else {
      setInBtnAdd((prevAdd) => [...prevAdd, data]);
    }
  };

  const SectionDisplay = (DisplayName) => {
    setSectionDisplay(DisplayName);
    localStorage.setItem("DisplayName", DisplayName);
  };

  return (
    <MainContext.Provider
      value={{
        inFavorites,
        updateFavorites,
        inBtnAdd,
        updateInBtnAdd,
        inSectionDisplay,
        SectionDisplay,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
