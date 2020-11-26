import { render, screen } from "@testing-library/react";
import Navbar from "../../components/Navbar";
import { MemoryRouter, useLocation } from "react-router-dom";

describe("Title rendering", () => {
  const initialEntries = ["/", "/cart", "/order"];

  const renderNavbar = (idx) => {
    return render(
      <MemoryRouter initialEntries={initialEntries} initialIndex={idx}>
        <Navbar />
      </MemoryRouter>
    );
  };

  test("Renders 'home' title at '/' path", () => {
    const { getByRole } = renderNavbar(0);
    const title = getByRole("heading", { level: 2 });
    expect(title).toHaveTextContent("home");
  });

  test("Renders 'cart' title at '/cart' path", () => {
    const { getByRole } = renderNavbar(1);
    const title = getByRole("heading", { level: 2 });
    expect(title).toHaveTextContent("cart");
  });

  test("Renders 'order' title at '/order' path", () => {
    const { getByRole } = renderNavbar(2);
    const title = getByRole("heading", { level: 2 });
    expect(title).toHaveTextContent("order");
  });
});

describe("Page navigation", () => {
  const LocationDisplay = () => {
    const location = useLocation();

    return <div data-testid="location-display">{location.pathname}</div>;
  };

  const RenderLocation = () =>
    render(
      <>
        <Navbar />
        <LocationDisplay />
      </>,
      { wrapper: MemoryRouter }
    );

  test("Cart link directs to cart page", () => {
    const { getByRole } = RenderLocation();
    const link = getByRole("link", { name: "Cart" });

    link.click();

    expect(screen.getByTestId("location-display")).toHaveTextContent("/cart");
  });

  test("Home link directs to home page", () => {
    const { getByRole } = RenderLocation();
    const cartLink = getByRole("link", { name: "Cart" });
    const homeLink = getByRole("link", { name: "Home" });

    cartLink.click();
    homeLink.click();

    expect(screen.getByTestId("location-display")).toHaveTextContent("/");
  });
});
