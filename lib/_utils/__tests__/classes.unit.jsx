import { classes } from "../classes";
describe("测试 _utils/classes 函数", () => {
  it("接收一个 className", () => {
    expect(classes("foo")).toBe("foo");
  });
  it("接收一个 className 并过滤掉非 Truthy 值", () => {
    expect(classes(undefined)).toBe("");
    expect(classes(null)).toBe("");
    expect(classes(false)).toBe("");
    expect(classes("")).toBe("");
  });
  it("接收多个 className", () => {
    expect(classes("foo", "bar", "aaa")).toBe("foo bar aaa");
  });
  it("接收多个 className 并过滤掉非 Truthy 值", () => {
    expect(classes("foo", undefined, null, "bar")).toBe("foo bar");
  });
});
