import {Metadata} from "next";

export const metadata: Metadata = {
  title: "Officers | GFR",
  description: "Meet the officers of Gael Force Robotics.",
  openGraph: {
    title: "Officers | GFR",
    description: "Meet the officers of Gael Force Robotics.",
    type: 'website',
    images: [
      {
        url: "https://www.gaelforcerobotics.com/gfr-bg.png",
        width: 1920,
        height: 1080,
      },
    ],
  }
}

export default function Layout({children}: { children: React.ReactNode }) {
  return <>
    {children}
  </>
}
