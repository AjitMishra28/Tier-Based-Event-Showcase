"use client";
import { useUser } from "@clerk/nextjs";
import { TIERS, tierRank, Tier } from "@/lib/tiers";
import { useState } from "react";

export default function UpgradeTier() {
  const { user, isLoaded } = useUser();
  const current: Tier = (user?.publicMetadata?.tier as Tier) ?? "free";

  const nextTier: Tier | null = (() => {
    const r = tierRank(current);
    return r < TIERS.length - 1 ? TIERS[r + 1] : null;
  })();

  const [busy, setBusy] = useState(false);
  if (!isLoaded) return null;

  async function upgrade() {
    if (!nextTier) return;
    setBusy(true);
    try {
      await fetch("/api/upgrade-tier", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nextTier }),
      });
      window.location.reload();
    } finally {
      setBusy(true);
    }
  }

  return (
    <div className="rounded-xl bg-white shadow p-4 flex items-center justify-between">
      <div>
        <div className="text-sm text-gray-500">Your tier</div>
        <div className="text-lg font-semibold">{current.toUpperCase()}</div>
      </div>
      {nextTier ? (
        <button
          onClick={upgrade}
          
          className="rounded-lg bg-black text-white px-4 py-2 disabled:opacity-60"
        >
          {busy ? "Upgrading..." : `Upgrade to ${nextTier.toUpperCase()}`}
        </button>
      ) : (
        <div className="text-sm text-gray-600">You are at the highest tier 🎉</div>
      )}
    </div>
  );
}
