import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Post dates are bare YYYY-MM-DD, which Date parses as UTC midnight. Formatting
// in a negative-offset timezone then renders the previous day, so pin the
// formatter to UTC. Client components would otherwise also disagree with the
// server-rendered post page, which is frozen at build-machine time.
export function formatPostDate(
  date: string,
  month: "short" | "long" = "long",
) {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month,
    day: "numeric",
    timeZone: "UTC",
  });
}
