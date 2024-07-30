import { BiLogoTypescript } from 'react-icons/bi';
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
import { SiCplusplus, SiRuby, SiGo, SiSwift, SiDjango, SiFlask, SiSpring, SiRubyonrails, SiLaravel, SiSymfony, SiExpress, SiTailwindcss, SiMongodb, SiMysql, SiPostman, SiJsonwebtokens } from 'react-icons/si';
import { TbBrandFramerMotion } from 'react-icons/tb';
const generateId = () => Number(Math.random() - Date.now());

const technologies = [
  {
    id: generateId(),
    title: "HTML",
    icon: function () { return <FaHtml5 color="#E34F26" size={36} /> }
  },
  {
    id: generateId(),
    title: "CSS",
    icon: function () { return <FaCss3Alt color="#1572B6" size={36} /> }
  },
  {
    id: generateId(),
    title: "JavaScript",
    icon: function () { return <FaJsSquare color="#f7df1e" size={36} /> }
  },
  {
    id: generateId(),
    title: "TypeScript",
    icon: function () { return <BiLogoTypescript color="#3178C6" size={36} /> }
  },

  {
    id: generateId(),
    title: "Python",
    icon: function () { return <FaPython color="#366998" size={36} /> }
  },
  {
    id: generateId(),
    title: "Java",
    icon: function () { return <FaJava color="#007396" size={36} /> }
  },
  {
    id: generateId(),
    title: "C++",
    icon: function () { return <SiCplusplus color="#00599C" size={36} /> }
  },
  {
    id: generateId(),
    title: "Ruby",
    icon: function () { return <SiRuby color="#CC342D" size={36} /> }
  },
  {
    id: generateId(),
    title: "Go",
    icon: function () { return <SiGo color="#00ADD8" size={36} /> }
  },
  {
    id: generateId(),
    title: "Swift",
    icon: function () { return <SiSwift color="#FA7343" size={36} /> }
  },
  {
    id: generateId(),
    title: "PHP",
    icon: function () { return <FaPhp color="#777BB4" size={36} /> }
  },
  {
    id: generateId(),
    title: "C#",
    icon: function () {
      return <SiCplusplus color="#68217A" size={36} />
    }
  },

  {
    id: generateId(),
    title: "React",
    icon: function () { return <FaReact color="#61DAFB" size={36} /> }
  },
  {
    id: generateId(),
    title: "Angular",
    icon: function () { return <FaAngular color="#DD0031" size={36} /> }
  },
  {
    id: generateId(),
    title: "Vue",
    icon: function () { return <FaVuejs color="#4FC08D" size={36} /> }
  },
  {
    id: generateId(),
    title: "Django",
    icon: function () { return <SiDjango color="#092E20" size={36} /> }
  },
  {
    id: generateId(),
    title: "Flask",
    icon: function () { return <SiFlask color="#000000" size={36} /> }
  },
  {
    id: generateId(),
    title: "Spring",
    icon: function () { return <SiSpring color="#6DB33F" size={36} /> }
  },
  {
    id: generateId(),
    title: "Express",
    icon: function () { return <SiExpress color="#000000" size={36} /> }
  },
  {
    id: generateId(),
    title: "Rails",
    icon: function () { return <SiRubyonrails color="#CC0000" size={36} /> }
  },
  {
    id: generateId(),
    title: "Laravel",
    icon: function () { return <SiLaravel color="#FF2D20" size={36} /> }
  },
  {
    id: generateId(),
    title: "Symfony",
    icon: function () { return <SiSymfony color="#000000" size={36} /> }
  },
  {
    id: generateId(),
    title: "Node.js",
    icon: function () { return <FaNodeJs color="#339933" size={36} /> }
  },
  {
    id: generateId(),
    title: "Tailwind CSS",
    icon: function () { return <SiTailwindcss color="#3EBFF8" size={36} /> }
  },
  ,
  {
    id: generateId(),
    title: "Bootstrap",
    icon: function () { return <BsBootstrapFill color="#8210F5" size={36} /> }
  },
  {
    id: generateId(),
    title: "Framer Motion",
    icon: function () { return <TbBrandFramerMotion color="#F100B3" size={36} /> }
  },
  {
    id: generateId(),
    title: "Next.js",
    icon: function () { return <RiNextjsFill color="#000000" size={36} /> }
  },
  {

    id: generateId(),
    title: "MySQL",
    icon: function () { return <SiMysql color="#00758F" size={36} /> }
  },
  {
    id: generateId(),
    title: "MongoDB",
    icon: function () { return <SiMongodb color="#47A248" size={36} /> }
  }
  ,
  {
    id: generateId(),
    title: "Postman",
    icon: function () { return <SiPostman color="#FF6C37" size={36} /> }
  }
  ,
  {
    id: generateId(),
    title: "jwt",
    icon: function () { return <SiJsonwebtokens color="#F30158" size={36} /> }
  }
  ,
  {
    id: generateId(),
    title: "docker",
    icon: function () { return <FaDocker color="#2468EE" size={36} /> }
  }
];


export default technologies;
