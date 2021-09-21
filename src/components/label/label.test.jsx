// Generated with util/create-component.js

import React from "react";
import { render } from "@testing-library/react";

import Label from "../label";

describe("Label", () => {

  beforeEach(() => {
    props = {

    };
  });

  const renderComponent = () => render(<Label {...props} />);

  it("should render correctly", () => {
    // Arrange

    // Act
    const { getByTestId } = renderComponent();

    // Assert
    const component = getByTestId("label");
    expect(component).toBeDefined();
  });
});

