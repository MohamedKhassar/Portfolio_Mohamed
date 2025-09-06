import AnimatedHeader from "./AnimatedHeader";
import AnimatedPara from "./AnimatedPara";
import SkillCard from "./SkillCard";

const Skills = () => {
    const skillItem = [
        {
            imgSrc: '/assets/imgs/python.svg',
            label: 'Python',
            desc: 'Programming Language'
        },
        {
            imgSrc: '/assets/imgs/css3.svg',
            label: 'CSS',
            desc: 'User Interface'
        },
        {
            imgSrc: '/assets/imgs/javascript.svg',
            label: 'JavaScript',
            desc: 'Interaction'
        },
        {
            imgSrc: '/assets/imgs/typescript.svg',
            label: 'Typescript',
            desc: 'Interaction'
        },
        {
            imgSrc: '/assets/imgs/nodejs.svg',
            label: 'NodeJS',
            desc: 'Web Server'
        },
        {
            imgSrc: '/assets/imgs/expressjs.svg',
            label: 'ExpressJS',
            desc: 'Node Framework'
        },
        {
            imgSrc: '/assets/imgs/mongodb.svg',
            label: 'MongoDB',
            desc: 'Database'
        },
        {
            imgSrc: '/assets/imgs/react.svg',
            label: 'React',
            desc: 'Framework'
        },
        {
            imgSrc: '/assets/imgs/tailwindcss.svg',
            label: 'TailwindCSS',
            desc: 'User Interface'
        },
        {
            imgSrc: '/assets/imgs/nextjs.svg',
            label: 'NextJs',
            desc: 'ReactJS Framework'
        },
        {
            imgSrc: '/assets/imgs/postman.svg',
            label: 'Postman',
            desc: 'API Platform'
        },
    ];
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