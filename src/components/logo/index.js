import React from "react";

const Logo = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1141 623"
      className={props.className}
    >
      <text x="0" y="150" font-size="220" fill={props.fill} class={props.className}>BLACKS</text>
      <text x="0" y="360" font-size="220" fill={props.fill} class={props.className}>WHO</text>
      <text x="0" y="570" font-size="220" fill={props.fill} class={props.className}>ENGINEER</text>
    </svg>
  );
};

export default Logo;
