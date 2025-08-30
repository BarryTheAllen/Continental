import "./Awards.css"
import SectionTitle from "../sectionTitle/SectionTitle"
import Awards from "./Awards"

const AwardsInfo = () => {
  return (
    <section className="awards section" id="awards">
            <div className="container flex-center">
                <SectionTitle title="Awards" subtitle="Awards"/>
                <div className="inner-content">
                    <div className="awards-description">
                        <h3>Awards</h3>
                        <p>
                            Awards that speak for themselves.
                            We are proud that our income is highly appreciated by the world's leading tourism associations.
                        </p>
                    </div>
                    <div className="awards-info awards-all">
                        <Awards/>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default AwardsInfo