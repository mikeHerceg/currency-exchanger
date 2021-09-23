// Generated with util/create-component.js

import React from "react";
import { render } from "@testing-library/react";

import CurrencyField from "../currency-field";

describe("CurrencyField", () => {

  beforeEach(() => {
    props = {

    };
  });

  const renderComponent = () => render(<CurrencyField {...props} />);

  it("should render correctly", () => {
    // Arrange

    // Act
    const { getByTestId } = renderComponent();

    // Assert
    const component = getByTestId("currency-field");
    expect(component).toBeDefined();
  });
});

