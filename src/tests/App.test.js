import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import App from "../App.js";

import ShallowRenderer from "react-test-renderer/shallow";

it("renders app.js correctly", () => {
  const renderer = new ShallowRenderer();
  renderer.render(<App />);
  const view = renderer.getRenderOutput();

  expect(view).toMatchSnapshot();
});
