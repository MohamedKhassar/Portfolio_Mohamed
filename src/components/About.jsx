import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { LuLoaderCircle } from "react-icons/lu";
const About = () => {
  const [repoCount, setRepoCount] = useState(null);
  const username = "mohamedkhassar";

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((data) => setRepoCount(Math.floor(data.public_repos / 10) * 10))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <motion.section
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: .4, delay: .2 } }}
      id="about" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
            Welcome! I&apos;m Mohamed, a professional web developer with a knack for crafting visually stunning and highly functional websites. Combining creativity and technical expertise. I transform your vision into digital masterpiece that excels in both appearance and performance.
          </p>
          <div className="flex flex-wrap gap-4 items-center md:gap-7">
            {repoCount !== null ?
              <div>
                <div className="flex items-center md:mb-2">
                  <span className="text-2xl font-semibold md:text-4xl">{repoCount}</span>
                  <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                </div>
                <p className="text-sm text-zinc-400">Projects Done</p>
              </div>
              :
              <LuLoaderCircle className="animate-spin size-8" />}
            <img src="/assets/imgs/logo.svg"
              alt="Mohamed_Khassar"
              loading="lazy"
              width={30}
              height={30}
              className="ml-auto md:w-[40px] md:h-[40px]" />
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default About