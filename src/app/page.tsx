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
  </div>
  );
}
