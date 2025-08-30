import "./Home.css"
import { FaCircleArrowRight, FaArrowDown } from "react-icons/fa6";
import bg from "../../assets/images/bg.jpg"

const Home = () => {
    
  return (
    <section className="home" id="home">
            <div className="container home-wrapper">
                <div className="home-info">
                    <h1>Enjoy hidden treasures around the planet</h1>
                    <h3>Join us on unforgettable journeys to the most breathtaking places on Earth.</h3>
                    <a href="" className="home-info-link inner-info-link">
                        Explore Tours
                        <FaCircleArrowRight className="fa-contact"/>
                    </a>
                </div>
            </div>
            <a href="#about" className="scroll-down">
                Scroll down
                <FaArrowDown className="arrow-down"/>
            </a>
        </section>
  )
}

export default Home