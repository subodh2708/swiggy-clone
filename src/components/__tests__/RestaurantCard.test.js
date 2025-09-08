import { render, screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/RestaurantCardMock.json";
import "@testing-library/jest-dom";
import RestaurantCard from "../RestaurantCard";

it("should render RestaurantCard component", () => {
  render(<RestaurantCard restData={MOCK_DATA} />);
  const restname = screen.getByText("KFC");

  expect(restname).toBeInTheDocument();
});
