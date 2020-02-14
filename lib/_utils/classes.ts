import { isTruthy } from "./helper";

/**
 * 合并 React 的 className
 * @param names
 */
const classes = (...names: (string | undefined)[]): string => {
  return names.filter(isTruthy).join(" ");
};

export { classes };
