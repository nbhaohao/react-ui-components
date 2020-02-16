import React from "react";
import "./helpers/importIcons";
import "./index.scss";
import { classes } from "@utils/classes";

interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string;
}

const Icon: React.FC<IconProps> = ({ name, className, ...svgAttributes }) => {
  return (
    <svg className={classes("react-ui-icon", className)} {...svgAttributes}>
      <use xlinkHref={`#${name}`} />
    </svg>
  );
};

export default Icon;
