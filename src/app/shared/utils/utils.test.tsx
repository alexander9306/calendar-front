import { renderHook, cleanup } from "@testing-library/react-hooks";
import { dateFormatter, toCurrency, useIsMountedRef } from "./utils";

describe("Utils", () => {
  describe("dateFormatter", () => {
    const dateString = "2020-07-16T16:51:08.000Z";
    test("Verify returns value is a string", () => {
      expect(typeof dateFormatter(dateString) === "string").toBe(true);
    });
    test("Verify the day is the first given", () => {
      expect(dateFormatter(dateString).split("/")[0]).toBe("16");
    });
    test("Verify the month is the second given", () => {
      expect(dateFormatter(dateString).split("/")[1]).toBe("07");
    });
    test("Verify the year is the third given", () => {
      expect(dateFormatter(dateString).split("/")[2].split(" ")[0]).toBe(
        "2020"
      );
    });
    test("Verify the time is the fourth given", () => {
      expect(dateFormatter(dateString).split("/")[2].split(" ")[1]).toBe(
        "12:51"
      );
    });
  });

  describe("toCurrency", () => {
    describe("Verify always return a default value", () => {
      const defaultValue = "$0.00";
      test("Verify when a null is given", () => {
        expect(toCurrency(null)).toBe(defaultValue);
      });
      test("Verify when a undefined is given", () => {
        expect(toCurrency(undefined)).toBe(defaultValue);
      });
    });
    describe("Verify it always returns two zeros after the dot", () => {
      test("Verify when an interger is given", () => {
        expect(toCurrency(2)).toBe("$2.00");
      });
      test("Verify when a float with one decimal after the dot is given", () => {
        expect(toCurrency(2.2)).toBe("$2.20");
      });
      test("Verify when a float with one decimal after the dot is given and last value is 9", () => {
        expect(toCurrency(2.9)).toBe("$2.90");
      });
      test("Verify when a float with two decimal after the dot is given", () => {
        expect(toCurrency(2.54)).toBe("$2.54");
      });
      test("Verify when a float with three decimal after the dot is given", () => {
        expect(toCurrency(3.564)).toBe("$3.56");
      });
      test("Verify when a float with four decimal after the dot is given", () => {
        expect(toCurrency(3.5646)).toBe("$3.56");
      });
      test("Verify when it rounds correctly when third value after the dot is biggern than 5", () => {
        expect(toCurrency(3.567)).toBe("$3.57");
      });
      test("Verify when it rounds correctly when third value after the dot is smaller than 5", () => {
        expect(toCurrency(3.564)).toBe("$3.56");
      });
    });
    describe("Verify the comma separator is provided", () => {
      test("Verify comma is provided after 3 digits and dot is working", () => {
        expect(toCurrency(2500)).toBe("$2,500.00");
      });
      test("Verify comma is provided after 6 digits and dot is working", () => {
        expect(toCurrency(602500)).toBe("$602,500.00");
      });
      test("Verify comma is provided after 7 digits and dot is working", () => {
        expect(toCurrency(6002500)).toBe("$6,002,500.00");
      });
      test("Verify comma is provided after 8 digits and dot is working", () => {
        expect(toCurrency(60002500)).toBe("$60,002,500.00");
      });
      test("Verify comma is provided after 10 digits and dot is working", () => {
        expect(toCurrency(6000002500)).toBe("$6,000,002,500.00");
      });
    });

    describe("Verify return value when sign argument is false", () => {
      const defaultValue = "0.00";
      test("Verify when a null is  and signed is false", () => {
        expect(toCurrency(null, false)).toBe(defaultValue);
      });
      test("Verify when a undefined is  and signed is false", () => {
        expect(toCurrency(undefined, false)).toBe(defaultValue);
      });
      test("Verify when it rounds correctly when third value after the dot is smaller than 5", () => {
        expect(toCurrency(3.564, false)).toBe("3.56");
      });
    });
  });

  describe("useIsMountedRef", () => {
    test("Verify it returns true when current component is mounted", () => {
      const { result } = renderHook(() => useIsMountedRef());
      expect(result.current.current).toBe(true);
    });
    test("Verify it returns false when current component is not mounted", () => {
      const { result } = renderHook(() => useIsMountedRef());
      return cleanup().then(() => {
        expect(result.current.current).toBe(false);
      });
    });
  });
});
