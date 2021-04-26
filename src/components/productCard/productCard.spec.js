import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { ProductCard } from "./productCard";

const renderComponent = props =>
  render(
    <MemoryRouter>
      <ProductCard {...props} />
    </MemoryRouter>
  );

const onClick = jest.fn();

const props = {
  name: "black dress",
  price: 10,
  img: "basic image",
  addClick: onClick
};

describe("ProductCard", () => {
  test("renders the product card component", () => {
    const { getByTestId } = renderComponent(props);
    expect(getByTestId("product-card")).toBeInTheDocument();
  });
  test("renders product name", () => {
    const { getByTestId } = renderComponent(props);
    expect(getByTestId("product-card__name").textContent).toBe("black dress");
  });
});
