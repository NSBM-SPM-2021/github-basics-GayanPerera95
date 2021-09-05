import React from "react";
import ReactDOM from "react-dom";
import { Employee } from "./Employee";

import {render, cleanup, screen} from "@testing-library/react";


it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Employee />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

afterEach(cleanup);

it("renders button correctly", () => {
    render(<Employee />);
    expect(screen.queryByTestId("addbutton")).toBeDefined();
    expect(screen.queryByTestId('deletebutton')).toBeDefined();
});
