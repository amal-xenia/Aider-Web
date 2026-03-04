import gallery1 from "/assets/works/gallery-1.jpg";
import gallery2 from "/assets/works/gallery-2.jpg";
import gallery3 from "/assets/works/gallery-3.jpg";
import gallery4 from "/assets/works/gallery-4.jpg";
import gallery5 from "/assets/works/gallery-5.jpg";
import gallery6 from "/assets/works/gallery-6.jpg";

export interface Works {
  src: string;
  title: string;
  category: string;
}

export const works: Works[] = [
  {
    src: gallery1,
    title: "Commercial Building LPS Installation",
    category: "Installation",
  },
  {
    src: gallery2,
    title: "Industrial Chimney Protection",
    category: "Industrial",
  },
  { src: gallery3, title: "Earthing Pit Construction", category: "Earthing" },
  { src: gallery4, title: "Telecom Tower Protection", category: "Telecom" },
  {
    src: gallery5,
    title: "Solar Farm Lightning Masts",
    category: "Renewable Energy",
  },
  { src: gallery6, title: "Hospital LPS System", category: "Healthcare" },
];
