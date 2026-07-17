export default function Navigation() {
  return (
    <div>
      <nav className="flex justify-center">
        <div className="flex flex-row w-[70%] justify-around">
          <div>Editor{`'`}s choice</div>
          <div>|</div>
          <div>Top trending</div>
          <div>|</div>
          <div>Upcoming</div>
          <div>|</div>
          <div>Now playing</div>
          <div>|</div>
          <div>Genres</div>
          <div>|</div>
          <div>Archive</div>
        </div>
      </nav>
      <div className="width-full bg-secondary h-0.25 mt-3.5"></div>
    </div>
  );
}
