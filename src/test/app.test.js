import React from "react";
import App from "../App";
import ReactDOM from "react-dom";

test("renders App", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App/>, div);
});