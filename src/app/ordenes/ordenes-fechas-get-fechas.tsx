export interface GetFechasValues {
  today: Date;
  lastSunday: Date;
  previousSunday: Date;
  previosSaturday: Date;
  thisMonth: Date;
  previousMonth: Date;
  last3Months: Date;
  last6Months: Date;
}

export default function getFechas(): GetFechasValues {
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

  return {
    today,
    lastSunday,
    previousSunday,
    previosSaturday,
    thisMonth,
    previousMonth,
    last3Months,
    last6Months,
  };
}
