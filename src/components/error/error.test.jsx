// Generated with util/create-component.js

import React from "react";
import { render } from "@testing-library/react";

import Error from "../error";

describe("Error", () => {

  beforeEach(() => {
    props = {

    };
  });

  const renderComponent = () => render(<Error {...props} />);

  it("should render correctly", () => {
    // Arrange

    // Act
    const { getByTestId } = renderComponent();

    // Assert
    const component = getByTestId("error");
    expect(component).toBeDefined();
  });
});

