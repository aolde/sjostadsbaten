import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders content on page", () => {
    render(<App />);
    screen.getByText(/Sjöstadsbåten/i);
    screen.getByText(/Lumabryggan/i);
});
