import React, { useState } from "react";
import "./Header.scss";
import Arrow from "../images/Arrow.svg";

function Header() {
  const buttonNumbers = [5, 6, 7, 8];
  const [choosenButton, setChoosenButton] = useState<number | undefined>(
    undefined
  );
  const [isMenu, setIsMenu] = useState(false);
  const choose = (el: number) => {
    setChoosenButton(choosenButton == el ? undefined : el);
  };
  const openMenu = () => {
    setIsMenu((prev) => !prev);
  };

  return (
    <div className="header">
      <div className="header__arrow">
        <h1>App Name</h1>
        <button className="header__arrowButton" onClick={openMenu}>
          <img src={Arrow} className={isMenu ? "header__arrowImg" : ""} />
        </button>
      </div>
      {isMenu && (
        <div className="header__gradeWrapper">
          <div className="header_grade">Grade </div>
          <div className="header__num">
            {buttonNumbers.map((el, i) => (
              <button
                className={choosenButton == el ? "choosenButton" : ""}
                onClick={() => {
                  choose(el);
                }}
                key={i}
              >
                {el}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
