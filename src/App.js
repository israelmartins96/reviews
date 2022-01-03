// ***IMPORTS*** //
// React
import React from 'react';
// Reviews Data
import reviewsData from './data-reviews';
// Reviews Component
import Review from './Review';

// ***COMPONENT*** //
function App() {
  // Initialise Reviews array
  const [reviews, setReviews] = React.useState([]);
  // Loading state of app
  const [isLoading, setIsLoading] = React.useState(true);

  // Get Reviews
  const getReviews = async () => {
    try {
      const response = await reviewsData;
      const reviews = await response;
      setReviews(reviews);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(
    () => {
      getReviews();
    },
    []
  );
  
  if (isLoading === true) return <div className='loading'><h2>Loading...</h2></div>
  
  return (
    <div className='centre-content'>
      <div className='container'>
        <header className='main-heading'>
          <h1>Our Reviews</h1>
          <div className='underline'></div>
        </header>
        <div className='reviews'>
          <Review reviews={ reviewsData }/>
        </div>
      </div>
    </div>
  );
}

// ***EXPORT*** //
export default App;
