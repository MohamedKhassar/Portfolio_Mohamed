import { skillItem } from "../data";
import AnimatedHeader from "../UI/AnimatedHeader";
import AnimatedPara from "../UI/AnimatedPara";
import SkillCard from "../UI/SkillCard";

const Skills = () => {

    return (
        <div id="skills" className="section">
            <div className="container">
                <AnimatedHeader className="headline-2">
                    Essential Tools I use
                </AnimatedHeader>
                <AnimatedPara className="text-zinc-400 mt-3 mb-8 max-w-[50ch]" delay={.4}>
                    Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.
                </AnimatedPara>
                <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                    {skillItem.map(({ imgSrc, label, desc }, key) => (
                        <SkillCard imgSrc={imgSrc}
                            label={label}
                            desc={desc} key={key}
                            index={key} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Skills