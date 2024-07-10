import React, { useEffect, useState } from 'react';

import Poster from "../images/Poster.jpeg";



function Info({eachMovie}) {

   /*  const [data, setData] = useState({});
    const [errorMsg, setErrorMsg] = useState(false);
    const [loading, setLoading] = useState(false);
 */



    return (
        <div>
        
            <h2>Detail Information are:-</h2>
            <div className="container">
                {eachMovie &&

                    <div>
                        <img className="rounded-t-lg w-full" src={eachMovie.Poster != "N/A" ? eachMovie.Poster : Poster} alt={`${eachMovie.Title}movie-img`} />
                    </div>


                }
              
            </div>
        </div>
    );
}


export default Info;
