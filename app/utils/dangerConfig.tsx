export const dangerAssets = {
  low: "/info.png",
  moderate: "/moderate.png",
  high: "/high.png",
  critical: "/critical.png",
} as const;

export type Severity = keyof typeof dangerAssets;