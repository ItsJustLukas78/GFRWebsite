import {Metadata} from "next";

export const metadata: Metadata = {
  title: "Gallery | GFR",
  description: "See the images of GFR",
  openGraph: {
    title: "Gallery | GFR",
    description: "See the images of GFR",
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
