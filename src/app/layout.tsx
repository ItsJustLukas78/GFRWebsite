import "styles/tailwind.css"

import {NavBar} from "@/components/NavBar"
import {Footer} from "@/components/Footer";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: "Gael Force Robotics",
  description: "Gael Force Robotics is a competitive robotics club of Dublin High School based in Dublin, California. We have competitive teams that compete in the VEX Robotics Competition and host annual tournaments and workshops to promote STEM education.",
  openGraph: {
    title: "Gael Force Robotics",
    description: "Gael Force Robotics is a competitive robotics club of Dublin High School based in Dublin, California. We have competitive teams that compete in the VEX Robotics Competition and host annual tournaments and workshops to promote STEM education.",
    type: 'website',
    images: [
      {
        url: "https://www.gaelforcerobotics.com/gfrworlds2023.jpg",
        width: 4032,
        height: 3024,
      },
    ],
  }
}

export default function RootLayout({children}: { children: React.ReactNode }) {

  return (
    <html lang="en" className="">
    <body>

    {/*<div className="absolute top-0 z-[-2] h-screen w-screen bg-[radial-gradient(#ffffff33_1px,#00091d_1px)]">*/}
    {/*</div>*/}

    {/*<div*/}
    {/*  className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>*/}

    {/*<div className="absolute -z-10 min-h-full w-full bg-black">*/}
    {/*  <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full bg-[linear-gradient(to_right,#4f4f4f2e_3px,transparent_1px),linear-gradient(to_bottom,#8080800a_2px,transparent_1px)] bg-[size:14px_24px]"></div>*/}
    {/*</div>*/}

    <div className="stick top-0 z-50 bg-red-600/80 text-white font-mono font-semibold text-center py-2 text-lg">
      <p>Checkout our BOTB <a className="text-blue-300" target="_blank" href="https://www.youtube.com/watch?v=QfP7mpJ-1M8&t=2s">livestream</a> and <a className="text-blue-300" target="_blank" href="https://www.youtube.com/watch?v=z4CdeRLKjXs">promo!</a></p>
    </div>

    <NavBar/>
    {children}
    <Footer/>

    </body>
    </html>
  )
}