import services from "../../Data/services"
import SectionTitle from "../sectionTitle/SectionTitle"
import ServiceItem from "./ServiceItem"
import "./Services.css"

const Services = () => {
  return (
    <section className="services section" id="services">
            <div className="container flex-center">
                <SectionTitle title="Services"subtitle="Services"/>
                <div className="services-wrapper">
                    <h3 className="services-description">What we provide</h3>
                    <ul className="services-list">
                      <ServiceItem services={services}/>
                    </ul>
                </div>
            </div>
    </section>
  )
}

export default Services