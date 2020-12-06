export default class APIDateFormatter {
  constructor(private date: Date) {}

  isLessThan(): APIDateFormatter {
    this.date = new Date(
      this.date.getFullYear(),
      this.date.getMonth(),
      this.date.getDate() + 1
    );
    return this;
  }

  getDate(): Date {
    return this.date;
  }

  toISOString(): string {
    this.date.setUTCHours(0, 0, 0, 0);
    return this.date.toISOString();
  }
}
