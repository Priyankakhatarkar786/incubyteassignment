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

  it("expect on passing different delimeter it should return correct value", () => {
    expect(add("2_5_6", "_")).toBe(13);
  });

  it("expect if negative numbers are passed, it should throw an exception `negative numbers not allowed`", () => {
    expect(() => add("2,-4")).toThrowError("negative numbers not allowed");
  })
});
