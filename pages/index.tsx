import Head from "next/head";
import Link from "next/link";

import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Skill from "../components/Skill";
import Projects from "../components/Projects";
import ContactScreen from "../components/ContactScreen";
import Image from "next/image";
import myFace from "../public/img/profile-picture.jpeg";

export default function Home() {
  return (
    <div
      className="h-screen bg-white text-rgb(36,36,36) snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#0074CC]/80
    scrollbar-thin relative
    "
    >
      <Head>
        <title>Chidinma&apos;s Portfolio</title>
      </Head>

      {/* Header */}
      <Header />

      {/* Hero */}
      <section id="hero">
        <Hero />
      </section>

      {/* About */}
      <section id="about">
        <About />
      </section>

      {/* Experience */}
      <section id="experience">
        <Experience />
      </section>

      {/* Skills */}
      <section id="skills">
        <Skill />
      </section>

      {/* Projects */}
      {/* <section id="projects">
        <Projects />
      </section> */}

      {/* Contact Me */}
      <section id="contactMe">
        <ContactScreen />
      </section>

      <Link className="" href="#hero">
        <footer className="bottom-3 w-full cursor-pointer sticky z-50">
          <div className="flex items-center justify-center">
            <Image
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
              src={myFace}
              alt=""
            />
          </div>
        </footer>
      </Link>
    </div>
  );
}
