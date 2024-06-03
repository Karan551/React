import { useState } from 'react';
import StarRating from './Components/StarRating';

function App() {


  return (
    <>
      <h1>Star Rating Project.</h1>
      <StarRating noOfStars={10} />
    </>
  );
}

export default App;
