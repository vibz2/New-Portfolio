export const lastUpdated = new Date(__LAST_UPDATED__);

export function formatLastUpdated(date: Date) {
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
