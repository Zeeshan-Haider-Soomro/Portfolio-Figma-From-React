import Banner from "../components/Banner/Banner"
import ExperienceCard from "../components/ExperienceCard/ExperienceCard"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import Projects from "../components/Projects/Projects"
import { info } from "../utils/Contact"
import { experienceCards1, experienceCards2, experienceCards3 } from "../utils/ExperienceCard"

const Home = () => {
  return (
    <div className="bg-black text-white">
        <Header/>
        <Banner/>
        <Projects/>
        <ExperienceCard data={experienceCards1}/>
        <ExperienceCard data={experienceCards2}/>
        <ExperienceCard data={experienceCards3}/>
        <Footer data={info}/>
    </div>
  )
}

export default Home