// Generated with util/create-component.js

import React from "react";
import { render } from "@testing-library/react";

import SelectField from "../select-field";

describe("SelectField", () => {

  beforeEach(() => {
    props = {

    };
  });

  const renderComponent = () => render(<SelectField {...props} />);

  it("should render correctly", () => {
    // Arrange

    // Act
    const { getByTestId } = renderComponent();

    // Assert
    const component = getByTestId("select-field");
    expect(component).toBeDefined();
  });
});

