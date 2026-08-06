"use client";

import { Movie, MovieCredits } from "@/types/movie";
import { getProfile } from "@/lib/tmdb-images";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { useRouter } from "next/navigation";

type MovieInfoProps = {
  movie: Movie;
  credits: MovieCredits;
};

export default function MovieInfo({ movie, credits }: MovieInfoProps) {
  const vote = Math.round(movie.vote_average * 10) / 10 
  const router = useRouter();
  const director = credits?.crew?.find((person) => person.job === "Director");
  return (
    <>
      <div className="w-[1700px] mx-auto mt-10">
        <div className="italic text-4xl text-accent mb-4 uppercase  border-b ">
          Film facts
        </div>
        <div className="flex flex-row">
          <div className="w-6/10 text-3xl font-bold">
            <span className="tracking-wide">Crew</span>

            <div className="flex gap-4 flex-wrap">
              {credits.cast.slice(0, 16).map((actor) => (
                <div key={actor.id} className="w-55 border p-3">
                  <button
                    className="w-full"
                    onClick={() => router.push(`/actor/${actor.id}`)}
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
                    <p className="font-bold line-clamp-2">{actor.name}</p>
                    <p className="text-sm text-secondary ">{actor.character}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-4 flex-wrap"></div>
          </div>
          <div className="w-4/10 border border-accent flex flex-col justify-between text-neutral-500 py-10 h-96 sticky top-5 divide-y divide-border">
            <div className="flex flex-row w-[80%] mx-auto justify-between  ">
              Director: <div className="text-black">{director?.name} </div>
            </div>
            <div className="flex flex-row w-[80%] mx-auto justify-between">
              Budget: <div className="text-black">{movie.budget}$ </div>
            </div>
            <div className="flex flex-row w-[80%] mx-auto justify-between">
              Status: <div className="text-black">{movie.status} </div>
            </div>
            <div className="flex flex-row w-[80%] mx-auto justify-between">
              Country: <div className="text-black">{movie.origin_country} </div>
            </div>
            <div className="flex flex-row w-[80%] mx-auto justify-between items-center">
              Vote average:{" "}
              <div className="text-black flex flex-row">
                {vote} <FaStar className=" text-accent" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <Image src={movie.backdrop_path} alt="image movie" width={400} height={300}/>
        </div>
      </div>
    </>
  );
}
