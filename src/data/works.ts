import gallery1 from "/assets/works/gallery-1.jpeg";
import gallery2 from "/assets/works/gallery-2.jpg";
import gallery3 from "/assets/works/gallery-3.jpeg";
import gallery4 from "/assets/works/gallery-4.jpg";
import gallery5 from "/assets/works/gallery-5.jpeg";
import gallery6 from "/assets/works/gallery-6.jpg";
import gallery7 from "/assets/works/gallery-7.jpeg";
import gallery8 from "/assets/works/gallery-8.jpeg";
import gallery9 from "/assets/works/gallery-9.jpeg";
import gallery10 from "/assets/works/gallery-10.jpeg";
import gallery11 from "/assets/works/gallery-11.jpeg";
import gallery12 from "/assets/works/gallery-12.jpeg";
import gallery13 from "/assets/works/gallery-13.jpeg";
import gallery14 from "/assets/works/gallery-14.jpeg";
import gallery15 from "/assets/works/gallery-15.jpeg";
import gallery16 from "/assets/works/gallery-16.jpeg";
import gallery17 from "/assets/works/gallery-17.jpeg";
import gallery18 from "/assets/works/gallery-18.jpeg";
import gallery19 from "/assets/works/gallery-19.jpeg";
import gallery20 from "/assets/works/gallery-20.jpeg";
import gallery21 from "/assets/works/gallery-21.jpeg";
import gallery22 from "/assets/works/gallery-22.jpeg";

export interface WorkItem {
  src: string;
  title: string;
  category?: string;
  id: number;
  orientation: string;
}

export const Works: WorkItem[] = [
  {
    id: 1,
    src: gallery1,
    title: "gallery1",
    orientation: "landscape",
  },
  {
    id: 2,
    src: gallery2,
    title: "gallery2",
    orientation: "portrait",
  },
  {
    id: 3,
    src: gallery3,
    title: "gallery3",
    orientation: "landscape",
  },
  {
    id: 4,
    src: gallery4,
    title: "gallery4",
    orientation: "portrait",
  },
  {
    id: 5,
    src: gallery5,
    title: "gallery5",
    orientation: "landscape",
  },
  {
    id: 6,
    src: gallery6,
    title: "gallery6",
    orientation: "portrait",
  },
  {
    id: 7,
    src: gallery7,
    title: "gallery7",
    orientation: "landscape",
  },
  {
    id: 8,
    src: gallery8,
    title: "gallery8",
    orientation: "portrait",
  },
  {
    id: 9,
    src: gallery9,
    title: "gallery9",
    orientation: "portrait",
  },
  {
    id: 10,
    src: gallery10,
    title: "gallery10",
    orientation: "portrait",
  },
  {
    id: 11,
    src: gallery11,
    title: "gallery11",
    orientation: "portrait",
  },
  {
    id: 12,
    src: gallery12,
    title: "gallery12",
    orientation: "landscape",
  },
  {
    id: 13,
    src: gallery13,
    title: "gallery13",
    orientation: "portrait",
  },
  {
    id: 14,
    src: gallery14,
    title: "gallery14",
    orientation: "landscape",
  },
  {
    id: 15,
    src: gallery15,
    title: "gallery15",
    orientation: "portrait",
  },
  {
    id: 16,
    src: gallery16,
    title: "gallery16",
    orientation: "landscape",
  },
  {
    id: 17,
    src: gallery17,
    title: "gallery17",
    orientation: "portrait",
  },
  {
    id: 18,
    src: gallery18,
    title: "gallery18",
    orientation: "landscape",
  },
  {
    id: 19,
    src: gallery19,
    title: "gallery19",
    orientation: "portrait",
  },
  {
    id: 20,
    src: gallery20,
    title: "gallery20",
    orientation: "portrait",
  },
  {
    id: 21,
    src: gallery21,
    title: "gallery21",
    orientation: "portrait",
  },
  {
    id: 22,
    src: gallery22,
    title: "gallery22",
    orientation: "portrait",
  },
];
