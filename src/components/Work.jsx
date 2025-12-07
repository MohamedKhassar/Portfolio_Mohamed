import { useState } from "react";
import { tags, works } from "../data";
import ProjectCard from "../UI/ProjectCard";
import AnimatedHeader from "../UI/AnimatedHeader";
import AnimatedPara from "../UI/AnimatedPara";

const Work = () => {
  const [tag, setTag] = useState("all")
  const [filteredWorks, setFilteredWorks] = useState(works)
  const handelFilterWork = (item) => {
    if (item === tag) {
      // clicked tag is already active, show all projects
      setTag("all");
      setFilteredWorks(works);
    } else {
      // filter by new tag
      setTag(item);
      setFilteredWorks(
        works.filter(work =>
          work.tags.some(t => t.toLowerCase() === item.toLowerCase())
        )
      );
    }
  }


  console.log(filteredWorks)
  return (
    <section id="work" className="section">
      <div className="container space-y-8">
        <AnimatedHeader className="headline-2 capitalize">
          My portfolio highlights
        </AnimatedHeader>
        <AnimatedPara>
          {tags.map((item, i) =>
            <span onClick={() => handelFilterWork(item)} key={i} className={`px-3 py-1.5  hover:!bg-slate-500/40 duration-300 cursor-pointer active:!bg-slate-400/40 !backdrop-blur-2xl rounded-lg mx-1 border !border-gray-600 text-gray-200 text-sm ${item.toLowerCase()==tag.toLowerCase()?"!bg-slate-400/40":"!bg-slate-600/40"}`}>{item}</span>
          )}
        </AnimatedPara>
        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(357px,_1fr))]">
          {filteredWorks.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard imgSrc={imgSrc}
              title={title}
              tags={tags}
              index={key}
              projectLink={projectLink} key={key} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work