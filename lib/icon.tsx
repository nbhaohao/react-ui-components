import React from "react";
import "./importIcons";
import "./icon.scss";

interface IconProps {
  name: string;
  onClick?: React.MouseEventHandler<SVGElement>;
}

const Icon: React.FC<IconProps> = props => {
  const { name, onClick } = props;
  return (
    <svg className="react-ui-icon" onClick={onClick}>
      <use xlinkHref={`#${name}`} />
    </svg>
  );
};

export default Icon;
