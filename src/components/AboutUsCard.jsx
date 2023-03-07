import React from "react";

export const AboutUsCard = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <div className="ui card">
            <div className="image">
              <img src="/AboutUsPictures/DavidGracia.png" />
            </div>
            <div className="content">
              <h3 className="card-header">David Gracia</h3>
              <p className="about-us-bio">
                I am a junior developer (in training) from Texas. My mom’s
                favorite soccer player. My sister’s least favorite comedian.
                Lead Potterhead.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="ui card">
            <div className="image">
              <img src="/AboutUsPictures/Alex.jpg" />
            </div>
            <div className="content">
              <h3 className="card-header">Alexander Lake</h3>
              <p className="about-us-bio">
                I am a huge space nerd. Food is life. Gaming is second. And
                Family third... I mean Family First.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="ui card">
            <div className="image">
              <img src="/AboutUsPictures/Monique.png" />
            </div>
            <div className="content">
              <h3 className="card-header">Monique Lane</h3>
              <p className="about-us-bio">
                Dev in training. Hufflepuff. I love books, watching true-crime,
                nature and food.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="ui card">
            <div className="image">
              <img src="AboutUsPictures/Phuong.png" />
            </div>
            <div className="content">
              <h3 className="card-header">Phuong Vu</h3>
              <p className="about-us-bio">
                Sleep. Eat oatmeal. Code. Eat miso and yogurt. Code. Workout.
                Code. Crash. Repeat. That is all.
              </p>
            </div>
          </div>
        </div>
      </div>

      <hr />
    </div>
  );
};
