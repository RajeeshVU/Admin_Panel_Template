

export function formatDate(dateString: string) {
  const date = new Date(dateString);

  const options: any = { month: "short", day: "numeric", year: "numeric" };
  date.setUTCFullYear(date.getUTCFullYear());
  date.setUTCMonth(date.getUTCMonth());
  date.setUTCDate(date.getUTCDate());
  date.setUTCHours(0, 0, 0, 0);
  const result = date.toLocaleDateString("en-US", options);
  return result;
}
