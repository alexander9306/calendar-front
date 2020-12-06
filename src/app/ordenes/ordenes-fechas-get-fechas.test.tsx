import getFechas from "./ordenes-fechas-get-fechas";

describe("Ordendes Get Fechas", () => {
  const date = new Date();
  const today = new Date(date.getFullYear(), date.getMonth(), date.getDate());

  const lastSunday = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() - (today.getDay() || 7)
  );

  const previousSunday = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() - (today.getDay() || 7) - 7
  );
  const previosSaturday = new Date(
    previousSunday.getFullYear(),
    previousSunday.getMonth(),
    previousSunday.getDate() + 6
  );
  const thisMonth = new Date(today.getFullYear(), today.getMonth());
  const previousMonth = new Date(today.getFullYear(), today.getMonth() - 1);
  const last3Months = new Date(today.getFullYear(), today.getMonth() - 3);

  const last6Months = new Date(today.getFullYear(), today.getMonth() - 6);

  const fechas = getFechas();

  test("Verify today value is correct", () => {
    expect(today.getTime()).toBe(fechas.today.getTime());
  });

  test("Verify lastSunday value is correct", () => {
    expect(lastSunday.getTime()).toBe(fechas.lastSunday.getTime());
  });

  test("Verify previousSunday value is correct", () => {
    expect(previousSunday.getTime()).toBe(fechas.previousSunday.getTime());
  });

  test("Verify previosSaturday value is correct", () => {
    expect(previosSaturday.getTime()).toBe(fechas.previosSaturday.getTime());
  });
  test("Verify thisMonth value is correct", () => {
    expect(thisMonth.getTime()).toBe(fechas.thisMonth.getTime());
  });
  test("Verify previousMonth value is correct", () => {
    expect(previousMonth.getTime()).toBe(fechas.previousMonth.getTime());
  });
  test("Verify last3Months value is correct", () => {
    expect(last3Months.getTime()).toBe(fechas.last3Months.getTime());
  });
  test("Verify last6Months value is correct", () => {
    expect(last6Months.getTime()).toBe(fechas.last6Months.getTime());
  });
});
