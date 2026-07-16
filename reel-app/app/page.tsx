import React from "react";
import { Playfair_Display } from "next/font/google";

const playfairDisplay = Playfair_Display({
  subsets: ['latin', 'cyrillic'], 
  weight: ['400', '700'],      
  display: 'swap',             
});

export default function Home() {
  const date = new Date();
  const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });
  const monthName = date.toLocaleDateString('en-US', {month: 'long'});
  const fullDate = `${dayName}, ${monthName} ${date.getDate()}, ${date.getFullYear()}`;
  return (
    <div className={playfairDisplay.className}>
      <div>
        <div className="text-lg text-center">{fullDate}</div>
      </div>
    </div>
  );
}
