import { useTranslation } from "react-i18next";
import { skillItem } from "../data";
import AnimatedHeader from "../UI/AnimatedHeader";
import AnimatedPara from "../UI/AnimatedPara";
import SkillCard from "../UI/SkillCard";

const Skills = () => {
    const { t } = useTranslation("skills")
    return (
        <div id="skills" className="section">
            <div className="container">
                <AnimatedHeader className="headline-2">
                    {t("title")}
                </AnimatedHeader>
                <AnimatedPara className="text-zinc-400 mt-3 mb-8 max-w-[50ch]" delay={.4}>
                    {t("text")}
                </AnimatedPara>
                <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))]">
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