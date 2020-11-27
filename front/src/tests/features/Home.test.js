import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Home from "../../features/Home/Home";

const middlewares = [];
const mockStore = configureStore(middlewares);

describe("Rendering elements", () => {
  const renderLoader = (initialState) => {
    const store = mockStore({ books: initialState, cart: { list: [] } });

    return render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
  };

  test("Renders loading info", () => {
    const { getByText } = renderLoader({ loading: true });
    const message = getByText(/loading/i);
    expect(message).toBeInTheDocument();
  });

  test("Renders error info", () => {
    const { getByText } = renderLoader({ error: true });
    const message = getByText(/error/i);
    expect(message).toBeInTheDocument();
  });

  test("Renders list", () => {
    const list = {
      data: {
        data: [
          {
            author: "Author 1",
            cover_url: "cover_url",
            currency: "PLN",
            id: 101,
            pages: 999,
            price: 9000,
            title: "Title 1",
          },
          {
            author: "Author 2",
            cover_url: "cover_url",
            currency: "PLN",
            id: 102,
            pages: 999,
            price: 9000,
            title: "Title 2",
          },
        ],
        metadata: { total_records: 17 },
      },
    };

    const { getByText } = renderLoader(list);
    const firstLi = getByText("Author 1");
    const secondLi = getByText("Author 2");
    expect(firstLi && secondLi).toBeInTheDocument();
  });
});
