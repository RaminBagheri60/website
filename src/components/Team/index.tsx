import { TeamType } from "@/types/team";
import SingleTeam from "./SingleTeam";

const teamData: TeamType[] = [
  {
    id: 1,
    name: "Adveen Desuza",
    designation: "UI Designer",
    image: "/images/team/team-01.png",
    facebookLink: "/#",
    twitterLink: "/#",
    instagramLink: "/#",
  },
  {
    id: 2,
    name: "Jezmin uniya",
    designation: "Product Designer",
    image: "/images/team/team-02.png",
    facebookLink: "/#",
    twitterLink: "/#",
    instagramLink: "/#",
  },
  {
    id: 3,
    name: "Andrieo Gloree",
    designation: "App Developer",
    image: "/images/team/team-03.png",
    facebookLink: "/#",
    twitterLink: "/#",
    instagramLink: "/#",
  },
  {
    id: 4,
    name: "Jackie Sanders",
    designation: "Content Writer",
    image: "/images/team/team-04.png",
    facebookLink: "/#",
    twitterLink: "/#",
    instagramLink: "/#",
  },
];

const Team = () => {
  return (
    <section
      id="team"
      className="overflow-hidden bg-gray-1 pb-12 pt-20 dark:bg-dark-2 lg:pb-[90px] lg:pt-[120px]"
    >
      <div className="container">
        <div className="mb-[60px]">
          <h2 className="text-center text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[42px]">
            Our Team
          </h2>
          <p className="mx-auto mt-6 max-w-[800px] text-center text-lg text-body-color dark:text-dark-6 sm:text-xl md:text-2xl">
            Our team brings over 20 years of combined expertise in software
            engineering, AI/ML, and data science, with a deep specialization in
            computational biology and bioinformatics.
          </p>
        </div>

        {/* <div className="-mx-4 flex flex-wrap justify-center">
          {teamData.map((team, i) => (
            <SingleTeam key={i} team={team} />
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default Team;
