export interface EventType {
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
  size: "onexy" | "twoxoney"; // take up one column or two columns
  link?: string;
}

// UPDATE ANNUALLY
export const events: EventType[] = [
  {
    title: "Fall GFR Showcase",
    date: "August 30, 2024",
    location: "Dublin High School",
    description: "A great opportunity for students to learn more about Gael Force Robotics and meet existing members!",
    image: "/showcase2024.jpg",
    size: "onexy",
    link: "https://drive.google.com/file/d/1NlxFUJHgYTZ9KUA45aW0H-XOpvIaWV5u/view?usp=sharing",
  },
  {
    title: "GirlPowered Workshop",
    date: "Oct 12, 2024",
    location: "Dublin High School",
    description: "An event designed to encourage young girls to get involved in STEM and robotics through hands-on activities.",
    image: "/girlpowered2024.jpg",
    size: "onexy",
    link: "https://drive.google.com/file/d/1wYqUtLeSC6YkUliQq2bnAN3LFdw5OJHF/view?usp=sharing"
  },
  {
    title: "Battle of The Bay",
    date: "Jan 19, 2025",
    location: "Dublin High School",
    description: "Gael Force Robotics' annual VEX Robotics Competition that brings teams from all over the Bay Area!",
    image: "/botb2024.jpg",
    size: "twoxoney",
  },
  {
    title: "All-Inclusive Workshop",
    date: "Nov 10, 2024",
    location: "Dublin High School",
    description: "A workshop open to all students that follows the same format as the GirlPowered Workshop.",
    image: "/showcase2024.jpg",
    size: "onexy",
  },
  {
    title: "Battle of The Bay Skills",
    date: "Feb 22, 2025",
    location: "Dublin High School",
    description: "An annual event that provides teams with a last-minute opportunity to earn qualifications for state events or the worlds competition.",
    image: "/skillsonly.jpg",
    size: "onexy",
  },
];