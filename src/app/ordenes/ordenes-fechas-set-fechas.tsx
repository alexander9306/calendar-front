import type { GetFechasValues } from "./ordenes-fechas-get-fechas";
import type { OrdenesWhereInput } from "../generated/api";
import { APIDateFormatter } from "../shared/utils";

function setFechas(dates: GetFechasValues, value: number): OrdenesWhereInput {
  const {
    today,
    lastSunday,
    previousSunday,
    previosSaturday,
    thisMonth,
    previousMonth,
    last3Months,
    last6Months,
  } = dates;

  const setToday = () => ({
    fecha_registro: {
      gte: new APIDateFormatter(today).toISOString(),
    },
  });

  const setThisWeek = () => ({
    AND: [
      {
        fecha_registro: {
          lte: new APIDateFormatter(today).isLessThan().toISOString(),
        },
      },
      {
        fecha_registro: {
          gte: new APIDateFormatter(lastSunday).toISOString(),
        },
      },
    ],
  });

  const setPriorWeek = () => ({
    AND: [
      {
        fecha_registro: {
          lte: new APIDateFormatter(previosSaturday).isLessThan().toISOString(),
        },
      },
      {
        fecha_registro: {
          gte: new APIDateFormatter(previousSunday).toISOString(),
        },
      },
    ],
  });

  const setThisMonth = () => ({
    fecha_registro: {
      gte: new APIDateFormatter(thisMonth).toISOString(),
    },
  });

  const setPrevousMonth = () => ({
    fecha_registro: {
      gte: new APIDateFormatter(previousMonth).toISOString(),
    },
  });

  const setLastThreeMonths = () => ({
    fecha_registro: {
      gte: new APIDateFormatter(last3Months).toISOString(),
    },
  });

  const setLastSixMonths = () => ({
    fecha_registro: {
      gte: new APIDateFormatter(last6Months).toISOString(),
    },
  });

  const functions = [
    setToday,
    setThisWeek,
    setPriorWeek,
    setThisMonth,
    setPrevousMonth,
    setLastThreeMonths,
    setLastSixMonths,
  ];
  return functions[value]();
}

export default setFechas;
