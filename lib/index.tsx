import React from "react";
import ReactDOM from "react-dom";
import Icon from "./icon";

ReactDOM.render(
  <div>
    <Icon name="wechat" />
    <Icon name="alipay" />
    <Icon
      name="qq"
      onClick={e => {
        console.log(e.currentTarget);
      }}
    />
  </div>,
  document.querySelector("#root")
);
