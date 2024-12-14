import { BiLogoPostgresql, BiLogoTypescript } from 'react-icons/bi';
import {
  FaJsSquare,
  FaPython,
  FaJava,
  FaReact,
  FaAngular,
  FaVuejs,
  FaHtml5,
  FaCss3Alt,
  FaPhp,
  FaNodeJs,
  FaDocker,
} from 'react-icons/fa';
import { BsBootstrapFill } from "react-icons/bs";
import { RiNextjsFill } from 'react-icons/ri';
import { SiCplusplus, SiRuby, SiGo, SiSwift, SiDjango, SiFlask, SiSpring, SiRubyonrails, SiLaravel, SiSymfony, SiExpress, SiTailwindcss, SiMongodb, SiMysql, SiPostman, SiJsonwebtokens, SiPandas, SiXampp, SiGit, SiGithub } from 'react-icons/si';
import { TbBrandFramerMotion } from 'react-icons/tb';
import { HiMiniCommandLine } from "react-icons/hi2";
const generateId = () => Number(Math.random() - Date.now());

const technologies = [
  {
    id: generateId(),
    title: "HTML",
    icon: function () { return <FaHtml5 color="#E34F26" className='md:size-8 size-7' /> }
  },
  {
    id: generateId(),
    title: "CSS",
    icon: function () { return <FaCss3Alt color="#1572B6" className='md:size-8 size-7' /> }
  },
  {
    id: generateId(),
    title: "JavaScript",
    icon: function () { return <FaJsSquare color="#f7df1e" className='md:size-8 size-7' /> }
  },
  {
    id: generateId(),
    title: "TypeScript",
    icon: function () { return <BiLogoTypescript color="#3178C6" className='md:size-8 size-7' /> }
  },

  {
    id: generateId(),
    title: "Python",
    icon: function () { return <FaPython color="#366998" className='md:size-8 size-7' /> }
  },
  {
    id: generateId(),
    title: "Java",
    icon: function () { return <FaJava color="#007396" className='md:size-8 size-7' /> }
  },
  {
    id: generateId(),
    title: "C++",
    icon: function () { return <SiCplusplus color="#00599C" className='md:size-8 size-7' /> }
  },
  {
    id: generateId(),
    title: "Ruby",
    icon: function () { return <SiRuby color="#CC342D" className='md:size-8 size-7' /> }
  },
  {
    id: generateId(),
    title: "Go",
    icon: function () { return <SiGo color="#00ADD8" className='md:size-8 size-7' /> }
  },
  {
    id: generateId(),
    title: "Swift",
    icon: function () { return <SiSwift color="#FA7343" className='md:size-8 size-7' /> }
  },
  {
    id: generateId(),
    title: "PHP",
    icon: function () { return <FaPhp color="#777BB4" className='md:size-8 size-7' /> }
  },
  {
    id: generateId(),
    title: "C#",
    icon: function () {
      return <SiCplusplus color="#68217A" className='md:size-8 size-7' />
    }
  },

  {
    id: generateId(),
    title: "React",
    icon: function () { return <FaReact color="#61DAFB" className='md:size-8 size-7' /> }
  },
  {
    id: generateId(),
    title: "Angular",
    icon: function () { return <FaAngular color="#DD0031" className='md:size-8 size-7' /> }
  },
  {
    id: generateId(),
    title: "Vue",
    icon: function () { return <FaVuejs color="#4FC08D" className='md:size-8 size-7' /> }
  },
  {
    id: generateId(),
    title: "Django",
    icon: function () { return <SiDjango color="#092E20" className='md:size-8 size-7' /> }
  },
  {
    id: generateId(),
    title: "Flask",
    icon: function () { return <SiFlask color="#000000" className='md:size-8 size-7' /> }
  },
  {
    id: generateId(),
    title: "Spring",
    icon: function () { return <SiSpring color="#6DB33F" className='md:size-8 size-7' /> }
  },
  {
    id: generateId(),
    title: "Express",
    icon: function () { return <SiExpress color="#000000" className='md:size-8 size-7' /> }
  },
  {
    id: generateId(),
    title: "Rails",
    icon: function () { return <SiRubyonrails color="#CC0000" className='md:size-8 size-7' /> }
  },
  {
    id: generateId(),
    title: "Laravel",
    icon: function () { return <SiLaravel color="#FF2D20" className='md:size-8 size-7' /> }
  },
  {
    id: generateId(),
    title: "Symfony",
    icon: function () { return <SiSymfony color="#000000" className='md:size-8 size-7' /> }
  },
  {
    id: generateId(),
    title: "Node.js",
    icon: function () { return <FaNodeJs color="#339933" className='md:size-8 size-7' /> }
  },
  {
    id: generateId(),
    title: "Tailwind CSS",
    icon: function () { return <SiTailwindcss color="#3EBFF8" className='md:size-8 size-7' /> }
  },
  ,
  {
    id: generateId(),
    title: "Bootstrap",
    icon: function () { return <BsBootstrapFill color="#8210F5" className='md:size-8 size-7' /> }
  },
  {
    id: generateId(),
    title: "Framer Motion",
    icon: function () { return <TbBrandFramerMotion color="#F100B3" className='md:size-8 size-7' /> }
  },
  {
    id: generateId(),
    title: "Next.js",
    icon: function () { return <RiNextjsFill color="#000000" className='md:size-8 size-7' /> }
  },
  {

    id: generateId(),
    title: "MySQL",
    icon: function () { return <SiMysql color="#00758F" className='md:size-8 size-7' /> }
  },
  {
    id: generateId(),
    title: "MongoDB",
    icon: function () { return <SiMongodb color="#47A248" className='md:size-8 size-7' /> }
  }
  ,
  {
    id: generateId(),
    title: "Postman",
    icon: function () { return <SiPostman color="#FF6C37" className='md:size-8 size-7' /> }
  }
  ,
  {
    id: generateId(),
    title: "jwt",
    icon: function () { return <SiJsonwebtokens color="#F30158" className='md:size-8 size-7' /> }
  }
  ,
  {
    id: generateId(),
    title: "docker",
    icon: function () { return <FaDocker color="#2468EE" className='md:size-8 size-7' /> }
  }
  ,
  {
    id: generateId(),
    title: "postgresql",
    icon: function () { return <BiLogoPostgresql color="#008bb9" className='md:size-8 size-7' /> }
  }
  ,
  {
    id: generateId(),
    title: "cmd",
    icon: function () { return <HiMiniCommandLine className='md:size-8 size-7' /> }
  },
  {
    id: generateId(),
    title: "pandas",
    icon: function () { return <SiPandas className='md:size-8 size-7' /> }
  },
  {
    id: generateId(),
    title: "xampp",
    icon: function () {
      return <SiXampp color="#F37623" className='md:size-8 size-7' />

    }
  },
  {
    id: generateId(),
    title: "git",
    icon: function () { return <SiGit color="#F37623" className='md:size-8 size-7' /> }
  },
  {
    id: generateId(),
    title: "github",
    icon: function () { return <SiGithub color="#181717" className='md:size-8 size-7' /> }
  }
]


export default technologies;
