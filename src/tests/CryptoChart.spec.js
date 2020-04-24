import React from "react";
import { render } from "@testing-library/react";
import CryptoChart from "../CryptoChart";

describe("CryptoChart", () => {
  it("When given crypto data, it renders a chart", () => {

      const left = {
        color: "#d3d3d3",
        label: "whatever",
        data: [{
          price: 123.45,
          ratio: 0.0123,
          score: 5,
        }]
      }
      const right = {
        color: "color-string",
        label: "trash",
        data: [{
          price: 321.89,
          ratio: 0.321,
          score: 25,
        }]
      }
      const responsive = {
        height: 450,
        width: 1000,
      }

      const { getByText, getByTestId } = render(
        <CryptoChart cryptoLeft={left} cryptoRight={right} responsive={responsive}/>
        );

      const chart = getByTestId('crypto-chart');
      expect(chart).toContainElement(getByText(/trash/i));
  });
});
