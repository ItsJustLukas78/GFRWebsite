import { cva, type VariantProps } from "class-variance-authority"

import { twMerge } from "tailwind-merge"
import Image from "next/image";
import Link from "next/link";
import NextImage from "next/image";

export function Footer() {

  const currentYear = new Date().getFullYear()

  return <div className="mx-10" >
    <div className="flex md:h-64 h-[580px] max-w-screen-xl mx-auto lg:gap-52 gap-24 flex-col md:flex-row mt-20 mb-14 text-primary">
      <div className="flex flex-col gap-6">
        <a className="flex items-center gap-2 font-extrabold tracking-wide" href="/">
          <Image src="/GFRLogo.png" alt="GFR Logo" width={50} height={50} />
          Gael Force Robotics
        </a>
        <div className="flex flex-col gap-1">
          <h1 className="font-light">©{currentYear} All Rights Reserved.</h1>
          <h1 className="font-light">Content by members of GFR</h1>
          <h1 className="font-light">Developed by Lukas Somwong</h1>
          <h1 className="font-light">Code licensed under <a href="/LICENSE.txt" className="text-[#DB4A4A]">MIT</a></h1>
        </div>

        <div className="flex space-x-4">
          <a target="_blank" href="https://www.instagram.com/gfr5327/"><NextImage src="/instagram.png" alt="Instagram" width={32} height={32} /></a>
          <a target="_blank" href="https://www.youtube.com/@GaelForceRobotics"><NextImage src="/youtube.png" alt="YouTube" width={32} height={32} /></a>
          <a target="_blank" href="https://discord.gg/tpNP8Pte7u"><NextImage src="/discord.png" alt="Discord" width={32} height={32} /></a>
          <a target="_blank" href="mailto:gaelforcerobotics@gmail.com"><NextImage src="/email.png" alt="Email" width={32} height={32} /></a>
        </div>
      </div>
      <div className="flex xl:flex-row sm:flex-col flex-row gap-7 sm:mt-3 mt-5 [&>*]:font-medium [&>*]:h-min [&>*]:transition-colors [&>*]:duration-500">
        <div className="flex flex-col gap-7 sm:flex-row">
          <Link href="/#about" className="hover:text-[#DB4A4A]">About Us</Link>
          <Link href="/#events" className="hover:text-[#DB4A4A]">Events</Link>
          <Link href="/teams" className="hover:text-[#DB4A4A]">Teams</Link>
          <Link href="/join" className="hover:text-[#DB4A4A]">Join</Link>
        </div>
        <div className="flex flex-col gap-7 sm:flex-row">
          <Link href="/announcements" className="hover:text-[#DB4A4A]">Blog</Link>
          <a target="_blank" href="https://drive.google.com/file/d/1yQ2w4mPlkFo14vMSIcObk2ucnIDafrTl/view?usp=sharing" className="hover:text-[#DB4A4A]">Sponsor Packet</a>
          <Link href="/officers" className="hover:text-[#DB4A4A]">Officers</Link>
          <Link href="/gallery" className="hover:text-[#DB4A4A]">Gallery</Link>
          <Link href="/timeline/achievements" className="hover:text-[#DB4A4A]">Awards</Link>
        </div>
      </div>
    </div>
  </div>
}
