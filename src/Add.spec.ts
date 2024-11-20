import { describe, it, expect } from "vitest";
import add from "./Add";

describe("first", () => {
  it("expect addition of two numbers to be correct", () => {
    expect(add("2,2")).toBe(4);
  });

  it("expect empty string output to be zero", () => {
    expect(add("")).toBe(0);
  });

  it("expect on passing single value in string the output will be same value", () => {
    expect(add("2")).toBe(2);
  });
});
