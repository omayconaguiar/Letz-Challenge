import React from "react";
import Navbar from "../Navbar";
import ReactDOM from "react-dom";

test("renders Navbar", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Navbar/>, div);
});

