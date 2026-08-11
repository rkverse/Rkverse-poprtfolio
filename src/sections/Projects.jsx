import { projects } from '../data/portfolio'
import SectionHeading from '../components/SectionHeading'
import ProjectCard from '../components/ProjectCard'
import Reveal from '../components/Reveal'

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="container-px">
        <Reveal>
          <SectionHeading
            index="03"
            label="Projects"
            title="Selected work"
            description="A mix of client, freelance, and product builds across web and e-commerce."
          />
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 100}>
              <ProjectCard project={project} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
