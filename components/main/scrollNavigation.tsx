"use client";

import MovieSection from "@/components/main/movieSection";

export default function Navigation() {
  const scroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div>
      <nav className="flex justify-center">
        <div className="w-full grid grid-cols-2 gap-y-4 px-6 sm:flex sm:w-[90%] sm:justify-around sm:items-center sm:gap-2 lg:w-[70%]">
          <button
            className="cursor-pointer text-left sm:text-center"
            onClick={() => scroll("editors-choice")}
          >
            Editor{`'`}s choice
          </button>

          <div className="hidden sm:block">|</div>

          <button
            className="cursor-pointer text-left sm:text-center"
            onClick={() => scroll("top-trending")}
          >
            Top trending
          </button>

          <div className="hidden sm:block">|</div>

          <button
            className="cursor-pointer text-left sm:text-center"
            onClick={() => scroll("upcoming")}
          >
            Upcoming
          </button>

          <div className="hidden sm:block">|</div>

          <button
            className="cursor-pointer text-left sm:text-center"
            onClick={() => scroll("now-playing")}
          >
            Now playing
          </button>

          <div className="hidden sm:block">|</div>

          <div className="text-left sm:text-center">Genres</div>

          <div className="hidden sm:block">|</div>

          <button
            className="cursor-pointer text-left sm:text-center"
            onClick={() => scroll("archive")}
          >
            Archive
          </button>
        </div>
      </nav>

      <div className="w-full bg-secondary h-px mt-3.5" />
    </div>
  );
}
