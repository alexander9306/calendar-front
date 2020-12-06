interface ResponsiveTextOptions {
  text?: string | null;
  xs?: number;
  md?: number;
  lg?: number;
  suffix?: string;
  width: number;
}
/**
 * Replace text with a suffix depending the width of the screen. Defaults to three dots.
 * @example
 * const text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy";
 *
 * // After a string with 35 characters it would
 * // return Lorem Ipsum is simply dummy text of the printing and typesetting industry...
 * const newText = transformText({ text, md:35, width },)
 */
export default function transformText(options: ResponsiveTextOptions): string {
  const { xs, md, lg, suffix = "...", text, width } = options;

  if (!text) return "";

  if (width <= 320) {
    if (xs && text.length > xs) return `${text.substr(0, xs)}${suffix}`;
  }
  if (width <= 768) {
    if (md && text.length > md) return `${text.substr(0, md)}${suffix}`;
  }
  if (width > 768) {
    if (lg && text.length > lg) return `${text.substr(0, lg)}${suffix}`;
  }

  return text;
}
