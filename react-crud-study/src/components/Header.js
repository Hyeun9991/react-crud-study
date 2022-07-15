import React from "react";

function Header(props) {
  console.log('props', props.title);
  return (
    <header>
      <h1>
        <a href="/">{props.title}</a>
      </h1>
    </header>
  );
}

export default Header;
