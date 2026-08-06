'use client'

import MovieSection from "@/components/main/movieSection"

export default function Navigation() {
  const scroll = (id: string) => {
    const element = document.getElementById(id);
    if(element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  return (
    <div>
      <nav className="flex justify-center">
        <div className="flex flex-row w-[70%] justify-around">
          <div><button className="cursor-pointer" onClick={() => scroll("editors-choice")}>Editor{`'`}s choice</button></div>
          <div>|</div>
          <div><button className="cursor-pointer" onClick={() => scroll("top-trending")}>Top trending</button></div>
          <div>|</div>
          <div><button className="cursor-pointer" onClick={() => scroll("upcoming")}>Upcoming</button></div>
          <div>|</div>
          <div><button className="cursor-pointer" onClick={() => scroll("now-playing")}>Now playing</button></div>
          <div>|</div>
          <div>Genres</div>
          <div>|</div>
          <div><button className="cursor-pointer" onClick={() => scroll("archive")}>Archive</button></div>
        </div>
      </nav>
      <div className="width-full bg-secondary h-px mt-3.5"></div>
    </div>
  );
}
