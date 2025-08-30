import "./About.css"
import SectionTitle from "../sectionTitle/SectionTitle";
import { aboutImg } from "../../assets/images"
const About = () => {
  return (
    <section className="about section" id="about">
            <div className="container flex-center">
                <SectionTitle title="About us" subtitle="About us"/>
                <div className="about-wrapper">
                    <div className="about-img"><img src={aboutImg} alt="about"/></div>
                    <div className="about-info">
                        <div className="description">
                            <p>
Travel transforms us in ways we never expect. It opens our eyes to new cultures, challenges our perspectives, and creates memories that last a lifetime. At Wanderlust Adventures, we believe in meaningful travel that respects local communities and preserves natural wonders.
Our team of expert guides has spent decades exploring every corner of the globe. We know the hidden trails, the local eateries with the most authentic flavors, and the perfect times to visit to avoid crowds.
Whether you're looking for a relaxing beach getaway, an adventurous mountain trek, or a cultural immersion in ancient cities, we have the perfect journey for you.
Join our community of passionate travelers and start planning your next adventure today. The world is waiting to be discovered.

                            </p>
                        </div>
                        <ul className="professional-list">
                            <li className="list-item">
                                <span className="number">5+</span>
                                <span className="text">Years of experience</span>
                            </li>
                            <li className="list-item">
                                <span className="number">200K+</span>
                                <span className="text">Happy Customers</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default About