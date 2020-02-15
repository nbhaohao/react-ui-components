import React from "react";
import { shallow } from "enzyme";
import TestRenderer from "react-test-renderer";
import Icon from "../index";

describe("Icon", () => {
  it("render successfully", () => {
    const icon = TestRenderer.create(<Icon name="wechat" />).toJSON();
    expect(icon).toMatchSnapshot();
  });
  it("onClick", () => {
    const fakeFn = jest.fn();
    const wrapper = shallow(<Icon onClick={fakeFn} name="wechat" />);
    wrapper.find("svg").simulate("click");
    expect(fakeFn).toBeCalledTimes(1);
  });
});
