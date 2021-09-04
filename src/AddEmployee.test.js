import React from "react";
import ReactDOM from "react-dom";
import { Employee } from "./Employee";

import {render, cleanup} from "@testing-library/react";


it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Employee />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

afterEach(cleanup);

it("renders button correctly", () => {
    const{getByTestId} = render(<Employee />);
    expect(getByTestId("addbutton")).toBeTruthy();
});
