import { MovieCredits } from "@/types/movie";
import { getActorById } from "@/lib/tmbd";
import { getProfileFull } from "@/lib/tmdb-images";
import HeaderMain from "@/components/layout/header/HeaderMain";
import Image from "next/image";

type ActorProps = {
  params: Promise<{
    locale: string;
    id: string;
  }>;
  credits: MovieCredits;
};

export default async function ActorPage({ params }: ActorProps) {
  const { locale, id } = await params;

  const profile = await getActorById(locale, +id);
  console.log(profile);

  return (
    <>
      <HeaderMain />
      <div className="flex w-[1400px] mx-auto">
        <div>
          <Image
            src={getProfileFull(profile.profile_path)}
            alt="actro profile image"
            width={600}
            height={800}
          />
        </div>
        <div className="flex flex-col mx-auto w-[50%]">
          <div className="text-4xl text-accent italic">{profile.name}</div>

          <div>{profile.place_of_birth}</div>
          <div>{profile.birthday}</div>
          <div>{profile.biography}</div>
        </div>
      </div>
    </>
  );
}
