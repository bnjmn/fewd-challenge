import React from "react";
import { render } from "@testing-library/react";
import CryptoScatterChart from "./ScatterChart";

test("renders the scatter plot", () => {
  const { getByText } = render(<CryptoScatterChart/>);
  const linkElement = getByText(/compare bitcoin against.../i);
  expect(linkElement).toBeInTheDocument();
});
