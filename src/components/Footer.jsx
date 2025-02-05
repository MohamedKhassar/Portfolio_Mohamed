import { CgChevronRight } from "react-icons/cg";
import { ButtonPrimary } from "./Button";

const Footer = () => {
  const sitemap = [
    {
      label: 'Home',
      href: '#home'
    },
    {
      label: 'About',
      href: '#about'
    },
    {
      label: 'Skills',
      href: '#skills'
    },
    {
      label: 'Work',
      href: '#work'
    },
    {
      label: 'Contact me',
      href: '#contact'
    }
  ];

  const socials = [
    {
      label: 'GitHub',
      href: 'https://github.com/mohamedkhassar'
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/mohamedkhassar'
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/mohamed_khassar'
    },
  ];
  return (
    <footer className="section">
      <div className="container">
        <div className="lg:grid lg:grid-cols-2">
          <div className="mb-10">
            <h2 className="headline-1 mb-8 lg:max-w-[12ch] reveal-up">
              Let&apos;s work together today!
            </h2>
            <ButtonPrimary href="mailto:mohamedkhassar775@gmail.com" label={"start project"} classes={"capitalize w-fit reveal-up"} icon={<CgChevronRight />} />
          </div>
          <div className="grid grid-cols-2 gap-4 lg:pl-20">
            <div className="">
              <p className="mb-2 reveal-up">Sitemap</p>
              <ul>
                {sitemap.map(({ label, href }, key) => (
                  <li key={key}>
                    <a href={href}
                      className="block text-sm text-zinc-400 py-1 transition-colors  hover:text-zinc-200 reveal-up">{label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="">

              <p className="mb-2 reveal-up">Socials</p>
              <ul>
                {socials.map(({ label, href }, key) => (
                  <li key={key}>
                    <a href={href}
                      className="block text-sm text-zinc-400 py-2 transition-colors  hover:text-zinc-200 reveal-up"
                      target="_blank">{label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
        <div className="flex items-center justify-between pt-10 mb-8">
          <a href="/#" className="logo">
            <img src="assets/imgs/logo.svg"
              width={40} alt=""
              height={40}
            />
          </a>
          <p className=" text-zinc-500 text-sm">
            &copy; {new Date().getFullYear()} <span className="text-zinc-200">Mohamed Khassar</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer