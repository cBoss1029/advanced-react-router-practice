import React from "react";

function Marquee(props) {
  const message = "hello";
  return (   
    <marquee>{props.match.params.text}</marquee>
  );
}

export default Marquee;
