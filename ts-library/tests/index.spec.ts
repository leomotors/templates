import { assert } from "chai";

import { hello } from "../src";

describe("Test Index", () => {
    it("hello should returns Hello World", () => {
        assert.equal(hello(), "Hello World!");
    });
});
