import { Counter } from "./Counter";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

it("should have default value as 0", () => {
    const { getByTestId } = render(<Counter />);
    const countValue = getByTestId("count");
    expect(countValue).toHaveTextContent(0);
});

it("get all buttons", () => {
    const { getAllByTestId } = render(<Counter />);
    const [inc, dec] = getAllByTestId("button");
    expect(inc).toHaveTextContent("increment");
    expect(dec).toHaveTextContent("decrement");
});

it("expect incremented value and decremented value", () => {
    const { getAllByTestId } = render(<Counter />);
    const [inc, dec] = getAllByTestId("button");
    const [countValue] = getAllByTestId("count");
    expect(countValue).toHaveTextContent(0);
    fireEvent.click(inc);
    fireEvent.click(inc);
    fireEvent.click(dec);
    expect(countValue).toHaveTextContent(1);
});
