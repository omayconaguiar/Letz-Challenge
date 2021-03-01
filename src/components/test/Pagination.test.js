import React from "react";
import Pagination from "../Pagination";
import ReactDOM from "react-dom";

test("renders Pagination", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Pagination/>, div);
});

