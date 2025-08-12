/**
 * Calculates date in natural way.
 * @param day     <u>12</u>.08.2025
 * @param month   12.0<u>8</u>.2025
 * @param year    12.08.<u>2025</u>
 *
 * @example
 * const date: Date = naturalDate(12, 8, 2025);
 */
export const naturalDate = (day: number, month: number, year: number) => {
  return new Date(year, month - 1, day);
};
