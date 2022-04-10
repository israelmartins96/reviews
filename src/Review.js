// ***IMPORTS*** //
// React
import React from 'react';
// Font Awesome Icons
import { FaQuoteRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// ***COMPONENT FOR THE REVIEWS*** //
const Review = ( { reviews } ) => {
    // Reviews Index
    const [index, setIndex] = React.useState(0);

    // Reviews Object
    const { author, job, comment, image } = reviews[index];

    // Ensure that the index value is never less than 0 and never greater than the index of the last review
    const checkIndex = (number) => {
        const lastReviewIndex = reviews.length - 1; //Index of last item in array
        return number > lastReviewIndex ? 0 : number < 0 ? lastReviewIndex : number;
    };

    // Switch to the previous review
    const previousReview = () => {
        setIndex(
            (index) => {
                let newIndex = index - 1;
                return checkIndex(newIndex);
            }
        );
    };

    // Switch to the next review
    const nextReview = () => {
        setIndex(
            (index) => {
                let newIndex = index + 1;
                return checkIndex(newIndex);
            }
        );
    };

    // Switch to a random review
    const randomReview = () => {
        let randomNumber = Math.floor(Math.random() * reviews.length);
        randomNumber === index ? randomNumber = index + 1 : setIndex(checkIndex(randomNumber));
        setIndex(checkIndex(randomNumber));
    };
    
    return(
        <>
            <div className='review'>
                <div className='image-container'>
                    <img src={ image } alt={ author } className='author-image'/>
                    <div className="right-quote"><FaQuoteRight /></div>
                </div>
                <div className='author-info'>
                    <h3 className='author-name'>{ author }</h3>
                    <h4 className='author-job'>{ job }</h4>
                </div>
                <p className='comment'>{ comment }</p>
                <div className='reviews-navigation'>
                    <button className='previous-review' onClick={ () => { previousReview(); } }><FaChevronLeft /></button>
                    <button className='next-review' onClick={ () => { nextReview(); } }><FaChevronRight /></button>
                </div>
                <button className='random-review' onClick={ () => { randomReview(); } }>Surprise Me</button>
            </div>
        </>
    );
};

// ***EXPORT*** //
export default Review;