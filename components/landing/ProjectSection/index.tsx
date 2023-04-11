import Image from "next/image";
import { Secular_One } from "next/font/google";
import LinkButton from "../LinkButton";

const secularOne = Secular_One({
  subsets: ["latin"],
  weight: ["400"],
});

const projects = [
  {
    imgSrc: "/imgs/comingsoon.jpg",
    category: "Web",
    title: "Coming Soon",
    link: "#",
  },
  {
    imgSrc: "/imgs/comingsoon.jpg",
    category: "PC",
    title: "Coming Soon",
    link: "#",
  },
  {
    imgSrc: "/imgs/comingsoon.jpg",
    category: "Web",
    title: "Coming Soon",
    link: "#",
  },
  {
    imgSrc: "/imgs/comingsoon.jpg",
    category: "PC",
    title: "Coming Soon",
    link: "#",
  },
  {
    imgSrc: "/imgs/comingsoon.jpg",
    category: "Web",
    title: "Coming Soon",
    link: "#",
  },
  {
    imgSrc: "/imgs/comingsoon.jpg",
    category: "PC",
    title: "Coming Soon",
    link: "#",
  },
  {
    imgSrc: "/imgs/comingsoon.jpg",
    category: "Web",
    title: "Coming Soon",
    link: "#",
  },
  {
    imgSrc: "/imgs/comingsoon.jpg",
    category: "PC",
    title: "Coming Soon",
    link: "#",
  },
];

const ProjectSection = () => {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center flex-col py-12">
      <h1
        className={`text-center text-4xl mb-12 font-medium ${secularOne.className}`}
      >
        Member Projects
      </h1>
      <div className="grid grid-cols-1 gap-6 mx-12 md:grid-cols-4">
        {projects.map((project, projectIdx) => (
          <div key={projectIdx} className="relative">
            <Image
              className="h-60 w-full"
              src={project.imgSrc}
              alt="project preview"
              width={100}
              height={100}
            />
            <div className="absolute w-full h-full left-0 top-0 opacity-0 hover:opacity-100 transition duration-300">
              <div className="bg-black opacity-50 w-full h-full left-0 top-0 absolute"></div>
              <div className="absolute z-10 w-full h-full flex items-center justify-center flex-col flex flex-row gap-y-4">
                <span className="text-green-400 font-medium text-lg">
                  {project.category}
                </span>
                <h3 className="text-white font-bold text-2xl">
                  {project.title}
                </h3>
                <LinkButton href={project.link} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
