"use client";

import { Tv, TvCredits } from "@/types/movie";
import { getProfile } from "@/lib/tmdb-images";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { useRouter } from "next/navigation";

type TvInfoProps = {
  tv: Tv;
  credits: TvCredits;
};

export default function TvInfo({
  tv,
  credits,
}: TvInfoProps) {
  const router = useRouter();

  const vote = Math.round(tv.vote_average * 10) / 10;

  return (
    <div className="w-[1700px] max-w-[95%] mx-auto mt-10">
      <div className="italic text-4xl text-accent mb-4 uppercase border-b">
        Series facts
      </div>

      <div className="flex flex-row gap-10">
        <div className="w-6/10 text-3xl font-bold">
          <span className="tracking-wide">
            Cast
          </span>

          <div className="flex gap-4 flex-wrap mt-4">
            {credits.cast.slice(0, 16).map((actor) => (
              <div
                key={actor.id}
                className="w-55 border p-3"
              >
                <button
                  className="w-full"
                  onClick={() =>
                    router.push(`/actor/${actor.id}`)
                  }
                >
                  <Image
                    src={getProfile(actor.profile_path)}
                    alt={actor.name}
                    width={200}
                    height={300}
                    className="w-full h-60 object-cover"
                  />
                </button>

                <div className="mt-2 h-30 flex flex-col">
                  <p className="font-bold line-clamp-2">
                    {actor.name}
                  </p>

                  <p className="text-sm text-secondary">
                    {actor.character}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-4/10 border border-accent flex flex-col justify-between text-neutral-500 py-10 h-96 sticky top-5 divide-y divide-border">
          <div className="flex flex-row w-[80%] mx-auto justify-between">
            Creator:

            <div className="text-black">
              {tv.created_by?.[0]?.name ?? "Unknown"}
            </div>
          </div>

          <div className="flex flex-row w-[80%] mx-auto justify-between">
            Seasons:

            <div className="text-black">
              {tv.number_of_seasons}
            </div>
          </div>

          <div className="flex flex-row w-[80%] mx-auto justify-between">
            Episodes:

            <div className="text-black">
              {tv.number_of_episodes}
            </div>
          </div>

          <div className="flex flex-row w-[80%] mx-auto justify-between">
            Status:

            <div className="text-black">
              {tv.status}
            </div>
          </div>

          <div className="flex flex-row w-[80%] mx-auto justify-between">
            Country:

            <div className="text-black">
              {tv.origin_country?.join(", ") || "Unknown"}
            </div>
          </div>

          <div className="flex flex-row w-[80%] mx-auto justify-between items-center">
            Vote average:

            <div className="text-black flex flex-row items-center gap-1">
              {vote}

              <FaStar className="text-accent" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}