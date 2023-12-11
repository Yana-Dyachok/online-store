import './_reviews-cards.scss'
const ReviewsCards=({reviews})=> {
  const {reviewName, reviewPictureURI, reviewStars, reviewText}=reviews;
    return (
      <article className="reviews-card">
          <img className='reviews-card__img' src={reviewPictureURI} alt="photo" width="199" height="200"/>
           <div className='reviews-card__text'>
            <p className='reviews-card__name'>{reviewName}</p>
             <div className='reviews-card__stars'  data-stars={reviewStars}></div>
             <p className='reviews-card__description'>{reviewText}</p>
           </div>
      </article>
    )
}

export default ReviewsCards