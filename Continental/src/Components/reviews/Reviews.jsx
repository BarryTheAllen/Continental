import ReviewsData from "../../Data/ReviewsData"
import SectionTitle from "../sectionTitle/SectionTitle"
import "./Reviews.css"
import ReviewsItem from "./ReviewsItem"

const Reviews = () => {
  return (
    <section className="reviews section" id="reviews">
            <div className="container flex-center">
                <SectionTitle title="Reviews" subtitle="Reviews"/>
                <div className="reviews-wrapper">
                  {ReviewsData.map(item => {
                    return (
                    <ReviewsItem key={item.id} item={item}/>
                  )
                  })}
                </div>
            </div>
        </section>
  )
}

export default Reviews