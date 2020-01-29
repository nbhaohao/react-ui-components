import React from "react";
import Button from "../../lib/button";
import renderer from "react-test-renderer";

test("hello", () => {
  const component = renderer.create(
    <Button>Facebook</Button>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
