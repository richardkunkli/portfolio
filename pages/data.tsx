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
      <div className="flex flex-row items-center justify-between leading-5 flex-1 font-sans">
        <h2 className="text-lg font-bold tracking-widest uppercase rounded-lg cursor-default text-white">
          score
          <span className="text-black pl-1.5 pr-1 py-1 bg-white ml-1">
            board
          </span>
        </h2>
      </div>
    ),
    heading:
      "A scoreboard controller developed for the sports center in Balmazújváros",
    description:
      "The program was designed to be easily extendable so it can be used for any sport. Integration with the Hungarian Handball Association’s (MKSZ) API allows for tracking real time statistics and get players’ data.",
    data: [
      { valueName: "design", value: <p>figma</p> },
      { valueName: "prototype", value: <p>sveltekit</p> },
      {
        valueName: "website",
        value: (
          <p className="flex items-center text-neutral-500">coming soon</p>
        ),
      },
    ],
  },
  {
    title: <h2 className={`text-2xl ${styles.clamaric}`}>Clamaric</h2>,
    heading:
      "A whole new way to interconnect tutors with their potencial student",
    description:
      "Clamaric is a non-profit project imagined by two university student. Design lead by intuitiveness combined with user-friendliness. The purpose is to capitalize on knowledge and define a better way for student to find a tutor, and vice versa.",
    data: [
      { valueName: "language", value: <p>javascript</p> },
      { valueName: "framework", value: <p>react + nextjs</p> },
      {
        valueName: "website",
        value: (
          <a
            href="https://clamaric.hu"
            target="_blank"
            className="group flex items-center"
          >
            clamaric.hu
            <span className="ml-2 text-neutral-400 group-hover:text-inherit transition-colors duration-200">
              <ExportCircle className="h-3.5 w-3.5 mt-1" />
            </span>
          </a>
        ),
      },
    ],
  },
  {
    title: <h2 className="text-2xl font-semibold">Courier</h2>,
    heading: "Courier management reimagined and made easy",
    description:
      "Clamaric is a non-profit project imagined by two university student. Design lead by intuitiveness combined with user-friendliness. The purpose is to capitalize on knowledge and define a better way for student to find a tutor, and vice versa.",
    data: [
      { valueName: "design", value: <p>figma</p> },
      { valueName: "prototype", value: <p>swiftui</p> },
    ],
  },
];

export default sectionData;
