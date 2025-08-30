import { useState } from "react"
import ReviewsModal from "./ReviewsModal"

const ReviewsItem = ({item}) => {

    const [isModalOpen, setIsModalOpen] = useState(false)
    const openModal = () => {
        setIsModalOpen(true)
    }
    const closeModal = () => {
        setIsModalOpen(false)
    }

  return (
        <div className="reviews-img-card" onClick={openModal}>
        <div className="img-card">
            <div className="overlay"></div>
            <div className="info">
                <h3>{item.title}</h3>
                <span>{item.category}</span>
            </div>
            <img src={item.imgSrc} alt={item.title}/>
        </div>
        {isModalOpen && <ReviewsModal item={item} isModalOpen={isModalOpen} closeModal={closeModal} />}
        </div>
)
}

export default ReviewsItem