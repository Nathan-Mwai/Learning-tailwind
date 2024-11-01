import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* <div> */}
      {/* <h1 className="border-4 border-teal-600"> */}
      {/* bg = background */}
      {/* text = to the text itself */}
      {/* border */}
      {/* Hello world! */}
      {/* </h1> */}
      {/* <h1 className="text-vuejs-675">
    Hello world!
  </h1> */}
      {/* This will change text size in accordance to the screen size */}
      {/* <p className="text-xs sm:text-base md:text-lg lg:text-3xl">Hello Long Sentence I am Gonna change in accordance to the screen you are viewing me from XOXO</p>
  <div> */}
      {/* Using the space setting */}
      {/* Used arbitrary values at bg where tou set the color inside of the className instead of putting it in the tailwind config file className="mb-1 bg-[#bada55] */}
      {/* <p >Adding space to me so I can be compared</p>
    <p>My competitor will see my spaces and admire</p>
  </div> */}
      {/* </div> */}
      {/* Moving to typography */}
      {/* <div> */}
      {/* <p className="text-3xl italic">Title 1</p>
      <p className="text-2xl underline underline-offset-8 decoration-teal-400 decoration-wavy decoration-4">Title 2</p>
      <p className="text-xl lowercase">Title 3</p>
      <p className="text-base capitalize">A regular paragraph</p>
      <p className="text-sm">A description paragraph</p>
      <p className="note text-xs">A little note</p> */}
      {/* <p className="truncate">This is a long sentence with a lot of words to explain that truncate will truncate my sentence</p> */}
      {/* </div> */}
      {/* <div className="flex min-h-screen space-y-4">
      <div className="w-1/5  bg-purple-600 ">Sidebar</div>
      <div className="w-4/5  bg-teal-600">Main</div>
    </div> */}
      {/* Flexing starts here */}
      <div className="Parent">
        <div>Header</div>
        <div className="flex justify-start">
            <div className="">Sidebar</div>
            <div className="">Main content</div>
          </div>
        </div>
      </div>
  );
}
