import getFechas from "./ordenes-fechas-get-fechas";
import setFechas from "./ordenes-fechas-set-fechas";
import { APIDateFormatter } from "../shared/utils";

describe("Ordenes Set Fechas Funtion", () => {
  const fechas = getFechas();
  enum Fechas {
    setToday,
    setThisWeek,
    setPriorWeek,
    setThisMonth,
    setPrevousMonth,
    setLastThreeMonths,
    setLastSixMonths,
  }

  test("Verify setToday returns what's expected", () => {
    const returnValue = {
      fecha_registro: {
        gte: new APIDateFormatter(fechas.today).toISOString(),
      },
    };
    expect(setFechas(fechas, Fechas.setToday)).toEqual(returnValue);
  });
  test("Verify setThisWeek returns what's expected", () => {
    const returnValue = {
      AND: [
        {
          fecha_registro: {
            lte: new APIDateFormatter(fechas.today).isLessThan().toISOString(),
          },
        },
        {
          fecha_registro: {
            gte: new APIDateFormatter(fechas.lastSunday).toISOString(),
          },
        },
      ],
    };
    expect(setFechas(fechas, Fechas.setThisWeek)).toEqual(returnValue);
  });
  test("Verify setPriorWeek returns what's expected", () => {
    const returnValue = {
      AND: [
        {
          fecha_registro: {
            lte: new APIDateFormatter(fechas.previosSaturday)
              .isLessThan()
              .toISOString(),
          },
        },
        {
          fecha_registro: {
            gte: new APIDateFormatter(fechas.previousSunday).toISOString(),
          },
        },
      ],
    };
    expect(setFechas(fechas, Fechas.setPriorWeek)).toEqual(returnValue);
  });
  test("Verify setThisMonth returns what's expected", () => {
    const returnValue = {
      fecha_registro: {
        gte: new APIDateFormatter(fechas.thisMonth).toISOString(),
      },
    };
    expect(setFechas(fechas, Fechas.setThisMonth)).toEqual(returnValue);
  });
  test("Verify setPrevousMonth returns what's expected", () => {
    const returnValue = {
      fecha_registro: {
        gte: new APIDateFormatter(fechas.previousMonth).toISOString(),
      },
    };
    expect(setFechas(fechas, Fechas.setPrevousMonth)).toEqual(returnValue);
  });
  test("Verify setLastThreeMonths returns what's expected", () => {
    const returnValue = {
      fecha_registro: {
        gte: new APIDateFormatter(fechas.last3Months).toISOString(),
      },
    };
    expect(setFechas(fechas, Fechas.setLastThreeMonths)).toEqual(returnValue);
  });
  test("Verify setLastSixMonths returns what's expected", () => {
    const returnValue = {
      fecha_registro: {
        gte: new APIDateFormatter(fechas.last6Months).toISOString(),
      },
    };
    expect(setFechas(fechas, Fechas.setLastSixMonths)).toEqual(returnValue);
  });
});
