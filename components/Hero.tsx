import React from 'react';
import { LeftSpotlight } from '@/components/ui/LeftSpotlight';
import { RightSpotlight } from './ui/RightSpotlight';
import Button from './ui/Button';
import { FaLocationArrow } from 'react-icons/fa';

export default function Hero() {
  return (
    <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <div>
        <LeftSpotlight
          className="-top-10 left-0 md:left-2 md:-top-20"
          fill="purple"
        />
        <LeftSpotlight
          className="-top-40 left-0 md:left-80 md:-top-20"
          fill="blue"
        />
      </div>
      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.06] bg-grid-black/[0.2]  flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-x-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Bhargav thakar
          </h2>

          <a href="#about">
            <Button
              title="show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
