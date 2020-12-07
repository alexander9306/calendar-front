import { renderHook, cleanup } from "@testing-library/react-hooks";
import { dateFormatter, useIsMountedRef } from "./utils";

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
