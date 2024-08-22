const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const daysList = daysOfWeek.map((day) => ({
  label: day,
  value: day.toLowerCase(),
}));
