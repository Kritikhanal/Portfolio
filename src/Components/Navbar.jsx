import React from "react";

const Navbar = () => {
  return (
    <header className="nav">
      <nav className="flex light-bg justify-space">
        <div className="logo white">
          <a href="/">Kritima Khanal</a>
        </div>

        <ul className="flex white">
          <li className="green">
            <a href="/">{"< Home />"}</a>
          </li>
          <li>
            <a href="/#about">About Me.</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Navbar;
