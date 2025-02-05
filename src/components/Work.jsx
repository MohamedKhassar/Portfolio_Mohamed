import ProjectCard from "./ProjectCard";

const Work = () => {
    const works = [
        {
          imgSrc: '/assets/imgs/nature.png',
          title: 'E-commerce Platform',
          tags: ['API', 'MVC', 'Development',"MERN-Stack","E-Commerce"],
          projectLink: 'https://www.naturemane.ma/'
        },
        {
          imgSrc: '/assets/imgs/portfolio.png',
          title: 'Portfolio Website',
          tags: ['Front-End', 'Web Development',"Web Design"],
          projectLink: 'https://khassar-porfolio.netlify.app/'
        },
        {
          imgSrc: '/assets/imgs/dashboard.png',
          title: 'Admin Dashboard',
          tags: [ 'Animation', 'Web Development',"Web Design","React-Charts"],
          projectLink: 'https://v1admin-dashboard.netlify.app/'
        },
        {
          imgSrc: '/assets/imgs/e-learning.png',
          title: 'E-learning Website',
          tags: ['Web-design', 'Web-Development',"Framer motion"],
          projectLink: 'https://med-learning.netlify.app/'
        },
        {
          imgSrc: '/assets/imgs/rst.png',
          title: 'Restaurant Landing Page',
          tags: ['Web-design', 'Web-Development',"Framer motion"],
          projectLink: 'https://rstkhassar.netlify.app/'
        },
        {
          imgSrc: '/assets/imgs/python.jpeg',
          title: 'Developing programs',
          tags: ['Python', 'Development',"Pandas"],
          projectLink: 'https://github.com/MohamedKhassar/Practice-Python'
        },
      ];
  return (
    <section id="work" className="section">
        <div className="container">
            <h2 className="headline-2 mb-8 reveal-up">My portfolio highlights
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