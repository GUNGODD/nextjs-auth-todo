"use client";
import { Button } from "@/components/ui/button";

import React, { useEffect, useState } from "react";
import { Hero } from "./Hero";
import { CrosshairIcon, CrossIcon, HamIcon, Menu, X } from "lucide-react";

const Home = () => {
  const [IsOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!IsOpen);
  };

  // to stop scrolling when clicking on hamburger Menu

  useEffect(() => {
    document.body.style.overflow = IsOpen ? "hidden" : "auto";
  }, [IsOpen]);

  return (
    <div className="outer-container  ">
      <div className="inner-container m-4  ">
        <div className="navbar   logo flex  flex-row  justify-between ">
          {/* this div will contains logo and sign in and signup  button */}

          <div className="">
            <h2 className=" text-purple-700  text-2xl md:text-4xl font-bold ">
              TODO
            </h2>
          </div>
          <div className="buttons-users  hidden md:flex flex-row gap-x-4">
            <Button className="button-sign-in  "> Sign In </Button>
            <Button className="button-sign-up "> Sign Up </Button>
          </div>
          <div className="flex md:hidden overflow-hidden ">
            {!IsOpen && <Menu onClick={toggle} />}
            {IsOpen && <X onClick={toggle} />}
          </div>

          {/* mobile navbar  */}
        </div>
        {IsOpen && (
          <div className="flex flex-col gap-4 text-xl font-bold text-fuchsia-400 m-4 p-4  border shadow-lg  w-full h-screen ">
            <button className="button-sign-in   "> Sign In </button>
            <button className="button-sign-up "> Sign Up </button>
          </div>
        )}

        {/* hero section */}
        <Hero />
      </div>
    </div>
  );
};

export default Home;
