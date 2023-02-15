import React from "react";
import { describe, it } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import { Body } from "./Body";

describe("Test component Body", () => {
    it("Rendering", (a) => {
        render(<Body />);
        console.log(a);
        a.onTestFailed(() => console.error("C'est dela merde"));
    });

    it("Test input", () => {
        const { getByLabelText, getByDisplayValue } = render(<Body />);
        const textInput = getByLabelText("text-input");
        fireEvent.change(textInput, {
            target:{
                value: "New value"
            }
        });
        
        getByDisplayValue("New value");
    });
});
