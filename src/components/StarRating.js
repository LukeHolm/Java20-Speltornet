import Star from '../img/Star_Rating.svg'
import GreyStar from '../img/Star_Rating2.svg'

const StarRating = ({ rep }) => {

    if (rep === 5) {
        return (
            <>
                <img className="star-rating" src={Star} alt="gold star" />
                <img className="star-rating" src={Star} alt="gold star" />
                <img className="star-rating" src={Star} alt="gold star" />
                <img className="star-rating" src={Star} alt="gold star" />
                <img className="star-rating" src={Star} alt="gold star" />
            </>
        )
    } else if (rep === 4) {
        return (
            <>
                <img className="star-rating" src={Star} alt="gold star" />
                <img className="star-rating" src={Star} alt="gold star" />
                <img className="star-rating" src={Star} alt="gold star" />
                <img className="star-rating" src={Star} alt="gold star" />
                <img className="star-rating" src={GreyStar} alt="gold star" />
            </>
        )
    } else if (rep === 3) {
        return (
            <>
                <img className="star-rating" src={Star} alt="gold star" />
                <img className="star-rating" src={Star} alt="gold star" />
                <img className="star-rating" src={Star} alt="gold star" />
                <img className="star-rating" src={GreyStar} alt="gold star" />
                <img className="star-rating" src={GreyStar} alt="gold star" />
            </>
        )
    } else if (rep === 2) {
        return (
            <>
                <img className="star-rating" src={Star} alt="gold star" />
                <img className="star-rating" src={Star} alt="gold star" />
                <img className="star-rating" src={GreyStar} alt="gold star" />
                <img className="star-rating" src={GreyStar} alt="gold star" />
                <img className="star-rating" src={GreyStar} alt="gold star" />
            </>
        )
    } else if (rep === 1) {
        return (
            <>
                <img className="star-rating" src={Star} alt="gold star" />
                <img className="star-rating" src={GreyStar} alt="gold star" />
                <img className="star-rating" src={GreyStar} alt="gold star" />
                <img className="star-rating" src={GreyStar} alt="gold star" />
                <img className="star-rating" src={GreyStar} alt="gold star" />
            </>
        )
    } else if (rep === 0) {
        return (
            <>
                <img className="star-rating" src={GreyStar} alt="gold star" />
                <img className="star-rating" src={GreyStar} alt="gold star" />
                <img className="star-rating" src={GreyStar} alt="gold star" />
                <img className="star-rating" src={GreyStar} alt="gold star" />
                <img className="star-rating" src={GreyStar} alt="gold star" />
            </>
        )
    }



}

export default StarRating;