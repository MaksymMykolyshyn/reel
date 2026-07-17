export default function Header() {
  const date = new Date();
  const dayName = date.toLocaleDateString("en-US", { weekday: "long" });
  const monthName = date.toLocaleDateString("en-US", { month: "long" });
  const fullDate = `${dayName}, ${monthName} ${date.getDate()}, ${date.getFullYear()}`;
  return (
    <div>
      <div>
        <div className="text-lg flex justify-center items-center h-10">
          {fullDate}
        </div>
        <div className="width-full bg-secondary h-0.25"></div>
      </div>
      <header className="text-xl font-bold text-center h-55 flex flex-col justify-center">
        <h1 className="text-[130px] leading-none">Reel</h1>
        <div className="text-secondary">Every Frame Has a Story.</div>
        <div className="width-full bg-secondary h-0.25 mt-8"></div>
      </header>
    </div>
  );
}
