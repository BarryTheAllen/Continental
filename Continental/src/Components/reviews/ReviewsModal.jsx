
import { FaXmark } from "react-icons/fa6"

const ReviewsModal = ({ item, isModalOpen, closeModal }) => {
    return (
        <div 
            className={`reviews-model ${isModalOpen ? "active" : ""}`}
            onClick={closeModal}
        >
            <div 
                className="reviews-model-body"
                onClick={(e) => e.stopPropagation()}
            >
                <FaXmark 
                    className="reviews-close-btn" 
                    onClick={(e) => {
                        e.stopPropagation()
                        closeModal()
                    }}
                />
                <h3>{item.title}</h3>
                <img src={item.imgSrc} alt="reviews" />
                <p>{item.description}</p>
            </div>
        </div>
    )
}

export default ReviewsModal