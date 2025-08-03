export type Tier = "free" | "silver" | "gold" | "platinum";

export const TIERS: Tier[] = ["free", "silver", "gold", "platinum"];

export function tierRank(t: Tier) {
  return TIERS.indexOf(t);
}

export function tiersUpTo(t: Tier): Tier[] {
  const r = tierRank(t);
  return TIERS.filter((_, i) => i <= r);
}

export function tiersAbove(t: Tier): Tier[] {
  const r = tierRank(t);
  return TIERS.filter((_, i) => i > r);
}

export const tierColors: Record<Tier, string> = {
  free: "bg-gray-100 text-gray-800",
  silver: "bg-slate-200 text-slate-900",
  gold: "bg-yellow-200 text-yellow-900",
  platinum: "bg-indigo-200 text-indigo-900",
};
