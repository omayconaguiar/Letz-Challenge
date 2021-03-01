import React from "react";
import {LeftArrow, RightArrow} from "../ArrowsSvg";
import ReactDOM from "react-dom";

test("renders LeftArrow", () => {
    const div = document.createElement("div");
    ReactDOM.render(<LeftArrow/>, div);
});

test("renders RightArrow", () => {
    const div = document.createElement("div");
    ReactDOM.render(<RightArrow/>, div);
});