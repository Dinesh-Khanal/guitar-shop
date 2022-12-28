import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";
import { Provider } from "react-redux";
import store from "../redux/store";
import { BrowserRouter as Router } from "react-router-dom";

describe("App component", () => {
  it("render cart", async () => {
    render(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    );
    const txtElement = screen.getByText(/My Cart/i);
    expect(txtElement).toBeInTheDocument();
  });
});
