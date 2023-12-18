import CTA from "../components/CTA"
import { skills } from "../constants"

const About = () => {
  return (
    <section className="max-container">
      <h1 className=" head-text">
        Hello, I'm <span className="blue-gradient_text font-semibold drop-shadow">Alireza</span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
        Welcome to my digital space! I'm a frontend wizard conjuring web wonders with JavaScript spells, HTML potions, and CSS enchantments. Step into the realm of my creations!
        </p>
      </div>
      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">
          My Skills
        </h3>
        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skills)=> (
            <div className="block-container w-20 h-20">
              <div className="btn-front rounded-xl flex justify-center items-center cursor-pointer">
                <img src={skills.imageUrl} alt={skills.name} className="w-1/2 h-1/2 object-contain" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr className="border-slate-300 mt-8" />
      <CTA />
    </section>
  )
}

export default About