"use client"; 
import { useEffect } from "react";
import NavBar from "@/app/components/navbar";
import ProjectCard from "@/app/components/cards/ProjectCard";
import About from "@/app/components/about";
import projects from "@/app/data/projects";
import Footer from "./components/footer";

export default function Home() {
  useEffect(() => {
    // Set up IntersectionObserver for smooth section animations
    const sections = document.querySelectorAll("section");
    
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          entry.target.classList.remove("hidden");
        }
      });
    }, {
      threshold: 0.2, // Trigger when 20% of the section is in view
    });
    
    sections.forEach(section => {
      section.classList.add("hidden");
      observer.observe(section);
    });
  }, []);

  return (
    <div>
      <div id="navbar">
        <NavBar />
      </div>

      {/* Section 3: About */}
      <section id="about">
        <About />
      </section>

      {/* Section 2: Projects */}
      <section id="projects">
        <h2>Projects</h2>
        <div className="content">
        {projects.map(project => (
            <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                url={project.url}
            />
            ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
