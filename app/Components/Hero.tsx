import Image from "next/image";
import { HerosSectionData } from "../utils";

export const Hero = () => {
  return (
    <div className="">
      <div className=" m-2 p-2 mt-10 gap-3 ">
        <h1 className="Text  text-center  h-full w-full font-bold   text-blue-400 text-3xl md:text-7xl">
          {" "}
          {HerosSectionData}{" "}
        </h1>
        <div className="flex justify-center    m-3">
          <Image
            src="/solog.jpg"
            alt="image"
            className="rounded-lg cursor-pointer  shadow-blue-700"
            width={1000}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};
