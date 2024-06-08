import { useState } from 'react';
import ImageSlider from './Components/ImageSlider';


function App() {

  //  This images api
  // https://picsum.photos/v2/list?page=2&limit=100
  return (
    <>
      <div className="container">

        <main className='main-container'>
          <ImageSlider url={"https://picsum.photos/v2/list"}
            pages={3}
            limits={5}
          />
        </main>

      </div>
    </>
  );
}

export default App;
