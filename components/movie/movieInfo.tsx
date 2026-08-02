import { Movie, MovieCredits } from "@/types/movie";
import { getProfile } from "@/lib/tmdb-images";
import Image from "next/image";

type MovieInfoProps = {
  movie: Movie;
  credits: MovieCredits;
};

export default function movieInfo({ movie, credits }: MovieInfoProps) {
  const director = credits?.crew?.find((person) => person.job === "Director");
  return (
    <>
      <div className="w-[1600px] mx-auto mt-10">
        <div className="italic text-4xl text-accent mb-4">Film facts</div>
        <div className="flex flex-row">
          <div className="w-6/10 text-3xl">
            Crew
            <div className="flex gap-4 flex-wrap">
              {credits.cast.slice(0, 8).map((actor) => (
                <div key={actor.id} className="w-50">
                  <Image
                    src={getProfile(actor.profile_path)}
                    alt={actor.name}
                    width={200}
                    height={300}
                    className="w-full h-60 object-cover"
                  />

                  <div className="mt-2">
                    <p className="font-bold">{actor.name}</p>
                    <p className="text-sm text-secondary">{actor.character}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-4 flex-wrap"></div>
          </div>
          <div className="w-4/10 border border-accent">
            Director
            <div>{director?.name}</div>
          </div>
        </div>
      </div>
    </>
  );
}
