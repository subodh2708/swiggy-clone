import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/RestaurantListDataMock.json";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should search restaurant list for burger", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const resCardbeforeSearch = screen.getAllByTestId("resCard");
  expect(resCardbeforeSearch.length).toBe(8);

  const searchBtn = screen.getByRole("button", { name: "Search" });
  const searchInput = screen.getByTestId("searchInput");
  fireEvent.change(searchInput, { target: { value: "burger" } });

  fireEvent.click(searchBtn);

  //Screen should load 2 cards
  const resCard = screen.getAllByTestId("resCard");
  console.log(resCard);

  expect(resCard.length).toBe(1);
});
