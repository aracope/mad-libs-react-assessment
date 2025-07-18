const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });

  test('formats thousands correctly', () => {
    expect(addCommas(1234)).toBe("1,234");
  });

  test('formats millions correctly', () => {
    expect(addCommas(1000000)).toBe("1,000,000");
  });

  test('formats billions correctly', () => {
    expect(addCommas(9876543210)).toBe("9,876,543,210");
  });

  test('does not add commas to single digit', () => {
    expect(addCommas(6)).toBe("6");
  });

  test('handles small negative numbers', () => {
    expect(addCommas(-10)).toBe("-10");
  });

  test('formats negative thousands correctly', () => {
    expect(addCommas(-5678)).toBe("-5,678");
  });

  // Bonus tests
  test('formats decimal numbers correctly', () => {
    expect(addCommas(12345.678)).toBe("12,345.678");
  });

  test('formats negative decimal numbers correctly', () => {
    expect(addCommas(-3141592.65)).toBe("-3,141,592.65");
  });
});
