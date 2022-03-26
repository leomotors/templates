import { hello } from "../src";

import { output } from "./sample.json";

describe("Test Index", () => {
    it("hello should returns Hello World", () => {
        expect(hello()).toBe(output);
    });
});
