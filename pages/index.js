import Head from "next/head";
import styles from "../styles/Home.module.css";
import ContainerBlock from "../components/ContainerBlock";
import FavouriteProjects from "../components/FavouriteProjects";
import LatestCode from "../components/LatestCode";
import Hero from "../components/Hero";
import getLatestRepos from "@lib/getLatestRepos";
import userData from "@constants/data";
import Experience from "@components/Experience";
import Projects from "@components/Projects";
import Education from "@components/Education";
import AboutMe from "@components/AboutMe";

export default function Home({ repositories }) {
  return (
    <ContainerBlock
      title="Mirza - Portfolio"
      description="I'm Mirza, a software developer. I have working experience in frontend and backend web development."
    >
      <Hero />
      <AboutMe />
      <Experience />
      {/* <LatestCode repositories={repositories} /> */}
      <Education />
      <Projects />
    </ContainerBlock>
  );
}

export const getServerSideProps = async () => {
  console.log(process.env.GITHUB_AUTH_TOKEN);
  let token = process.env.GITHUB_AUTH_TOKEN;

  const repositories = await getLatestRepos(userData, token);
  // console.log("REPOSITORIES", repositories);

  return {
    props: {
      repositories,
    },
  };
};
