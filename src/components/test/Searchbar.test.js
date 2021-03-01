import React from "react";
import Searchbar from "../Searchbar";
import ReactDOM from "react-dom";

test("renders Searchbar", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Searchbar/>, div);
});

