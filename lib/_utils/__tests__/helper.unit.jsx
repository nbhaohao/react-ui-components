import { isTruthy } from "@utils/helper";

describe("测试 helper 文件的函数", () => {
  it("isTruthy 接收 Truthy 值返回 true", () => {
    expect(isTruthy(true)).toBe(true);
    expect(isTruthy("1")).toBe(true);
    expect(isTruthy("0")).toBe(true);
    expect(isTruthy({})).toBe(true);
  });
  it("isTruthy 接收 falsy 值返回 false", () => {
    expect(isTruthy(0)).toBe(false);
    expect(isTruthy(false)).toBe(false);
    expect(isTruthy(undefined)).toBe(false);
    expect(isTruthy(null)).toBe(false);
    expect(isTruthy("")).toBe(false);
  });
});
