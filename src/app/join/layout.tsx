import {Metadata} from "next";

export const metadata: Metadata = {
  title: "Join Us | GFR",
  description: "Join Gael Force Robotics and become a part of our competitive robotics club.",
  openGraph: {
    images: [
      {
        url: "https://www.gaelforcerobotics.com/steamworlds.jpg",
        width: 3024,
        height: 1935
      },
    ],

  }
}

export default function Layout({children}: { children: React.ReactNode }) {
  return <>
    {children}
  </>
}
