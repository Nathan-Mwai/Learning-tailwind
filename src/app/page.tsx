import Image from "next/image";

export default function Home() {
  return (
    <div>
    <h1 className="border-4 border-teal-600">
      {/* bg = background */}
      {/* text = to the text itself */}
      {/* border */}
    Hello world!
  </h1>
  <h1 className="text-vuejs-675">
    Hello world!
  </h1>
  {/* This will change text size in accordance to the screen size */}
  <p className="text-xs sm:text-base md:text-lg lg:text-3xl">Hello Long Sentence I am Gonna change in accordance to the screen you are viewing me from XOXO</p>
  <div>
    {/* Using the space setting */}
    {/* Used arbitrary values at bg where tou set the color inside of the className instead of putting it in the tailwind config file className="mb-1 bg-[#bada55] */}
    <p >Adding space to me so I can be compared</p>
    <p>My competitor will see my spaces and admire</p>
  </div>
  </div>
  );
}
