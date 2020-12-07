export default class APIDateFormatter {
  private date: Date;

  constructor(date: Date | string) {
    this.date = new Date(date);
  }

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
    return this.date.toISOString();
  }
}
