import styles from "../styles/Home.module.css";
import { ExportCircle } from "iconsax-react";

interface SectionProps {
  title: JSX.Element;
  heading: string;
  description: string;
  data: { valueName: string; value: JSX.Element }[];
}

const sectionData: SectionProps[] = [
  {
    title: (
      <div className="flex flex-row items-center justify-between leading-5 flex-1">
        <p className="text-lg font-bold tracking-widest uppercase rounded-lg cursor-default text-white">
          score
          <span className="text-black px-1.5 py-1 ml-1 bg-white">board</span>
        </p>
      </div>
    ),
    heading:
      "A scoreboard controller developed for the sports center in Balmazújváros",
    description:
      "The program was designed to be easily extendable so it can be used for any sport. Integration with the Hungarian Handball Association’s (MKSZ) API allows for tracking real time statistics and get players’ data.",
    data: [
      { valueName: "design", value: <p>figma</p> },
      { valueName: "framework", value: <p>sveltekit</p> },
      {
        valueName: "website",
        value: (
          <p className="flex items-center text-neutral-500">coming soon</p>
        ),
      },
    ],
  },
  // {
  //   title: <h2 className={`text-2xl ${styles.clamaric}`}>Clamaric</h2>,
  //   heading:
  //     "A whole new way to interconnect tutors with their potencial student",
  //   description:
  //     "Clamaric is a non-profit project imagined by two university student. Design lead by intuitiveness combined with user-friendliness. The purpose is to capitalize on knowledge and define a better way for student to find a tutor, and vice versa.",
  //   data: [
  //     { valueName: "language", value: <p>javascript</p> },
  //     { valueName: "framework", value: <p>react + nextjs</p> },
  //     {
  //       valueName: "website",
  //       value: (
  //         <a
  //           href="https://clamaric.hu"
  //           target="_blank"
  //           className="group flex items-center"
  //         >
  //           clamaric.hu
  //           <span className="ml-2 text-neutral-400 group-hover:text-inherit transition-colors duration-200">
  //             <ExportCircle className="h-3.5 w-3.5 mt-1" />
  //           </span>
  //         </a>
  //       ),
  //     },
  //   ],
  // },
  {
    title: <p className="text-2xl font-semibold">Courier</p>,
    heading: "Courier management reimagined and made easy",
    description:
      "The multiplatform application helps restaurants easily distribute orders to their couriers. A former application completely reimagined and designed to the expectations of 2022. Interface elements fitted to be useful in every scenario.",
    data: [
      { valueName: "design", value: <p>figma</p> },
      { valueName: "prototype", value: <p>swiftui</p> },
    ],
  },
];

export default sectionData;
