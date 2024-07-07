import React from 'react';

function Info({ data }) {
    console.log("Movie Information is ----", data);
    return (
        <div>
            <h2>Detail Information are:-</h2>
            <div className="container">
                {
                   
                    <div>
                        <img className="rounded-t-lg w-full" src={data.Poster} alt={`${data.Title}movie-img`} />
                    </div>


                }
            </div>
        </div>
    );
}

export default Info;
