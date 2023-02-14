import { describe, expect, it } from "vitest";
import { render, fireEvent, getByDisplayValue } from "@testing-library/react";
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
        
        const newValueInput = getByDisplayValue("New value");
    });
});
