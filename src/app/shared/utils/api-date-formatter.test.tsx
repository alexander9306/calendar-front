import APIDateFormatter from "./api-date-formatter";

describe("API Date Formatter", () => {
  const inistialDateString = new Date("2020-10-22T15:37:25.165Z");
  test("Verify date goes up by 1 when calling isLessThan", () => {
    const dateFormatter = new APIDateFormatter(inistialDateString);
    const dateNumber = dateFormatter.isLessThan().getDate().getDate();

    expect(dateNumber).toBe(23);
  });
  test("Verify date after calling toISOString is the same", () => {
    const dateFormatter = new APIDateFormatter(inistialDateString);
    const date = new Date(dateFormatter.toISOString()).toISOString();

    expect(date).toBe("2020-10-22T15:37:25.165Z");
  });
});
