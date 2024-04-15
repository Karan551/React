import React from "react";
import Card from "./Card";
const text =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi vitae ipsam accusantium ";
const FeatureSection = () => (
  <>
    <section className="contact bg-success ">
      <div className="container ">
        <div className="bg-success text-center">
          <p className="display-4 text-white p-4">Discover the amazing new app</p>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, rem?
          </p>
          <div className="row  p-4">
            <div className="col-6 text-right">
              <button className="btn btn-warning btn-lg">Play Store</button>
            </div>
            <button className="btn btn-warning btn-lg">App Store</button>
            <div className="col-6 text-center"></div>
          </div>
        </div>

        <h2 className="text-white">We love new friends!</h2>
        <div className="row">
            {/* This is card component */}
          <Card title="Germany Trip" btnText="Know More" descText={text} />

          <Card
            title="Germany Trip"
            btnText="Know More"
            descText={text}
            imgId="3532544"
          />

          <Card
            title="Germany Trip"
            btnText="Know More"
            descText={text}
            imgId="2522665"
          />
        </div>
      </div>
    </section>
  </>
);
export default FeatureSection;
