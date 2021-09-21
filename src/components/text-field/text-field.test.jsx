// Generated with util/create-component.js

import React from "react";
import { render } from "@testing-library/react";

import TextField from "../text-field";

describe("TextField", () => {

  beforeEach(() => {
    props = {

    };
  });

  const renderComponent = () => render(<TextField {...props} />);

  it("should render correctly", () => {
    // Arrange

    // Act
    const { getByTestId } = renderComponent();

    // Assert
    const component = getByTestId("text-field");
    expect(component).toBeDefined();
  });
});

