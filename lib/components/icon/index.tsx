import React from "react";
import "@utils/importIcons";
import "./index.scss";
import { classes } from "@utils/classes";

interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string;
}

const Index: React.FC<IconProps> = ({ name, className, ...svgAttributes }) => {
  return (
    <svg className={classes("react-ui-icon", className)} {...svgAttributes}>
      <use xlinkHref={`#${name}`} />
    </svg>
  );
};

export default Index;
