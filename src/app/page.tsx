import ContactUs from "@/components/ContactUs"
import Education from "@/components/Education"
import HomePage from "@/components/HomePage"
import ProjectsSection from "@/components/ProjectsSection"
import Skills from "@/components/Skills"
import 'react-toastify/dist/ReactToastify.css';

const page = () => {
  return (
    <>
      <HomePage />
      <ProjectsSection />
      <Education />
      <Skills />
      <ContactUs />
    </>
  )
}

export default page