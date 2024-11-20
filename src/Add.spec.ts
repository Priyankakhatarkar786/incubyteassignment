import { describe, it, expect } from "vitest";
import add from "./Add";

describe("first", () => {
  it("expect addition of two numbers to be correct", () => {
    expect(add(2,2)).toBe(4);
  });
});
