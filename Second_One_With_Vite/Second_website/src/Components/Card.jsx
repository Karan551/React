import React from "react";

const imgUrl=[
    "https://images.pexels.com/photos/3532557/pexels-photo-3532557.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/3532544/pexels-photo-3532544.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/2522663/pexels-photo-2522663.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",

]

const Card = ({
  title = "Card Title",
  btnText = "Click Here",
  descText = "Enter Your Description.",
  imgId=3532557
}) => (
  <>
    <div className="col-4 p-2 my-1">
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={`https://images.pexels.com/photos/${imgId}/pexels-photo-${imgId}.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{descText}</p>
          <a href="#" className="btn new-btn">
            {btnText}
          </a>
        </div>
      </div>
    </div>
  </>
);

export default Card;
