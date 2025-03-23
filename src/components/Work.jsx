import { works } from "../data";
import ProjectCard from "./ProjectCard";

const Work = () => {
    
  return (
    <section id="work" className="section">
        <div className="container">
            <h2 className="headline-2 mb-8 reveal-up capitalize">
              My portfolio highlights
            </h2>
            <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                {works.map(({imgSrc,title,tags,projectLink},key)=>(
                    <ProjectCard imgSrc={imgSrc}
                    title={title}
                    tags={tags}
                    classes={"reveal-up"}
                    projectLink={projectLink} key={key} />
                ))}
            </div>
        </div>
    </section>
  )
}

export default Work