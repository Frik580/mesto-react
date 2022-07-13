import React from "react";

function Header() {
  return (
    <header className="header">
      <a href="#" className="header__logo hover"></a>
    </header>
  );

};

export default React.memo(Header);
