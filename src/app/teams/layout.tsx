import {Metadata} from "next";

export const metadata: Metadata = {
  title: "Teams | GFR",
  description: "Meet the active competitive teams of Gael Force Robotics.",
  openGraph: {
    title: "Teams | GFR",
    description: "Meet the active competitive teams of Gael Force Robotics.",
    type: 'website',
    images: [
      {
        url: "https://www.gaelforcerobotics.com/steambooth.jpg",
        width: 4032,
        height: 3024,
      },
    ],
  }
}

export default function Layout({children}: { children: React.ReactNode }) {
  return <>
    {children}
  </>
}
