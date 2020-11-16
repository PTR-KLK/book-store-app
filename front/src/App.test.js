import { render } from "@testing-library/react";
import App from "./App";

test("Renders 'Front' text", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Front/i);
  expect(linkElement).toBeInTheDocument();
});
