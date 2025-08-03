"use client";

import Image from "next/image";
import { tierColors, Tier } from "@/lib/tiers";

type Props = {
  title: string;
  description: string;
  dateISO: string;
  tier: Tier;
  imageUrl?: string | null;
  locked?: boolean;
  upgradeTo?: Tier; // set if locked
};

export default function EventCard({
  title,
  description,
  dateISO,
  tier,
  imageUrl,
  locked = false,
  upgradeTo,
}: Props) {
  const date = new Date(dateISO);

  return (
    <div className="relative rounded-2xl bg-white shadow overflow-hidden flex flex-col">
      <div className="relative h-40 w-full">
        <Image
          src={imageUrl || "https://picsum.photos/seed/placeholder/800/500"}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <span className={`absolute top-3 left-3 px-3 py-1 text-xs font-semibold rounded-full ${tierColors[tier]}`}>
          {tier.toUpperCase()}
        </span>
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-sm text-gray-600 mt-1 line-clamp-2">{description}</p>
        <div className="mt-auto pt-3 text-sm text-gray-500">
          {date.toLocaleString(undefined, {
            dateStyle: "medium",
            timeStyle: "short",
          })}
        </div>
      </div>

      {locked && (
        <div className="absolute inset-0 bg-white/70 backdrop-blur-[1px] flex items-center justify-center">
          <div className="text-center">
            <div className="text-base font-semibold">Locked</div>
            {upgradeTo && (
              <div className="text-sm text-gray-700 mt-1">
                Upgrade to <strong>{upgradeTo.toUpperCase()}</strong> to access this event.
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
