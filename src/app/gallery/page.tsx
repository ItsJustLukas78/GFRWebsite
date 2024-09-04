import NextImage from 'next/image';
import GalleryWithLightBox from "@/components/GalleryWithLightBox";

interface GalImage {
  id: number;
  src: string;
  thumbnail: string;
  width: number;
  height: number;
}

export default function OfficersPage() {

  // @ts-ignore

  const galleryUrls = [
    "/botb2024.jpg",
    "/girlpowered2024.jpg",
    "/gfrworlds2023.jpg",
    "/showcase2024.jpg",
    "/smilingofficers.jpg",
    "/steambooth.jpg",
    "/steamworlds.jpg",
    "/GFRTheLot.jpg",
    "/GFRTopOfWorlds.jpg",
    "/GFRInWorldsAudience.jpg",
    "/GFRAtAirport.jpg",
    "/GFRAtWorldsPit.jpg",
    "/GFRGettingInterviewed.jpg",
    "/GFRAtWorldsRisers.jpg",
    "/5327KAtWorlds2023.jpg",
    "/5327KFixingString.jpg",
    "/5327KInWorldsMatch2023.jpg",
    "/5327SAtWorlds2023.jpg",
    "/5327SGirlPowered.jpg",
    "/5327SMeeting1.jpg",
    "/5327SWalkingToMatch.jpg",
    "/5327SWorldsQual2023.jpg",
    "/ArpitCoding.jpg",
    "/GFRPotluck2023.jpg",
    "/GFRWorldsBottomAudience2023.jpg",
    "/GilbertSmirking.jpg",
    "/5327SSpinUpBot.jpg",
    "/GuysAtTracyStates2023.jpg",
    "/KevinLookingAtCamera.jpg"
  ];
  return <>
    { /* image in background takes up full width and fades to black downwards */}
    <div className="relative w-full">

      <div className="relative mx-auto max-w-screen-xl px-5 py-8 text-primary z-[5] sm:py-16">
        <section className="mb-16">
          <section>
            <h2 className="mb-4 text-4xl font-semibold text-white">Images of GFR</h2>
            <GalleryWithLightBox imageUrls={galleryUrls}/>
          </section>
        </section>

      </div>
    </div>
  </>
}