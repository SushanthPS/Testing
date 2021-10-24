import { Button } from "./Button";
import { render, fireEvent, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);
it("should be rendered correctly", () => {
    render(<Button />);
    // screen.debug();
    // expect(screen).toBeInTheDocument();
});

// it("label test", () => {
//     const { getByTestId } = render(<Button />);
//     const button = getByTestId("button");
//     expect(button).toHaveTextContent();
// });

it("button click", () => {
    const fn = jest.fn();
    const { getByTestId } = render(<Button onClick={fn} />);
    const button = getByTestId("button");
    fireEvent.click(button);
    expect(fn).toBeCalled();
});

//

it("should match snapshot", () => {
    const fn = jest.fn();
    const tree = renderer.create(<Button onClick={fn} />).toJSON();
    expect(tree).toMatchSnapshot();
});
